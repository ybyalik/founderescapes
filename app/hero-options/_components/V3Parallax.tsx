'use client';

import { useEffect, useRef, useState } from 'react';
import { FIN } from '@/app/home2/_components/fin';

export default function V3Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [mx, setMx] = useState(0); // -1 to 1

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width; // 0..1
      setMx(x * 2 - 1);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  // Parallax shift amounts per layer
  const shift = (depth: number) => mx * depth;

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: `linear-gradient(180deg, #ffe4b8 0%, ${FIN.bg} 65%, ${FIN.bg2} 100%)`,
        color: FIN.ink,
        fontFamily: FIN.sans,
      }}
    >
      {/* Sun */}
      <div
        style={{
          position: 'absolute',
          left: `calc(58% + ${shift(-12)}px)`,
          top: '24%',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${FIN.ochre} 0%, ${FIN.ochre}cc 30%, transparent 70%)`,
          mixBlendMode: 'multiply',
          filter: 'blur(2px)',
          transition: 'left 0.4s cubic-bezier(.2,.7,.3,1)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `calc(58% + ${shift(-12)}px + 110px)`,
          top: 'calc(24% + 110px)',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: FIN.ochre,
          boxShadow: `0 0 60px 20px ${FIN.ochre}aa`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.4s cubic-bezier(.2,.7,.3,1)',
          zIndex: 1,
        }}
      />

      {/* Drifting clouds */}
      <svg
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '18%',
          left: 0,
          right: 0,
          width: '100%',
          height: 80,
          opacity: 0.55,
          mixBlendMode: 'multiply',
          transform: `translateX(${shift(8)}px)`,
          transition: 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
          zIndex: 2,
        }}
      >
        <ellipse cx="200" cy="100" rx="120" ry="22" fill={FIN.stone} opacity="0.35" />
        <ellipse cx="600" cy="110" rx="180" ry="28" fill={FIN.stone} opacity="0.3" />
        <ellipse cx="1100" cy="95" rx="160" ry="24" fill={FIN.stone} opacity="0.4" />
        <ellipse cx="1450" cy="120" rx="120" ry="20" fill={FIN.stone} opacity="0.35" />
      </svg>

      {/* Mountain layers (back to front) */}
      {/* Layer 1 — far */}
      <svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: -30,
          right: -30,
          width: 'calc(100% + 60px)',
          height: '60%',
          transform: `translateX(${shift(10)}px)`,
          transition: 'transform 0.45s cubic-bezier(.2,.7,.3,1)',
          zIndex: 3,
        }}
      >
        <path d="M0 480 L 180 280 L 380 380 L 560 220 L 760 360 L 940 240 L 1140 360 L 1320 240 L 1500 360 L 1600 320 L 1600 600 L 0 600 Z" fill="#d4d3c8" opacity="0.8" />
      </svg>
      {/* Layer 2 — mid */}
      <svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: -50,
          right: -50,
          width: 'calc(100% + 100px)',
          height: '55%',
          transform: `translateX(${shift(20)}px)`,
          transition: 'transform 0.45s cubic-bezier(.2,.7,.3,1)',
          zIndex: 4,
        }}
      >
        <path d="M0 520 L 220 320 L 480 460 L 720 280 L 980 420 L 1240 300 L 1480 460 L 1600 380 L 1600 600 L 0 600 Z" fill="#9aa39a" opacity="0.85" />
      </svg>
      {/* Layer 3 — front */}
      <svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: -80,
          right: -80,
          width: 'calc(100% + 160px)',
          height: '50%',
          transform: `translateX(${shift(36)}px)`,
          transition: 'transform 0.45s cubic-bezier(.2,.7,.3,1)',
          zIndex: 5,
        }}
      >
        <path d="M0 580 L 160 380 L 360 540 L 580 320 L 800 500 L 1020 360 L 1240 540 L 1440 380 L 1600 540 L 1600 600 L 0 600 Z" fill={FIN.teal} opacity="0.95" />
      </svg>

      {/* Birds */}
      <svg style={{ position: 'absolute', top: '32%', left: '14%', zIndex: 6, opacity: 0.55 }} width="60" height="20" viewBox="0 0 60 20">
        <path d="M2 12 Q 10 4 18 12 Q 26 4 34 12" fill="none" stroke={FIN.ink} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 14 Q 44 8 50 14 Q 54 10 58 14" fill="none" stroke={FIN.ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 44px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24, padding: '8px 14px', background: 'rgba(255,251,243,0.7)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: 999, border: `1px solid ${FIN.rule}`, width: 'fit-content' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v3Pulse 1.4s ease-in-out infinite' }} />
          <span style={{ fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Move your cursor →</span>
        </div>

        <h1
          style={{
            fontFamily: FIN.sans,
            fontSize: 'clamp(56px, 8vw, 124px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            margin: 0,
            maxWidth: 1100,
            textShadow: '0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          The world is{' '}
          <span style={{ background: FIN.ochre, color: FIN.ink, padding: '0 12px', fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 500 }}>wider</span>
          <br />
          than your inbox.
        </h1>

        <p style={{ marginTop: 32, fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, color: FIN.ink, maxWidth: 560 }}>
          Six small-group expeditions a year for founders who want a week somewhere that resets the year.
        </p>

        <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
          <a href="#apply" style={{ background: FIN.teal, color: '#fafaf7', padding: '16px 28px', borderRadius: 999, fontSize: 14, fontWeight: 600 }}>
            Request an invitation →
          </a>
          <a href="#trips" style={{ background: FIN.paper, color: FIN.ink, padding: '16px 28px', fontSize: 14, fontWeight: 500, border: `1px solid ${FIN.ink}`, borderRadius: 999 }}>
            See the trips
          </a>
        </div>
      </div>

      <style>{`
        @keyframes v3Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
