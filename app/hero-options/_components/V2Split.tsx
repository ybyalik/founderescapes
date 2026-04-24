'use client';

import { FIN } from '@/app/home2/_components/fin';

const CHIPS = ['Trekking', 'Ski', 'Sail', 'Desert', 'Surf', 'Rivers'];

export default function V2Split() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'grid', gridTemplateColumns: '1.15fr 1fr', background: FIN.bg, color: FIN.ink, fontFamily: FIN.sans }}>
      {/* Left: video panel */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 'min(720px, 100vh)' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=70"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4" type="video/mp4" />
        </video>

        {/* Bottom-left caption */}
        <div style={{ position: 'absolute', left: 32, bottom: 32, color: '#fafaf7', zIndex: 5 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 999,
              fontFamily: FIN.mono,
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: FIN.ochre, animation: 'v2Pulse 1.4s ease-in-out infinite' }} />
            Cohort 12 · Patagonia
          </div>
          <div style={{ marginTop: 14, fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 24, fontWeight: 400, textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}>
            03:40 — Twelve founders. One valley.
          </div>
        </div>

        {/* Play button */}
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 92,
            height: 92,
            borderRadius: '50%',
            background: FIN.ochre,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
            transition: 'transform 0.25s',
            zIndex: 5,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
        >
          <svg width="32" height="32" viewBox="0 0 30 30" fill="#0a0a0a">
            <path d="M9 6l16 9-16 9V6z" />
          </svg>
        </button>

        {/* Top-right counter */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            right: 28,
            color: '#fafaf7',
            fontFamily: FIN.mono,
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            zIndex: 5,
          }}
        >
          02:14 / 03:40
        </div>
      </div>

      {/* Right: content */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 56px', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v2Pulse 1.4s ease-in-out infinite' }} />
          <span style={{ fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: FIN.stone, fontWeight: 600 }}>
            2026 / 27 cohorts open
          </span>
        </div>

        <h1 style={{ fontFamily: FIN.sans, fontSize: 'clamp(48px, 5.6vw, 84px)', lineHeight: 0.98, fontWeight: 600, letterSpacing: '-0.035em', margin: 0 }}>
          Adventure trips,
          <br />
          engineered for people
          <br />
          who{' '}
          <span style={{ background: FIN.ochre, color: '#0a0a0a', padding: '0 12px', fontStyle: 'italic', fontFamily: FIN.serif, fontWeight: 500 }}>run things</span>.
        </h1>

        <p style={{ marginTop: 32, fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 20, lineHeight: 1.45, color: FIN.stone, maxWidth: 480 }}>
          Six small-group expeditions a year. Every detail taken care of. The people you meet are the reason you&apos;ll come back.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 32 }}>
          {CHIPS.map((c, i) => (
            <span
              key={c}
              style={{
                border: `1px solid ${FIN.ink}`,
                padding: '8px 16px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                background: i === 0 ? FIN.ink : 'transparent',
                color: i === 0 ? FIN.bg : FIN.ink,
                transition: 'all .2s',
              }}
            >
              {c}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 40, alignItems: 'center' }}>
          <a href="#apply" style={{ background: FIN.ink, color: FIN.bg, padding: '16px 28px', borderRadius: 999, fontSize: 14, fontWeight: 600 }}>
            Request an invitation →
          </a>
          <a href="#trips" style={{ background: 'transparent', color: FIN.ink, padding: '16px 28px', fontSize: 14, fontWeight: 500, border: `1px solid ${FIN.ink}`, borderRadius: 999 }}>
            See the trips
          </a>
        </div>

        {/* Bottom microstats */}
        <div style={{ position: 'absolute', bottom: 40, left: 56, right: 56, display: 'flex', gap: 28, fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: FIN.stone }}>
          <div>
            <span style={{ display: 'block', fontFamily: FIN.sans, fontSize: 28, fontWeight: 700, color: FIN.ink, letterSpacing: '-0.02em', textTransform: 'none' }}>412</span>
            Founders
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: FIN.sans, fontSize: 28, fontWeight: 700, color: FIN.ink, letterSpacing: '-0.02em', textTransform: 'none' }}>28</span>
            Trips
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: FIN.sans, fontSize: 28, fontWeight: 700, color: FIN.ink, letterSpacing: '-0.02em', textTransform: 'none' }}>6</span>
            Continents
          </div>
        </div>
      </div>

      <style>{`
        @keyframes v2Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
