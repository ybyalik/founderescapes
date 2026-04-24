'use client';

import { useEffect, useRef, useState } from 'react';
import { FIN } from '@/app/home2/_components/fin';

// ── Variant 01 · TEXT-CLIPPED VIDEO ─────────────────────────────────────────
// Mountain video plays inside the negative-space of the giant headline.
// Cream sheet sits over the video with the words punched out via SVG mask.
export default function V1Cinematic() {
  const [w, setW] = useState(1600);
  const [h, setH] = useState(900);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setW(r.width);
      setH(r.height);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // size the type to fill the width
  const fontSize = Math.min(w / 5.5, h / 2.6);

  return (
    <section ref={ref} style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: FIN.bg, color: FIN.ink, fontFamily: FIN.sans }}>
      {/* Background video — slow ken-burns */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1920&q=70"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, animation: 'v1KenBurns 30s ease-in-out infinite alternate' }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4" type="video/mp4" />
      </video>

      {/* Cream sheet with the words punched out — video shows through */}
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}
      >
        <defs>
          <mask id="v1-knockout">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y={h / 2 - fontSize * 0.55}
              textAnchor="middle"
              fontFamily={FIN.sans}
              fontSize={fontSize}
              fontWeight={900}
              letterSpacing="-0.06em"
              dominantBaseline="middle"
              fill="black"
            >
              GO
            </text>
            <text
              x="50%"
              y={h / 2 + fontSize * 0.55}
              textAnchor="middle"
              fontFamily={FIN.sans}
              fontSize={fontSize}
              fontWeight={900}
              letterSpacing="-0.06em"
              dominantBaseline="middle"
              fill="black"
            >
              WILDER
            </text>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill={FIN.bg} mask="url(#v1-knockout)" />
      </svg>

      {/* Top eyebrow */}
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
          background: FIN.paper,
          border: `1px solid ${FIN.rule}`,
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

      {/* Bottom-anchored caption + CTAs */}
      <div style={{ position: 'absolute', bottom: 44, left: 44, right: 44, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 540 }}>
          <div style={{ fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: FIN.stone, marginBottom: 10 }}>✴ Adventure travel for founders</div>
          <p style={{ fontFamily: FIN.serif, fontSize: 22, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.4, margin: 0, color: FIN.ink }}>
            Six small-group expeditions a year. Every detail handled. The cohort is the reason you&apos;ll come back.
          </p>
        </div>
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
        @keyframes v1KenBurns { 0% { transform: scale(1) translateX(0); } 100% { transform: scale(1.15) translateX(-3%); } }
        @keyframes v1Pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.4; } }
      `}</style>
    </section>
  );
}
