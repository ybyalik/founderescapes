'use client';

import { useEffect, useRef, useState } from 'react';
import { FIN } from '@/app/home2/_components/fin';

// ── Variant 03 · MAGNETIC 3D TILT + CURSOR HALO ────────────────────────────
// Headline tilts in 3D toward the cursor, casts a real shadow.
// A lime spotlight follows the cursor across the page.
// Buttons are magnetically attracted toward the cursor.
export default function V3Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
      setHover(true);
    };
    const onLeave = () => setHover(false);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // -1..1 from center
  const dx = pos.x * 2 - 1;
  const dy = pos.y * 2 - 1;

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: FIN.ink,
        color: '#fafaf7',
        fontFamily: FIN.sans,
        cursor: 'none',
      }}
    >
      {/* Subtle dot grid bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 1.2px, transparent 1.5px)`,
          backgroundSize: '36px 36px',
          opacity: 0.7,
        }}
      />

      {/* Lime spotlight following cursor */}
      <div
        style={{
          position: 'absolute',
          left: `calc(${pos.x * 100}% - 350px)`,
          top: `calc(${pos.y * 100}% - 350px)`,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${FIN.ochre}55 0%, ${FIN.ochre}22 25%, transparent 60%)`,
          mixBlendMode: 'screen',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.4s, left 0.18s cubic-bezier(.2,.7,.3,1), top 0.18s cubic-bezier(.2,.7,.3,1)',
          zIndex: 2,
        }}
      />

      {/* Custom cursor — small lime dot */}
      <div
        style={{
          position: 'absolute',
          left: `calc(${pos.x * 100}% - 6px)`,
          top: `calc(${pos.y * 100}% - 6px)`,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: FIN.ochre,
          boxShadow: `0 0 24px ${FIN.ochre}`,
          pointerEvents: 'none',
          opacity: hover ? 1 : 0,
          zIndex: 100,
        }}
      />

      {/* Top eyebrow */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          left: 28,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 14px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 999,
          fontFamily: FIN.mono,
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v3Pulse 1.4s ease-in-out infinite' }} />
        Founder Escapes · Move your cursor
      </div>

      {/* 3D-tilting headline */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 44px',
          perspective: 1400,
          zIndex: 5,
        }}
      >
        <h1
          style={{
            fontFamily: FIN.sans,
            fontSize: 'clamp(64px, 10vw, 168px)',
            fontWeight: 700,
            letterSpacing: '-0.045em',
            lineHeight: 0.9,
            margin: 0,
            maxWidth: 1400,
            transform: `rotateX(${-dy * 8}deg) rotateY(${dx * 10}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.18s cubic-bezier(.2,.7,.3,1)',
            textShadow: `${dx * -14}px ${-dy * 14}px 30px rgba(0,0,0,0.6)`,
          }}
        >
          Trade your desk
          <br />
          for a{' '}
          <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre }}>ridgeline.</span>
        </h1>

        <p
          style={{
            marginTop: 32,
            fontFamily: FIN.serif,
            fontStyle: 'italic',
            fontSize: 22,
            lineHeight: 1.4,
            maxWidth: 540,
            color: 'rgba(250,250,247,0.85)',
            transform: `translate3d(${dx * 12}px, ${dy * 12}px, 0)`,
            transition: 'transform 0.3s cubic-bezier(.2,.7,.3,1)',
          }}
        >
          Eight days. Ten founders. Zero meetings. The interesting conversations are still out there.
        </p>

        {/* Magnetic CTAs */}
        <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
          <a
            href="#apply"
            style={{
              background: FIN.ochre,
              color: '#0a0a0a',
              padding: '18px 32px',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              transform: `translate3d(${dx * 18}px, ${dy * 14}px, 0) scale(${hover ? 1.04 : 1})`,
              transition: 'transform 0.25s cubic-bezier(.2,.7,.3,1)',
              boxShadow: `0 18px 40px ${FIN.ochre}55`,
              cursor: 'none',
            }}
          >
            Request an invitation →
          </a>
          <a
            href="#trips"
            style={{
              color: '#fafaf7',
              padding: '18px 28px',
              fontSize: 15,
              fontWeight: 500,
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: 999,
              transform: `translate3d(${dx * 10}px, ${dy * 8}px, 0)`,
              transition: 'transform 0.3s cubic-bezier(.2,.7,.3,1)',
              cursor: 'none',
            }}
          >
            See the trips
          </a>
        </div>
      </div>

      {/* Bottom microreadout */}
      <div style={{ position: 'absolute', bottom: 28, left: 44, right: 44, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,250,247,0.55)' }}>
        <span>X {(pos.x * 100).toFixed(0)}.0  ·  Y {(pos.y * 100).toFixed(0)}.0  ·  TRACKING</span>
        <span>412 founders · 28 trips · 6 continents</span>
      </div>

      <style>{`
        @keyframes v3Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
