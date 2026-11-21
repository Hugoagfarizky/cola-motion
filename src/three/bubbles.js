import * as THREE from 'three';

function bubbleSprite() {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size * 0.4, size * 0.4, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,0.95)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.35)');
  g.addColorStop(0.8, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Ambient soda bubbles drifting upward across the scene. */
export function createBubbles(count = 260) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  const phases = new Float32Array(count);
  const bounds = { x: 9, y: 6, zMin: -6, zMax: 2 };

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() * 2 - 1) * bounds.x;
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * bounds.y;
    positions[i * 3 + 2] = bounds.zMin + Math.random() * (bounds.zMax - bounds.zMin);
    speeds[i] = 0.4 + Math.random() * 1.1;
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.14,
    map: bubbleSprite(),
    transparent: true,
    depthWrite: false,
    opacity: 0.7,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geo, mat);
  const state = { speed: 1 };

  function update(dt, time) {
    const pos = geo.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const iy = i * 3 + 1;
      pos[iy] += speeds[i] * dt * state.speed;
      pos[i * 3] += Math.sin(time * 1.5 + phases[i]) * dt * 0.15;
      if (pos[iy] > bounds.y) {
        pos[iy] = -bounds.y;
        pos[i * 3] = (Math.random() * 2 - 1) * bounds.x;
      }
    }
    geo.attributes.position.needsUpdate = true;
  }

  return { points, material: mat, state, update };
}

/** One-shot fizz burst that sprays out of the can's opening. */
export function createBurst(count = 160) {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const life = new Float32Array(count).fill(-1);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.1,
    map: bubbleSprite(),
    transparent: true,
    depthWrite: false,
    opacity: 0,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  let active = 0;

  function fire(origin) {
    for (let i = 0; i < count; i++) {
      positions[i * 3] = origin.x + (Math.random() - 0.5) * 0.2;
      positions[i * 3 + 1] = origin.y;
      positions[i * 3 + 2] = origin.z + (Math.random() - 0.5) * 0.2;
      const a = Math.random() * Math.PI * 2;
      const s = 0.6 + Math.random() * 2.2;
      velocities[i * 3] = Math.cos(a) * s;
      velocities[i * 3 + 1] = 3 + Math.random() * 5;
      velocities[i * 3 + 2] = Math.sin(a) * s;
      life[i] = 1;
    }
    active = 1.6;
    mat.opacity = 1;
  }

  function update(dt) {
    if (active <= 0) return;
    active -= dt;
    for (let i = 0; i < count; i++) {
      if (life[i] <= 0) continue;
      velocities[i * 3 + 1] -= 7 * dt;
      positions[i * 3] += velocities[i * 3] * dt;
      positions[i * 3 + 1] += velocities[i * 3 + 1] * dt;
      positions[i * 3 + 2] += velocities[i * 3 + 2] * dt;
      life[i] -= dt * 0.7;
    }
    mat.opacity = Math.max(0, Math.min(1, active / 0.8));
    geo.attributes.position.needsUpdate = true;
  }

  return { points, fire, update };
}
