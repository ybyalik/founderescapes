'use client';

import { FIN } from '@/app/home2/_components/fin';

// ── Variant 02 · LIQUID DISTORTION ─────────────────────────────────────────
// Mountain video pushed through a wavy SVG turbulence + displacement filter.
// Animated turbulence seed makes it look like the world is breathing.
// Big italic Cormorant headline floats above with a backdrop blur.
export default function V2Split() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#06121a', color: '#fafaf7', fontFamily: FIN.sans }}>
      {/* SVG filter definition (zero-sized) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="v2-liquid" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.011 0.018" numOctaves={2} seed={3} result="noise">
              <animate attributeName="seed" values="3;9;3" dur="22s" repeatCount="indefinite" />
              <animate attributeName="baseFrequency" values="0.011 0.018; 0.014 0.022; 0.011 0.018" dur="28s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={70} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Distorted video layer */}
      <div style={{ position: 'absolute', inset: '-8%', filter: 'url(#v2-liquid)', zIndex: 1 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1920&q=70"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Color wash + vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 55%, transparent 30%, rgba(6,18,26,0.65) 100%)', zIndex: 2 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,18,26,0.55) 0%, transparent 30%, rgba(6,18,26,0.85) 100%)', zIndex: 2 }} />

      {/* Top-left eyebrow */}
      <div style={{ position: 'absolute', top: 28, left: 28, zIndex: 10, display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v2Pulse 1.4s ease-in-out infinite' }} />
        Live · cohort 14
      </div>

      {/* Centered headline */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 44px', zIndex: 10 }}>
        <h1
          style={{
            fontFamily: FIN.sans,
            fontSize: 'clamp(64px, 9.5vw, 156px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            margin: 0,
            maxWidth: 1300,
            textShadow: '0 4px 40px rgba(0,0,0,0.55)',
          }}
        >
          The world is{' '}
          <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre }}>still moving</span>
          <br />
          without you.
        </h1>
        <p style={{ marginTop: 36, fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, maxWidth: 580, color: 'rgba(250,250,247,0.85)' }}>
          Eight days. Ten founders. One ridgeline. The other 357 days are louder than you think.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          <a href="#apply" style={{ background: FIN.ochre, color: '#0a0a0a', padding: '18px 30px', borderRadius: 999, fontSize: 15, fontWeight: 600 }}>
            Request an invitation
          </a>
          <a href="#trips" style={{ color: '#fafaf7', padding: '18px 26px', fontSize: 15, fontWeight: 500, border: '1px solid rgba(255,255,255,0.4)', borderRadius: 999 }}>
            See the trips
          </a>
        </div>
      </div>

      {/* Bottom microreadout */}
      <div style={{ position: 'absolute', bottom: 28, left: 44, right: 44, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(250,250,247,0.55)' }}>
        <span>S 50°56′ · W 73°24′ · Patagonia · 06:42 LOCAL</span>
        <span>SEED → SERIES C · 412 ALUMNI · SINCE 2024</span>
      </div>

      <style>{`
        @keyframes v2Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
