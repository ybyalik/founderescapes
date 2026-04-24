'use client';

import { useEffect, useState } from 'react';
import { FIN } from './fin';
import Photo, { Tone } from './Photo';

type Spread = {
  tone: Tone;
  portraitTone: Tone;
  n: string;
  r: string;
  t: string;
  q: string;
  stamp: string;
};

const SPREADS: Spread[] = [
  { tone: 'peak', portraitTone: 'grove', n: 'Sofia Navarro', r: 'Founder, Bloomtown', t: 'Exp. 071', q: 'Fired myself as CTO on day four. Best call I ever made.', stamp: 'DOLOMITES · 2025' },
  { tone: 'dune', portraitTone: 'wave', n: 'Marcus Okonkwo', r: 'CEO, Relayboard', t: 'Exp. 064', q: 'Closed a round on the flight home. Different human.', stamp: 'NAMIBIA · 2025' },
  { tone: 'wave', portraitTone: 'sun', n: 'Jonas Bauman', r: 'Founder, Northstack', t: 'Exp. 068', q: "We don't do offsites anymore. We do Founder Escapes.", stamp: 'HOKKAIDO · 2024' },
  { tone: 'grove', portraitTone: 'clay', n: 'Alex Chen', r: 'Founder, Signalpath', t: 'Exp. 062', q: 'Cried on a glacier. Wrote the pivot deck at basecamp.', stamp: 'PATAGONIA · 2024' },
];

const QUOTES: Array<{ tone: Tone; q: string; n: string }> = [
  { tone: 'peak', q: 'Cried on a glacier. Wrote the pivot deck at basecamp.', n: 'Alex Chen' },
  { tone: 'wave', q: "We don't do offsites anymore. We do Founder Escapes.", n: 'Jonas Bauman' },
  { tone: 'dune', q: 'Closed a round on the flight home. Different human.', n: 'Marcus Okonkwo' },
  { tone: 'grove', q: 'Fired myself as CTO on day four. Best call I ever made.', n: 'Sofia Navarro' },
  { tone: 'palm', q: 'Two co-founders. One tent. Zero laptops. Worth it.', n: 'Priya Shah' },
  { tone: 'clay', q: 'My therapist calls it the Andes Reset.', n: 'Diego Mora' },
  { tone: 'sun', q: 'Raised in my head before we raised on paper.', n: 'Hana Koike' },
  { tone: 'peak', q: 'Rewrote the company memo on a train through Kyushu.', n: 'Liam Byrne' },
];

export default function PostcardsHome() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % SPREADS.length), 8000);
    return () => clearInterval(id);
  }, []);

  const cur = SPREADS[idx];
  const marqueeRow = [...QUOTES, ...QUOTES];

  return (
    <section style={{ padding: '140px 44px 0', background: FIN.bg, position: 'relative', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div style={{ fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: FIN.stone, marginBottom: 18 }}>
          ✴ Postcards home
        </div>
        <h2 style={{ fontFamily: FIN.sans, fontSize: 88, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.95, margin: 0, color: FIN.ink }}>
          What <span style={{ fontVariantNumeric: 'tabular-nums' }}>412</span> operators{' '}
          <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400 }}>brought home</span>.
        </h2>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: 40, alignItems: 'center', minHeight: 480, position: 'relative' }}>
        <div
          key={`l-${idx}`}
          style={{
            justifySelf: 'end',
            width: 340,
            height: 440,
            background: FIN.paper,
            padding: 12,
            paddingBottom: 40,
            boxShadow: '0 24px 48px rgba(20,19,16,0.18), 0 6px 14px rgba(20,19,16,0.08)',
            transform: 'rotate(-3deg)',
            borderRadius: 4,
            animation: 'pc-fade 900ms ease',
            position: 'relative',
          }}
        >
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <Photo tone={cur.tone} h="100%" />
          </div>
          <div style={{ position: 'absolute', bottom: 10, left: 12, right: 12, fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.18em', color: FIN.stone, textAlign: 'center', paddingTop: 6 }}>
            {cur.stamp}
          </div>
        </div>

        <div key={`c-${idx}`} style={{ textAlign: 'center', padding: '0 20px', animation: 'pc-fade 900ms ease' }}>
          <div style={{ fontFamily: FIN.serif, fontSize: 72, lineHeight: 0.5, color: FIN.ochre, marginBottom: 14, fontWeight: 500 }}>&quot;</div>
          <div style={{ fontFamily: FIN.sans, fontSize: 30, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2, color: FIN.ink, maxWidth: 360, margin: '0 auto' }}>
            {cur.q}
          </div>
          <div
            style={{
              marginTop: 28,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: FIN.paper,
              borderRadius: 999,
              padding: '8px 18px 8px 8px',
              boxShadow: '0 4px 14px rgba(20,19,16,0.06)',
            }}
          >
            <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Photo tone={cur.portraitTone} h="100%" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: FIN.sans, fontSize: 13, fontWeight: 600, color: FIN.ink, lineHeight: 1.2 }}>{cur.n}</div>
              <div style={{ fontFamily: FIN.mono, fontSize: 10, color: FIN.stone, letterSpacing: '0.06em', marginTop: 2 }}>
                {cur.r} · {cur.t}
              </div>
            </div>
          </div>
        </div>

        <div
          key={`r-${idx}`}
          style={{
            justifySelf: 'start',
            width: 300,
            height: 440,
            background: FIN.paper,
            padding: 12,
            boxShadow: '0 24px 48px rgba(20,19,16,0.18), 0 6px 14px rgba(20,19,16,0.08)',
            transform: 'rotate(2.5deg)',
            borderRadius: 4,
            animation: 'pc-fade 900ms ease',
          }}
        >
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Photo tone={cur.portraitTone} h="100%" />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 44 }}>
        {SPREADS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === idx ? 22 : 8,
              height: 8,
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === idx ? FIN.ink : 'rgba(20,19,16,0.2)',
              transition: 'width 300ms ease, background 300ms ease',
            }}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: 80,
          padding: '22px 0',
          borderTop: `1px solid ${FIN.rule}`,
          borderBottom: `1px solid ${FIN.rule}`,
          background: FIN.paper,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', gap: 20, whiteSpace: 'nowrap', animation: 'pc-marq 38s linear infinite', width: 'max-content' }}>
          {marqueeRow.map((m, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 18px 10px 10px',
                background: FIN.bg,
                borderRadius: 999,
                border: `1px solid ${FIN.rule}`,
                flexShrink: 0,
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <Photo tone={m.tone} h="100%" />
              </div>
              <span style={{ fontFamily: FIN.sans, fontSize: 13, color: FIN.ink, fontWeight: 500 }}>&quot;{m.q}&quot;</span>
              <span style={{ fontFamily: FIN.mono, fontSize: 11, color: FIN.stone, letterSpacing: '0.04em' }}>— {m.n}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pc-fade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; }
        }
        @keyframes pc-marq {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
