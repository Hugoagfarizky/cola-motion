import * as THREE from 'three';

/**
 * Procedurally generates condensation maps for a cold, wet can:
 *  - normal:    tangent-space normal map of droplets + drip trails
 *  - roughness: misty (rough) fog between drops, glossy (smooth) water on drops
 *  - fog:       white mask of the misty haze, used as sheen colour
 * All maps tile seamlessly in U so they wrap around the cylinder.
 */
export function createWetMaps(size = 1024) {
  const W = size;
  const H = size;
  const height = new Float32Array(W * H);
  const fog = new Float32Array(W * H).fill(1);

  const rand = (a, b) => a + Math.random() * (b - a);

  // Spherical-cap droplet; overlapping drops keep the highest point.
  function drop(cx, cy, rx, ry, peak = 1) {
    const x0 = Math.floor(cx - rx - 1);
    const x1 = Math.ceil(cx + rx + 1);
    const y0 = Math.max(0, Math.floor(cy - ry - 1));
    const y1 = Math.min(H - 1, Math.ceil(cy + ry + 1));
    for (let y = y0; y <= y1; y++) {
      const dy = (y - cy) / ry;
      for (let xr = x0; xr <= x1; xr++) {
        const dx = (xr - cx) / rx;
        const d2 = dx * dx + dy * dy;
        if (d2 >= 1) continue;
        const x = ((xr % W) + W) % W; // wrap horizontally
        const i = y * W + x;
        const h = Math.sqrt(1 - d2) * peak;
        if (h > height[i]) height[i] = h;
        // Water wipes the mist away around each droplet.
        const clear = Math.min(1, (1 - d2) * 3);
        fog[i] = Math.min(fog[i], 1 - clear);
      }
    }
  }

  // Wipe the mist (a clean band where a drip has already run down).
  function wipe(cx, cy, r) {
    const y0 = Math.max(0, Math.floor(cy - r));
    const y1 = Math.min(H - 1, Math.ceil(cy + r));
    for (let y = y0; y <= y1; y++) {
      for (let xr = Math.floor(cx - r); xr <= Math.ceil(cx + r); xr++) {
        const d = Math.abs(xr - cx) / r;
        if (d >= 1) continue;
        const x = ((xr % W) + W) % W;
        const i = y * W + x;
        fog[i] = Math.min(fog[i], d * d * 0.6);
        height[i] *= 0.15;
      }
    }
  }

  // 1. Micro-condensation: dense fine mist droplets.
  for (let i = 0; i < 9000; i++) {
    const r = rand(0.8, 2.6);
    drop(rand(0, W), rand(0, H), r, r * rand(0.9, 1.15), 0.35);
  }

  // 2. Drip trails: a water run with a fat drop at its tip.
  for (let i = 0; i < 26; i++) {
    let x = rand(0, W);
    const yStart = rand(-40, H * 0.55);
    const len = rand(120, 520);
    const w = rand(2.5, 6);
    for (let y = yStart; y < yStart + len && y < H; y += 1) {
      x += Math.sin(y * 0.05 + i) * 0.25 + rand(-0.25, 0.25);
      wipe(x, y, w * 2.4);
      drop(x, y, w, 2.2, 0.45); // thin water film along the trail
    }
    const tipY = Math.min(H - 10, yStart + len);
    const tipR = rand(7, 13);
    drop(x, tipY, tipR, tipR * 1.3, 1);
  }

  // 3. Small and medium droplets.
  for (let i = 0; i < 1400; i++) {
    const r = rand(2.5, 7);
    drop(rand(0, W), rand(0, H), r, r * rand(1, 1.2), rand(0.6, 0.9));
  }

  // 4. A few large beads, slightly heavier at the bottom.
  for (let i = 0; i < 140; i++) {
    const r = rand(8, 17);
    drop(rand(0, W), rand(0, H), r, r * rand(1.1, 1.35), 1);
  }

  // ---- Bake to textures ----
  const normalData = new Uint8Array(W * H * 4);
  const roughData = new Uint8Array(W * H * 4);
  const fogData = new Uint8Array(W * H * 4);
  const strength = 6;
  // Generation used "screen" rows (row 0 = top). Data textures are not flipped,
  // so output row 0 is v = 0 (bottom of the can): read source rows mirrored.
  const hAt = (x, y) => {
    const sy = H - 1 - Math.min(H - 1, Math.max(0, y));
    return height[sy * W + ((x + W) % W)];
  };

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (H - 1 - y) * W + x; // source index
      const o = (y * W + x) * 4; // output index
      const dx = (hAt(x + 1, y) - hAt(x - 1, y)) * strength;
      const dy = (hAt(x, y + 1) - hAt(x, y - 1)) * strength;
      const inv = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      normalData[o] = (-dx * inv * 0.5 + 0.5) * 255;
      normalData[o + 1] = (-dy * inv * 0.5 + 0.5) * 255;
      normalData[o + 2] = (inv * 0.5 + 0.5) * 255;
      normalData[o + 3] = 255;

      const h = height[i];
      const f = fog[i];
      // Mist is rough and matte, water is a glossy mirror.
      const wetness = Math.min(1, h * 6);
      const rough = 0.08 + 0.5 * f * (1 - wetness);
      roughData[o] = roughData[o + 1] = roughData[o + 2] = rough * 255;
      roughData[o + 3] = 255;

      const fv = f * (1 - wetness) * 255;
      fogData[o] = fogData[o + 1] = fogData[o + 2] = fv;
      fogData[o + 3] = 255;
    }
  }

  const make = (data) => {
    const t = new THREE.DataTexture(data, W, H, THREE.RGBAFormat);
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    t.magFilter = THREE.LinearFilter;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.generateMipmaps = true;
    t.needsUpdate = true;
    return t;
  };

  return { normal: make(normalData), roughness: make(roughData), fog: make(fogData) };
}
