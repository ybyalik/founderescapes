'use client';

import { useEffect, useRef } from 'react';
import { FIN } from '@/app/home2/_components/fin';

// ── Variant 04 · AURORA PARTICLE FIELD ─────────────────────────────────────
// Canvas-driven particle system that simulates aurora borealis behind the type.
// Lime + dark green flowing currents. No video — pure motion.
export default function V4WordReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type Particle = { x: number; y: number; vx: number; vy: number; size: number; hueShift: number; life: number };
    const PARTS: Particle[] = [];
    const TARGET = 140;

    const spawn = (): Particle => ({
      x: Math.random() * w,
      y: h + 20 + Math.random() * 60,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.2 - Math.random() * 0.55,
      size: 80 + Math.random() * 240,
      hueShift: Math.random(),
      life: 0,
    });

    for (let i = 0; i < TARGET; i++) {
      const p = spawn();
      p.y = Math.random() * h;
      p.life = Math.random() * 600;
      PARTS.push(p);
    }

    let t = 0;
    const tick = () => {
      t += 0.005;
      // dark blue night sky
      ctx.fillStyle = 'rgba(5,12,18,0.18)';
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'lighter';
      for (const p of PARTS) {
        // gentle horizontal drift influenced by sine
        p.vx += Math.sin((p.y * 0.005) + t) * 0.0025;
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        // wrap / respawn
        if (p.y < -p.size || p.x < -p.size || p.x > w + p.size || p.life > 800) {
          Object.assign(p, spawn());
        }

        // colors — lime to teal interpolation
        const hue = p.hueShift < 0.5 ? '215, 255, 58' : '14, 124, 134'; // lime / teal
        const alpha = Math.min(0.06 + (p.size / 320) * 0.18, 0.24);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(${hue}, ${alpha})`);
        grad.addColorStop(0.6, `rgba(${hue}, ${alpha * 0.3})`);
        grad.addColorStop(1, `rgba(${hue}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#050c12', color: '#fafaf7', fontFamily: FIN.sans }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', zIndex: 1 }} />

      {/* Stars layer */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.55, zIndex: 2, pointerEvents: 'none' }}>
        {[...Array(60)].map((_, i) => {
          const cx = (i * 37) % 100;
          const cy = (i * 53) % 60;
          return <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={Math.random() < 0.1 ? 1.6 : 0.8} fill="#fff" opacity={0.4 + Math.random() * 0.6}>
            <animate attributeName="opacity" values={`${0.3 + Math.random() * 0.3};${0.7 + Math.random() * 0.3};${0.3 + Math.random() * 0.3}`} dur={`${3 + Math.random() * 4}s`} repeatCount="indefinite" />
          </circle>;
        })}
      </svg>

      {/* Distant mountain silhouette */}
      <svg viewBox="0 0 1600 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '22%', zIndex: 3, pointerEvents: 'none' }}>
        <path d="M0 200 L 0 140 L 120 80 L 240 130 L 380 60 L 520 120 L 680 70 L 840 130 L 1000 80 L 1160 130 L 1320 70 L 1460 120 L 1600 90 L 1600 200 Z" fill="#020608" />
      </svg>

      {/* Top eyebrow */}
      <div style={{ position: 'absolute', top: 28, left: 28, zIndex: 10, display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v4Pulse 1.4s ease-in-out infinite' }} />
        Founder Escapes · 65° N
      </div>

      {/* Headline */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 44px', zIndex: 10 }}>
        <h1
          style={{
            fontFamily: FIN.sans,
            fontSize: 'clamp(64px, 10vw, 168px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            margin: 0,
            maxWidth: 1400,
          }}
        >
          See it{' '}
          <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre }}>before</span>
          <br />
          everyone else does.
        </h1>
        <p style={{ marginTop: 36, fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, maxWidth: 540, color: 'rgba(250,250,247,0.85)' }}>
          Six hand-built expeditions. One cohort of ten. Zero meetings, all September.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          <a href="#apply" style={{ background: FIN.ochre, color: '#0a0a0a', padding: '18px 30px', borderRadius: 999, fontSize: 15, fontWeight: 600, boxShadow: `0 12px 32px ${FIN.ochre}55` }}>
            Request an invitation
          </a>
          <a href="#trips" style={{ color: '#fafaf7', padding: '18px 26px', fontSize: 15, fontWeight: 500, border: '1px solid rgba(255,255,255,0.4)', borderRadius: 999 }}>
            See the trips
          </a>
        </div>
      </div>

      {/* Bottom HUD */}
      <div style={{ position: 'absolute', bottom: 28, left: 44, right: 44, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,250,247,0.55)' }}>
        <span>FAROE ISLANDS · 62°N · WIND 14KT · -4°C</span>
        <span>NEXT DEPARTURE · MAR 14</span>
      </div>

      <style>{`
        @keyframes v4Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
