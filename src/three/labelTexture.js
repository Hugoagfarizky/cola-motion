import * as THREE from 'three';

// Flavor palettes for the can label.
export const FLAVORS = {
  original: { base: '#e3000b', shade: '#a80008', mark: '#ffffff', ribbon: '#ffffff', sub: '' },
  zero: { base: '#151515', shade: '#000000', mark: '#e3000b', ribbon: '#e3000b', sub: 'ZERO SUGAR' },
  diet: { base: '#d4d7dc', shade: '#9aa0a8', mark: '#e3000b', ribbon: '#e3000b', sub: 'LIGHT TASTE' },
  cherry: { base: '#6a001a', shade: '#3a000d', mark: '#ffffff', ribbon: '#ff5c8a', sub: 'CHERRY' },
};

const W = 2048;
const H = 1024;

function drawRibbon(ctx, color, yBase, amp, thickness) {
  // A flowing "dynamic ribbon" wave that wraps seamlessly around the can.
  ctx.beginPath();
  const steps = 200;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * W;
    const t = (i / steps) * Math.PI * 4; // two full waves around the can
    const y = yBase + Math.sin(t) * amp;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  for (let i = steps; i >= 0; i--) {
    const x = (i / steps) * W;
    const t = (i / steps) * Math.PI * 4;
    const taper = 0.55 + 0.45 * Math.cos(t);
    const y = yBase + Math.sin(t) * amp + thickness * taper;
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawWordmark(ctx, cx, cy, flavor) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-0.08);
  ctx.fillStyle = flavor.mark;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '170px Pacifico, cursive';
  ctx.fillText('Coca-Cola', 0, 0);
  ctx.restore();

  if (flavor.sub) {
    ctx.save();
    ctx.fillStyle = flavor.mark;
    ctx.textAlign = 'center';
    ctx.font = '56px Anton, Impact, sans-serif';
    if ('letterSpacing' in ctx) ctx.letterSpacing = '10px';
    ctx.fillText(flavor.sub, cx, cy + 170);
    ctx.restore();
  }
}

export function createLabelTexture(key, renderer) {
  const flavor = FLAVORS[key];
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Base color with soft vertical shading at top/bottom.
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, flavor.shade);
  grad.addColorStop(0.12, flavor.base);
  grad.addColorStop(0.88, flavor.base);
  grad.addColorStop(1, flavor.shade);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Fine brushed lines to suggest printed aluminium.
  ctx.globalAlpha = 0.05;
  ctx.fillStyle = '#ffffff';
  for (let x = 0; x < W; x += 6) ctx.fillRect(x, 0, 1, H);
  ctx.globalAlpha = 1;

  drawRibbon(ctx, flavor.ribbon, H * 0.72, 38, 46);

  // Two wordmarks so the logo is visible from the front and the back.
  drawWordmark(ctx, W * 0.25, H * 0.44, flavor);
  drawWordmark(ctx, W * 0.75, H * 0.44, flavor);

  // Small print.
  ctx.fillStyle = flavor.mark;
  ctx.globalAlpha = 0.8;
  ctx.font = '600 30px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('330 ml', W * 0.5, H * 0.9);
  ctx.fillText('330 ml', 0, H * 0.9);
  ctx.fillText('330 ml', W, H * 0.9);
  ctx.globalAlpha = 1;

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.offset.x = 0.25; // centre the first wordmark on the can's front
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return tex;
}
