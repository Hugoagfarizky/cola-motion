import * as THREE from 'three';
import { createLabelTexture, FLAVORS } from './labelTexture.js';
import { createWetMaps } from './wetTexture.js';

// Proportions roughly match a 330 ml can (radius 1 unit ≈ 33 mm).
const R = 1;
const BODY_TOP = 1.35;
const BODY_BOTTOM = -1.45;

function lathe(points, segments = 96) {
  return new THREE.LatheGeometry(
    points.map(([x, y]) => new THREE.Vector2(x, y)),
    segments,
  );
}

function createPullTab(material) {
  // Flat ring-pull: outer rounded plate with a finger hole and a rivet hole.
  const shape = new THREE.Shape();
  const w = 0.26;
  const l = 0.62;
  shape.moveTo(-w, 0);
  shape.lineTo(-w, l - w);
  shape.absarc(0, l - w, w, Math.PI, 0, true);
  shape.lineTo(w, 0);
  shape.absarc(0, 0, w, 0, Math.PI, true);

  const finger = new THREE.Path();
  finger.absellipse(0, l - w - 0.02, 0.16, 0.13, 0, Math.PI * 2, false);
  shape.holes.push(finger);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.025,
    bevelEnabled: true,
    bevelSize: 0.012,
    bevelThickness: 0.01,
    bevelSegments: 2,
    curveSegments: 24,
  });
  geo.rotateX(-Math.PI / 2);

  const tab = new THREE.Mesh(geo, material);
  // Pivot sits at the rivet (centre of the lid); the tab points toward the viewer.
  const pivot = new THREE.Group();
  pivot.position.set(0, 1.705, 0.05);
  pivot.add(tab);
  return pivot;
}

/**
 * Real 3D water beads that cling to the can, then slip and run down it.
 * They refract the label behind them (transmission), like real water.
 */
function createDrips(parent, count = 16) {
  const geo = new THREE.SphereGeometry(1, 28, 20);
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0.02,
    transmission: 1,
    thickness: 0.06,
    ior: 1.33,
    clearcoat: 1,
    clearcoatRoughness: 0,
    specularIntensity: 1,
    envMapIntensity: 1.6,
  });

  const rand = (a, b) => a + Math.random() * (b - a);
  const drops = [];

  function respawn(d, initial = false) {
    d.theta = rand(-Math.PI, Math.PI);
    d.y = initial ? rand(BODY_BOTTOM + 0.3, BODY_TOP - 0.1) : rand(0.1, BODY_TOP - 0.1);
    d.v = 0;
    d.size = rand(0.035, 0.075);
    d.hold = rand(0.5, 4); // seconds it clings before slipping
    d.grow = initial ? 1 : 0;
  }

  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(geo, mat);
    const d = { mesh };
    respawn(d, true);
    drops.push(d);
    parent.add(mesh);
  }

  const api = {
    rate: 1,
    update(dt) {
      for (const d of drops) {
        d.grow = Math.min(1, d.grow + dt * 1.5);
        if (d.hold > 0) {
          d.hold -= dt * api.rate;
        } else {
          // Gravity, with random stick-slip like real water on aluminium.
          d.v = Math.min(1.4, d.v + dt * 1.6 * d.size * 18);
          if (Math.random() < dt * 0.6) d.v *= 0.2;
          d.y -= d.v * dt;
          if (d.y < BODY_BOTTOM + 0.02) respawn(d);
        }
        const stretch = 1 + d.v * 0.9;
        const s = d.size * (0.2 + 0.8 * d.grow);
        const r = R + s * 0.08;
        d.mesh.position.set(Math.sin(d.theta) * r, d.y, Math.cos(d.theta) * r);
        d.mesh.rotation.y = d.theta;
        d.mesh.scale.set(s, s * 1.15 * stretch, s * 0.4);
      }
    },
  };
  return api;
}

export function createCan(renderer) {
  const group = new THREE.Group();

  const textures = {};
  for (const key of Object.keys(FLAVORS)) textures[key] = createLabelTexture(key, renderer);
  // Condensation maps. The cylinder is ~2.2× wider (circumference) than tall,
  // so the square maps repeat twice around it to keep droplets round.
  const wet = createWetMaps(1024);
  const bodyWet = {};
  for (const [k, tex] of Object.entries(wet)) {
    bodyWet[k] = tex.clone();
    bodyWet[k].repeat.set(2, 1);
    bodyWet[k].needsUpdate = true;
  }

  const labelMat = new THREE.MeshPhysicalMaterial({
    map: textures.original,
    metalness: 0.55,
    roughness: 1, // scaled by roughnessMap: misty between drops, glossy on them
    roughnessMap: bodyWet.roughness,
    normalMap: bodyWet.normal,
    normalScale: new THREE.Vector2(0.5, 0.5),
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    clearcoatNormalMap: bodyWet.normal,
    clearcoatNormalScale: new THREE.Vector2(1.4, 1.4),
    sheen: 0.6,
    sheenColor: new THREE.Color(0xffffff),
    sheenColorMap: bodyWet.fog,
    sheenRoughness: 0.55,
    envMapIntensity: 1.2,
  });

  // Aluminium parts also carry a lighter layer of condensation.
  const metalWet = {};
  for (const k of ['normal', 'roughness']) {
    metalWet[k] = wet[k].clone();
    metalWet[k].repeat.set(4, 0.6);
    metalWet[k].needsUpdate = true;
  }

  const metalMat = new THREE.MeshPhysicalMaterial({
    color: 0xdfe3e8,
    metalness: 1,
    roughness: 0.45,
    roughnessMap: metalWet.roughness,
    normalMap: metalWet.normal,
    normalScale: new THREE.Vector2(0.15, 0.15),
    clearcoat: 0.6,
    clearcoatRoughness: 0.08,
    side: THREE.DoubleSide,
  });

  const darkMetalMat = metalMat.clone();
  darkMetalMat.color.set(0xb9bec5);
  darkMetalMat.roughness = 0.75;

  // Printed body.
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(R, R, BODY_TOP - BODY_BOTTOM, 128, 1, true),
    labelMat,
  );
  body.position.y = (BODY_TOP + BODY_BOTTOM) / 2;
  group.add(body);

  // Neck + rim + recessed lid.
  const top = new THREE.Mesh(
    lathe([
      [R, BODY_TOP],
      [0.99, 1.42],
      [0.93, 1.55],
      [0.87, 1.65],
      [0.855, 1.72],
      [0.865, 1.76],
      [0.85, 1.785],
      [0.82, 1.77],
      [0.8, 1.72],
      [0.78, 1.69],
      [0.0, 1.69],
    ]),
    metalMat,
  );
  group.add(top);

  // Tapered base with a domed bottom.
  const bottom = new THREE.Mesh(
    lathe([
      [0.0, -1.58],
      [0.55, -1.62],
      [0.72, -1.74],
      [0.78, -1.765],
      [0.86, -1.72],
      [0.95, -1.6],
      [R, BODY_BOTTOM],
    ]),
    darkMetalMat,
  );
  group.add(bottom);

  // Rivet + opening score line on the lid.
  const rivet = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 24), metalMat);
  rivet.position.set(0, 1.7, 0.05);
  group.add(rivet);

  const score = new THREE.Mesh(
    new THREE.TorusGeometry(0.22, 0.008, 6, 48),
    darkMetalMat,
  );
  score.rotation.x = -Math.PI / 2;
  score.scale.set(1, 1.35, 1);
  score.position.set(0, 1.695, 0.42);
  group.add(score);

  // Dark opening revealed when the can is "popped".
  const opening = new THREE.Mesh(
    new THREE.CircleGeometry(0.2, 32),
    new THREE.MeshBasicMaterial({ color: 0x1a0503, transparent: true, opacity: 0 }),
  );
  opening.rotation.x = -Math.PI / 2;
  opening.scale.set(1, 1.3, 1);
  opening.position.set(0, 1.697, 0.42);
  group.add(opening);

  const tab = createPullTab(metalMat);
  group.add(tab);

  const drips = createDrips(group);

  // Wetness 0 = dry, 1 = freshly out of the fridge, >1 = dripping wet.
  function setWetness(a) {
    labelMat.normalScale.setScalar(0.5 * a);
    labelMat.clearcoatNormalScale.setScalar(1.4 * a);
    labelMat.sheen = Math.min(1, 0.6 * a);
    metalMat.normalScale.setScalar(0.15 * a);
    darkMetalMat.normalScale.setScalar(0.15 * a);
    drips.rate = a;
  }

  let currentFlavor = 'original';
  function setFlavor(key) {
    if (key === currentFlavor || !textures[key]) return;
    currentFlavor = key;
    labelMat.map = textures[key];
    labelMat.needsUpdate = true;
  }

  return {
    group,
    labelMat,
    tab,
    opening,
    setFlavor,
    setWetness,
    wetMaps: wet,
    update: (dt) => drips.update(dt),
    get flavor() {
      return currentFlavor;
    },
  };
}
