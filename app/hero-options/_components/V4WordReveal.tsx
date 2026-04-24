'use client';

import { useEffect, useState } from 'react';
import { FIN } from '@/app/home2/_components/fin';

const LINE = ['Trade', 'your', 'desk', 'for', 'a', 'ridgeline.'];
const SUB = ['Eight days. Ten founders. Zero meetings.'];

export default function V4WordReveal() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setShown((s) => (s < LINE.length + 1 ? s + 1 : s));
    }, 220);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#050a0e', color: '#fafaf7', fontFamily: FIN.sans }}>
      {/* Background video — heavily darkened */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1920&q=60"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.55 }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4" type="video/mp4" />
      </video>

      {/* Heavy dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,10,14,0.55) 0%, rgba(5,10,14,0.85) 100%)', zIndex: 2 }} />

      {/* Subtle grain */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 3 }}>
        <filter id="v4-grain"><feTurbulence baseFrequency="1.2" numOctaves={2} stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#v4-grain)" />
      </svg>

      {/* Center content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 44px', zIndex: 10 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 999,
            fontFamily: FIN.mono,
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            opacity: shown >= 1 ? 1 : 0,
            transform: shown >= 1 ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            marginBottom: 36,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v4Pulse 1.4s ease-in-out infinite' }} />
          Founder Escapes · Cohort 14
        </div>

        {/* Word-by-word headline */}
        <h1
          style={{
            fontFamily: FIN.sans,
            fontSize: 'clamp(64px, 10vw, 168px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            margin: 0,
            maxWidth: 1400,
          }}
        >
          {LINE.map((word, i) => {
            const isAccent = word === 'ridgeline.';
            return (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  marginRight: '0.28em',
                  opacity: shown > i ? 1 : 0,
                  transform: shown > i ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.7s cubic-bezier(.2,.7,.3,1) ${i * 0.05}s, transform 0.7s cubic-bezier(.2,.7,.3,1) ${i * 0.05}s`,
                  ...(isAccent
                    ? {
                        fontFamily: FIN.serif,
                        fontStyle: 'italic',
                        fontWeight: 400,
                        color: FIN.ochre,
                      }
                    : {}),
                }}
              >
                {word}
              </span>
            );
          })}
        </h1>

        {/* Subhead */}
        <p
          style={{
            marginTop: 36,
            fontFamily: FIN.serif,
            fontStyle: 'italic',
            fontSize: 22,
            lineHeight: 1.4,
            color: 'rgba(250,250,247,0.85)',
            maxWidth: 540,
            opacity: shown > LINE.length ? 1 : 0,
            transform: shown > LINE.length ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }}
        >
          {SUB[0]}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 36,
            opacity: shown > LINE.length ? 1 : 0,
            transform: shown > LINE.length ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s',
          }}
        >
          <a href="#apply" style={{ background: FIN.ochre, color: '#0a0a0a', padding: '16px 28px', borderRadius: 999, fontSize: 15, fontWeight: 600 }}>
            Request an invitation
          </a>
          <a href="#trips" style={{ color: '#fafaf7', padding: '16px 28px', fontSize: 15, fontWeight: 500, border: '1px solid rgba(255,255,255,0.4)', borderRadius: 999 }}>
            See the trips
          </a>
        </div>
      </div>

      {/* Bottom ticker */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: 44,
          right: 44,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: FIN.mono,
          fontSize: 10,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(250,250,247,0.6)',
        }}
      >
        <span>Patagonia · Hokkaido · Bhutan · Namibia · Faroe</span>
        <span>412 founders · 6 continents · since 2024</span>
      </div>

      <style>{`
        @keyframes v4Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
