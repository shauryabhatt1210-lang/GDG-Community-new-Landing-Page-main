import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BRICK_COLORS = [
  { top: '#FF3B3B', face: '#E3000B', edge: '#8F0006' }, // red
  { top: '#FFE45C', face: '#FFD500', edge: '#B89700' }, // yellow
  { top: '#2E9BEA', face: '#006CB7', edge: '#00406E' }, // blue
  { top: '#3FD27F', face: '#00A850', edge: '#006B31' }, // green
];
const U = 15; // pixels per stud
const K = U / 11; // scale for stud/face proportions

/* One LEGO brick seen from the front-top: lit top face, studs, darker front face. */
const drawBrick = (ctx, cols, c) => {
  const w = cols * U, top = 7 * K, front = 12 * K, x = -w / 2, y = -(top + front) / 2;
  ctx.lineJoin = 'round';
  ctx.lineWidth = 1.2;
  ctx.strokeStyle = c.edge;
  // studs (drawn first so the top face overlaps their base)
  for (let i = 0; i < cols; i++) {
    const sx = x + U * i + U / 2, sy = y + top / 2;
    ctx.fillStyle = c.face;
    ctx.fillRect(sx - 3.4 * K, sy - 3 * K, 6.8 * K, 3 * K);
    ctx.beginPath(); ctx.ellipse(sx, sy - 3 * K, 3.4 * K, 1.9 * K, 0, 0, Math.PI * 2);
    ctx.fillStyle = c.top; ctx.fill(); ctx.stroke();
  }
  ctx.fillStyle = c.top;  ctx.fillRect(x, y, w, top);
  ctx.fillStyle = c.face; ctx.fillRect(x, y + top, w, front);
  ctx.strokeRect(x, y, w, top + front);
  ctx.beginPath(); ctx.moveTo(x, y + top); ctx.lineTo(x + w, y + top); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.28)'; ctx.fillRect(x + 2, y + top + 2, w - 4, 2 * K);
};

let audio;
const snap = () => {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const t = audio.currentTime, len = 0.05;
    const buf = audio.createBuffer(1, audio.sampleRate * len, audio.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
    const noise = audio.createBufferSource(); noise.buffer = buf;
    const bp = audio.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2600; bp.Q.value = 1.2;
    const osc = audio.createOscillator(); osc.type = 'triangle';
    osc.frequency.setValueAtTime(1900, t); osc.frequency.exponentialRampToValueAtTime(700, t + 0.05);
    const g = audio.createGain(); g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
    noise.connect(bp).connect(g); osc.connect(g); g.connect(audio.destination);
    noise.start(t); osc.start(t); osc.stop(t + 0.08);
  } catch (e) { /* audio unavailable */ }
};

export const LegoClick = () => {
  const canvasRef = useRef(null);
  const soundRef = useRef(true);
  const [sound, setSound] = useState(() => {
    try { return localStorage.getItem('gdg_click_sound') !== 'off'; } catch (e) { return true; }
  });

  useEffect(() => {
    soundRef.current = sound;
    try { localStorage.setItem('gdg_click_sound', sound ? 'on' : 'off'); } catch (e) { /* ignore */ }
  }, [sound]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, raf = 0, last = 0;
    let bricks = [], rings = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const frame = (now) => {
      const dt = Math.max(0, Math.min((now - last) / 1000, 0.05)); last = now;
      ctx.clearRect(0, 0, w, h);
      rings = rings.filter((r) => (r.age += dt) < 0.35);
      rings.forEach((r) => {
        const p = r.age / 0.35;
        ctx.globalAlpha = 1 - p;
        ctx.strokeStyle = '#FFD500'; ctx.lineWidth = 3 * (1 - p) + 1;
        ctx.beginPath(); ctx.arc(r.x, r.y, 6 + p * 26, 0, Math.PI * 2); ctx.stroke();
      });
      bricks = bricks.filter((b) => (b.age += dt) < b.life);
      bricks.forEach((b) => {
        b.vy += 1500 * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.rot += b.spin * dt;
        const p = b.age / b.life;
        ctx.save();
        ctx.globalAlpha = p < 0.7 ? 1 : 1 - (p - 0.7) / 0.3;
        ctx.translate(b.x, b.y); ctx.rotate(b.rot);
        drawBrick(ctx, b.cols, b.color);
        ctx.restore();
      });
      ctx.globalAlpha = 1;
      raf = bricks.length || rings.length ? requestAnimationFrame(frame) : 0;
      if (!raf) ctx.clearRect(0, 0, w, h);
    };

    const onDown = (e) => {
      // Only react to real buttons and button-style links, not empty page areas
      const el = e.target.closest && e.target.closest('button, a[href], [role="button"], [role="tab"], input[type="submit"]');
      if (!el || el.disabled || el.getAttribute('aria-disabled') === 'true') return;
      if (soundRef.current && !el.hasAttribute('data-click-toggle')) snap();
      if (reduce) return;
      rings.push({ x: e.clientX, y: e.clientY, age: 0 });
      for (let i = 0; i < 9; i++) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.35;
        const s = 260 + Math.random() * 380;
        bricks.push({
          x: e.clientX, y: e.clientY, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
          rot: Math.random() * 6.28, spin: (Math.random() - 0.5) * 14,
          cols: Math.random() < 0.55 ? 2 : 4, color: BRICK_COLORS[i % 4],
          age: 0, life: 0.8 + Math.random() * 0.35,
        });
      }
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointerdown', onDown, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onDown, true);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 w-full h-full pointer-events-none z-[9999]" />
      <button
        data-click-toggle
        onClick={() => setSound((s) => !s)}
        aria-pressed={sound}
        aria-label={sound ? 'Mute LEGO click sound' : 'Unmute LEGO click sound'}
        title={sound ? 'Click sound on' : 'Click sound off'}
        className="fixed bottom-4 left-4 z-[9998] flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFD500] text-slate-900 border-b-4 border-[#B89700] shadow-lg hover:brightness-105 active:translate-y-0.5 active:border-b-2 transition-all"
      >
        {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
};
