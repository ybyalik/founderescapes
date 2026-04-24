'use client';

import { FIN } from '@/app/home2/_components/fin';

const MARQUEE = ['GO SOMEWHERE', 'YOU HAVEN’T', 'BEEN', 'GO SOMEWHERE', 'WILD', 'WITH', 'TEN', 'OTHER FOUNDERS'];

const TILES = [
  {
    label: 'PATAGONIA · 8 DAYS',
    title: 'Torres del Paine',
    img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=70',
    poster: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=70',
    video: 'https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4',
  },
  {
    label: 'HOKKAIDO · 10 DAYS',
    title: 'Niseko Powder',
    img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=900&q=70',
    poster: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=900&q=70',
    video: 'https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4',
  },
  {
    label: 'NAMIBIA · 9 DAYS',
    title: 'Skeleton Coast',
    img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=70',
    poster: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=70',
    video: 'https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4',
  },
];

export default function V5MarqueeTiles() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto', background: FIN.bg, color: FIN.ink, fontFamily: FIN.sans, paddingTop: 80, paddingBottom: 60 }}>
      {/* Top eyebrow */}
      <div style={{ padding: '0 44px', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', background: 'transparent', border: `1px solid ${FIN.rule}`, borderRadius: 999, fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: FIN.stone, fontWeight: 600 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre, animation: 'v5Pulse 1.4s ease-in-out infinite' }} />
          2026 / 27 cohorts open
        </div>
      </div>

      {/* Massive scrolling headline */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', padding: '40px 0' }}>
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            width: 'max-content',
            animation: 'v5March 38s linear infinite',
          }}
        >
          {[...Array(2)].map((_, dup) => (
            <span key={dup} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {MARQUEE.map((w, i) => {
                const isAccent = w === 'WILD' || w === 'YOU HAVEN’T';
                return (
                  <span key={`${dup}-${i}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <span
                      style={{
                        fontFamily: isAccent ? FIN.serif : FIN.sans,
                        fontStyle: isAccent ? 'italic' : 'normal',
                        fontWeight: isAccent ? 500 : 700,
                        fontSize: 'clamp(80px, 13vw, 180px)',
                        letterSpacing: '-0.05em',
                        lineHeight: 0.88,
                        color: FIN.ink,
                        margin: '0 28px',
                      }}
                    >
                      {w}
                    </span>
                    {(i + 1) % 2 === 0 && (
                      <span
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          background: FIN.ochre,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 18px',
                        }}
                      >
                        <svg width="28" height="28" viewBox="0 0 56 56" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round">
                          <path d="M18 38L38 18M22 18h16v16" />
                        </svg>
                      </span>
                    )}
                  </span>
                );
              })}
            </span>
          ))}
        </div>

        {/* Sub line */}
        <div style={{ padding: '32px 44px 0', maxWidth: 1400, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end' }}>
          <p style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, margin: 0, maxWidth: 540, color: FIN.stone }}>
            Six small-group expeditions a year. Every detail taken care of. The people you meet are the reason you&apos;ll come back.
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
      </div>

      {/* Three video tiles */}
      <div style={{ padding: '0 44px', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {TILES.map((t) => (
            <div
              key={t.title}
              style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 16, overflow: 'hidden', border: `1px solid ${FIN.rule}` }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={t.poster}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={t.video} type="video/mp4" />
              </video>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, color: '#fafaf7' }}>
                <div style={{ fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.2em' }}>{t.label}</div>
                <div style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 26, fontWeight: 500, marginTop: 6 }}>{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes v5March { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes v5Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
