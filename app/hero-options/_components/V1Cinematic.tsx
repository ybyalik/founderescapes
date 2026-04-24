'use client';

import { useEffect, useState } from 'react';
import { FIN } from '@/app/home2/_components/fin';

const CYC = ['Patagonia.', 'Hokkaido.', 'Bhutan.', 'Namibia.', 'Faroe.'];

export default function V1Cinematic() {
  const [cycIdx, setCycIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCycIdx((i) => (i + 1) % CYC.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#0b1a24', color: '#fafaf7', fontFamily: FIN.sans }}>
      {/* Video bg */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=60"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, animation: 'v1Zoom 24s ease-in-out infinite alternate' }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4" type="video/mp4" />
      </video>

      {/* Film grain */}
      <svg style={{ position: 'absolute', inset: '-10%', width: '120%', height: '120%', opacity: 0.13, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2 }}>
        <filter id="v1-grain"><feTurbulence baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#v1-grain)" />
      </svg>

      {/* Cinematic vignette + bottom darken */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 55%, transparent 30%, rgba(0,0,0,0.55) 100%)', pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,26,36,0.45) 0%, transparent 28%, rgba(11,26,36,0.78) 100%)', pointerEvents: 'none', zIndex: 3 }} />

      {/* Top right: live counter */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          right: 28,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 14px',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: 999,
          fontFamily: FIN.mono,
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v1Pulse 1.4s ease-in-out infinite' }} />
        Cohort 14 · 6 seats
      </div>

      {/* Centered text */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 44px 100px', zIndex: 10 }}>
        <h1
          style={{
            fontFamily: FIN.sans,
            fontSize: 'clamp(56px, 9vw, 148px)',
            fontWeight: 600,
            letterSpacing: '-0.035em',
            lineHeight: 0.92,
            margin: 0,
            maxWidth: 1200,
            textShadow: '0 4px 40px rgba(0,0,0,0.45)',
          }}
        >
          Go somewhere{' '}
          <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre, background: 'rgba(10,10,10,0.0)' }}>wild</span>
          <br />
          with ten other founders,
          <br />
          in{' '}
          <span style={{ position: 'relative', display: 'inline-block', minWidth: 'min(520px, 50vw)' }}>
            <span
              key={cycIdx}
              style={{
                fontFamily: FIN.serif,
                fontStyle: 'italic',
                fontWeight: 400,
                color: FIN.ochre,
                display: 'inline-block',
                animation: 'v1Cyc 2.6s ease',
              }}
            >
              {CYC[cycIdx]}
            </span>
          </span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end', marginTop: 44, maxWidth: 1400 }}>
          <p style={{ fontFamily: FIN.serif, fontSize: 22, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.4, margin: 0, maxWidth: 540, color: 'rgba(253,251,245,0.9)' }}>
            Six small-group expeditions a year. Every detail taken care of. The people you meet are the reason you&apos;ll come back.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#apply" style={{ background: FIN.ochre, color: '#0a0a0a', padding: '18px 30px', borderRadius: 999, fontSize: 15, fontWeight: 600 }}>
              Request an invitation
            </a>
            <a href="#trips" style={{ color: '#fafaf7', padding: '18px 26px', fontSize: 15, fontWeight: 500, border: '1px solid rgba(253,251,245,0.4)', borderRadius: 999 }}>
              See the trips
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          right: 44,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          opacity: 0.7,
          fontFamily: FIN.mono,
          fontSize: 10,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
        }}
      >
        <div style={{ width: 1, height: 40, background: '#fafaf7', animation: 'v1Scroll 2.2s ease-in-out infinite' }} />
        Scroll
      </div>

      <style>{`
        @keyframes v1Zoom { 0% { transform: scale(1); } 100% { transform: scale(1.12); } }
        @keyframes v1Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
        @keyframes v1Cyc {
          0% { opacity: 0; transform: translateY(16px); }
          14% { opacity: 1; transform: translateY(0); }
          86% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-8px); }
        }
        @keyframes v1Scroll {
          0%, 100% { opacity: 0.2; transform: scaleY(0.4); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
