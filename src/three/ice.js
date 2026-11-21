import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// Slightly irregular cube so each ice cube looks hand-cut, not perfect.
function makeCubeGeometry(seed) {
  const geo = new RoundedBoxGeometry(1, 1, 1, 4, 0.16);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n =
      Math.sin(v.x * 5.1 + seed) * Math.cos(v.y * 4.3 - seed) * 0.035 +
      Math.sin(v.z * 6.7 + seed * 2) * 0.02;
    v.multiplyScalar(1 + n);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

/** Ice cubes orbiting the can. `state.show` (0…1) scales them in and out. */
export function createIce(wetNormal) {
  const group = new THREE.Group();

  const normal = wetNormal.clone();
  normal.repeat.set(0.6, 0.6);
  normal.wrapT = THREE.RepeatWrapping;
  normal.needsUpdate = true;

  // Additive "glass" shading: the body barely tints what's behind it while the
  // studio reflections and wet surface add bright, icy highlights on top.
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0x081218,
    metalness: 0,
    roughness: 0.04,
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    clearcoatNormalMap: normal,
    clearcoatNormalScale: new THREE.Vector2(0.8, 0.8),
    normalMap: normal,
    normalScale: new THREE.Vector2(0.4, 0.4),
    sheen: 0.6,
    sheenColor: new THREE.Color(0x7cc8ff),
    sheenRoughness: 0.3,
    envMapIntensity: 1.3,
    transparent: true,
    depthWrite: false,
    // Add light to colour but leave canvas alpha untouched: with the canvas'
    // premultiplied compositing this adds the highlights onto the page behind.
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.ZeroFactor,
    blendDstAlpha: THREE.OneFactor,
  });

  // Hand-placed around the can: some in front, some behind for depth.
  const layout = [
    { p: [-2.25, 1.3, 0.8], s: 0.62 },
    { p: [2.35, -0.9, 1.1], s: 0.72 },
    { p: [1.9, 1.9, -1.6], s: 0.5 },
    { p: [-2.0, -1.7, -1.0], s: 0.55 },
    { p: [-0.6, -2.35, 1.6], s: 0.42 },
    { p: [0.9, 2.5, 0.6], s: 0.36 },
  ];

  const cubes = layout.map(({ p, s }, i) => {
    const mesh = new THREE.Mesh(makeCubeGeometry(i * 1.7), mat);
    mesh.position.set(...p);
    mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    group.add(mesh);
    return {
      mesh,
      base: new THREE.Vector3(...p),
      size: s,
      spin: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.6),
      phase: Math.random() * Math.PI * 2,
    };
  });

  const state = { show: 1 };

  function update(dt, t, pointer) {
    group.visible = state.show > 0.001;
    if (!group.visible) return;
    for (const c of cubes) {
      c.mesh.rotation.x += c.spin.x * dt;
      c.mesh.rotation.y += c.spin.y * dt;
      c.mesh.rotation.z += c.spin.z * dt;
      // Gentle bob + parallax: closer cubes react more to the pointer.
      const depth = 1 + c.base.z * 0.25;
      c.mesh.position.set(
        c.base.x * (0.6 + 0.4 * state.show) + pointer.x * 0.25 * depth,
        c.base.y * (0.6 + 0.4 * state.show) + Math.sin(t * 0.9 + c.phase) * 0.15 - pointer.y * 0.2 * depth,
        c.base.z,
      );
      c.mesh.scale.setScalar(c.size * state.show);
    }
  }

  return { group, state, update };
}

/** Soft contact shadow that grounds the floating can. */
export function createShadow() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(128, 32, 0, 128, 32, 128);
  g.addColorStop(0, 'rgba(0,0,0,0.55)');
  g.addColorStop(0.4, 'rgba(0,0,0,0.25)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.setTransform(1, 0, 0, 0.25, 0, 24);
  ctx.fillRect(0, -96, 256, 256);

  const tex = new THREE.CanvasTexture(c);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.2, 0.8),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false }),
  );
  mesh.renderOrder = -1;
  return mesh;
}
