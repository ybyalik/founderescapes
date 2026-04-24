'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { ACCENT, BG, BORDER, CARD_BG, FG, MUTED } from './theme';

const QUOTES = [
  { q: "Closed a round on the flight home. Different human.", n: 'Marcus Okonkwo', r: 'CEO, Ridgeline · Exp. 041', portrait: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', scene: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=700&q=80', loc: 'PATAGONIA · 2024' },
  { q: "Fired myself as CTO on day four. Best call I ever made.", n: 'Sofia Navarro', r: 'Founder, Glasshouse · Exp. 038', portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80', scene: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80', loc: 'DOLOMITES · 2023' },
  { q: "I cried on a glacier. Wrote the pivot deck at basecamp.", n: 'Alex Chen', r: 'CEO, Compass · Exp. 044', portrait: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80', scene: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=700&q=80', loc: 'HOKKAIDO · 2025' },
  { q: "We don't do offsites anymore. We do Founder Escapes.", n: 'Jonas Bauman', r: 'COO, Northstar · Exp. 039', portrait: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', scene: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=700&q=80', loc: 'OMAN · 2024' },
];

export default function VisualTestimonial() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((x) => (x + 1) % QUOTES.length), 5200);
    return () => clearInterval(id);
  }, [paused]);

  const q = QUOTES[i];

  return (
    <section style={{ padding: '120px 40px', borderTop: `1px solid ${BORDER}`, background: '#f5f2e8', overflow: 'hidden' }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ POSTCARDS HOME</div>
          <h2 style={{ fontSize: 68, fontWeight: 700, margin: '16px auto 0', letterSpacing: '-0.035em', lineHeight: 1, maxWidth: 860 }}>
            What 312 operators<br />
            <span style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 500 }}>brought home</span>.
          </h2>
        </div>
      </Reveal>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', minHeight: 540 }}
      >
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: 32, alignItems: 'center', animation: 'obTestFade .6s cubic-bezier(.2,.7,.3,1)' }}>
          <div className="ob-test-photo" style={{
            width: '100%', aspectRatio: '3/4', borderRadius: 14, overflow: 'hidden',
            backgroundImage: `url(${q.scene})`, backgroundSize: 'cover', backgroundPosition: 'center',
            transform: 'rotate(-3deg)', boxShadow: '0 30px 60px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1)',
            border: '6px solid #fafaf7',
          }}>
            <div style={{
              background: '#fafaf7', color: '#0a0a0a', position: 'relative', top: 'calc(100% - 32px)',
              padding: '8px 14px', fontSize: 11, fontFamily: 'var(--font-mono), monospace', letterSpacing: '0.12em',
              width: 'fit-content', margin: '0 auto',
            }}>{q.loc}</div>
          </div>

          <div style={{ padding: '0 16px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 140, fontWeight: 500, lineHeight: 0.6, color: ACCENT, marginBottom: 12 }}>"</div>
            <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.15, color: FG, textWrap: 'balance' as const }}>{q.q}</div>
            <div style={{
              marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '10px 18px 10px 10px', borderRadius: 100,
              background: CARD_BG, border: `1px solid ${BORDER}`,
            }}>
              <div style={{ width: 42, height: 42, borderRadius: '50%', backgroundImage: `url(${q.portrait})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{q.n}</div>
                <div style={{ fontSize: 11, color: MUTED, fontFamily: 'var(--font-mono), monospace', letterSpacing: '0.08em', marginTop: 2 }}>{q.r}</div>
              </div>
            </div>
          </div>

          <div className="ob-test-photo" style={{
            width: '100%', aspectRatio: '3/4', borderRadius: 14, overflow: 'hidden',
            backgroundImage: `url(${q.portrait})`, backgroundSize: 'cover', backgroundPosition: 'center',
            transform: 'rotate(3deg)', boxShadow: '0 30px 60px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1)',
            border: '6px solid #fafaf7',
          }} />
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 48 }}>
          {QUOTES.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} style={{
              width: idx === i ? 36 : 10, height: 10, borderRadius: 5,
              background: idx === i ? FG : 'rgba(0,0,0,0.15)',
              border: 'none', padding: 0, cursor: 'pointer', transition: 'all .3s',
            }} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 80, overflow: 'hidden', padding: '20px 0', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="kin-march" style={{ display: 'flex', gap: 16, whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(2)].flatMap((_, j) => QUOTES.concat(QUOTES).map((qq, k) => (
            <div key={`${j}-${k}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '14px 22px 14px 14px', borderRadius: 100,
              background: CARD_BG, border: `1px solid ${BORDER}`,
            }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundImage: `url(${qq.portrait})`, backgroundSize: 'cover', flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 500, color: FG }}>
                "{qq.q}" — <span style={{ color: MUTED }}>{qq.n}</span>
              </span>
            </div>
          )))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <Link href="/alumni" style={{
          display: 'inline-block', background: FG, color: BG,
          padding: '14px 28px', borderRadius: 100, fontSize: 14, fontWeight: 600,
        }}>Meet all 312 alumni →</Link>
      </div>
    </section>
  );
}
