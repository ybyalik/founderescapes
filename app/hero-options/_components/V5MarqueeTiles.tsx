'use client';

import { useEffect, useState } from 'react';
import { FIN } from '@/app/home2/_components/fin';

// ── Variant 05 · CINEMATIC CROP REVEAL ─────────────────────────────────────
// On mount: video fills the viewport. After ~1.6s, the video animates down
// to a wide cinemascope strip and the content emerges around it.
// Big "splash entry" feel. Works once per page load.
export default function V5MarqueeTiles() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCollapsed(true), 1700);
    return () => clearTimeout(t);
  }, []);

  // Geometry
  const stripHeight = 'min(56vh, 540px)';
  const stripInsetX = collapsed ? 'min(8vw, 80px)' : '0px';
  const stripTop = collapsed ? 'min(22vh, 200px)' : '0px';
  const stripBottom = collapsed ? `calc(100vh - min(22vh, 200px) - ${stripHeight})` : '0px';

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: FIN.bg, color: FIN.ink, fontFamily: FIN.sans }}>
      {/* Top eyebrow — fades in */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          left: 28,
          zIndex: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 14px',
          background: collapsed ? FIN.paper : 'rgba(255,255,255,0.08)',
          border: collapsed ? `1px solid ${FIN.rule}` : '1px solid rgba(255,255,255,0.18)',
          borderRadius: 999,
          fontFamily: FIN.mono,
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: collapsed ? FIN.ink : '#fafaf7',
          opacity: 1,
          transition: 'all 0.6s ease 0.4s',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v5Pulse 1.4s ease-in-out infinite' }} />
        Cohort 14 · 6 seats remain
      </div>

      {/* Top headline — emerges above the strip */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '0 44px',
          height: 'min(22vh, 200px)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          opacity: collapsed ? 1 : 0,
          transform: collapsed ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'opacity 0.7s ease 0.6s, transform 0.7s cubic-bezier(.2,.7,.3,1) 0.6s',
          zIndex: 11,
          paddingBottom: 24,
        }}
      >
        <h1
          style={{
            fontFamily: FIN.sans,
            fontSize: 'clamp(48px, 7vw, 124px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            margin: 0,
            textAlign: 'center',
            maxWidth: 1300,
          }}
        >
          Next flight leaves{' '}
          <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ink, background: FIN.ochre, padding: '0 12px' }}>
            in fourteen days
          </span>
          .
        </h1>
      </div>

      {/* Cinemascope video strip */}
      <div
        style={{
          position: 'absolute',
          top: stripTop,
          left: stripInsetX,
          right: stripInsetX,
          bottom: stripBottom,
          overflow: 'hidden',
          borderRadius: collapsed ? 16 : 0,
          boxShadow: collapsed ? '0 30px 60px rgba(20,19,16,0.25), 0 8px 16px rgba(20,19,16,0.12)' : 'none',
          transition: 'top 1.1s cubic-bezier(.86,0,.07,1) 0.1s, bottom 1.1s cubic-bezier(.86,0,.07,1) 0.1s, left 1.1s cubic-bezier(.86,0,.07,1) 0.1s, right 1.1s cubic-bezier(.86,0,.07,1) 0.1s, border-radius 0.8s ease 0.4s, box-shadow 0.8s ease 0.4s',
          zIndex: 5,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1920&q=70"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, animation: 'v5KenBurns 26s ease-in-out infinite alternate' }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4" type="video/mp4" />
        </video>

        {/* Pre-collapse fullscreen darken; fades out */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 50%, rgba(0,0,0,0.5) 100%)',
            opacity: collapsed ? 0.25 : 0.7,
            transition: 'opacity 0.8s ease 0.4s',
            zIndex: 2,
          }}
        />

        {/* Pre-collapse "Founder Escapes" stamp — fades out */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fafaf7',
            opacity: collapsed ? 0 : 1,
            transition: 'opacity 0.5s ease',
            zIndex: 3,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FIN.mono, fontSize: 13, letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 16 }}>✴ Founder Escapes ✴</div>
            <div style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 400 }}>Adventure travel for founders</div>
          </div>
        </div>

        {/* In-strip caption (post-collapse) */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 28,
            right: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            color: '#fafaf7',
            opacity: collapsed ? 1 : 0,
            transition: 'opacity 0.6s ease 0.9s',
            zIndex: 4,
            fontFamily: FIN.mono,
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          <span>NOW PLAYING · TORRES DEL PAINE · 03:40</span>
          <span>S 50°56′ · W 73°24′</span>
        </div>
      </div>

      {/* Bottom block — subhead + CTAs, emerges below */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0 44px 60px',
          opacity: collapsed ? 1 : 0,
          transform: collapsed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease 0.8s, transform 0.7s cubic-bezier(.2,.7,.3,1) 0.8s',
          zIndex: 11,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 40,
          flexWrap: 'wrap',
          maxWidth: 1400,
          margin: '0 auto',
        }}
      >
        <p style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, margin: 0, maxWidth: 540, color: FIN.stone }}>
          Six small-group expeditions a year. Every detail handled. The cohort is the reason you&apos;ll come back.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#apply" style={{ background: FIN.ink, color: FIN.bg, padding: '16px 28px', borderRadius: 999, fontSize: 14, fontWeight: 600 }}>
            Request an invitation →
          </a>
          <a href="#trips" style={{ background: 'transparent', color: FIN.ink, padding: '16px 28px', fontSize: 14, fontWeight: 500, border: `1px solid ${FIN.ink}`, borderRadius: 999 }}>
            See the trips
          </a>
        </div>
      </div>

      <style>{`
        @keyframes v5KenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        @keyframes v5Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
