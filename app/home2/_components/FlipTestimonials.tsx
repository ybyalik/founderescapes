'use client';

import { useState } from 'react';
import { FIN } from './fin';
import Photo, { Tone } from './Photo';

type Card = {
  tone: Tone;
  trip: string;
  stamp: string;
  rot: number;
  q: string;
  n: string;
  r: string;
};

const CARDS: Card[] = [
  { tone: 'peak', trip: 'Patagonia · 2025', stamp: 'PAT·25', rot: -2.2, q: 'I have been to six founder retreats. Five were sales funnels. This was not one of them.', n: 'Theo Okafor', r: 'CEO, Kestrel' },
  { tone: 'clay', trip: 'High Atlas · 2025', stamp: 'ATL·25', rot: 1.4, q: 'On day four I told someone about a bug that had been in my head for months. We fixed it on a ridge at sunrise.', n: 'Paula Reyes', r: 'CTO, Driftwave' },
  { tone: 'wave', trip: 'Hokkaido · 2026', stamp: 'HOK·26', rot: -0.6, q: 'Came for the skiing. Left with two co-investors and the closest friend of the last decade.', n: 'Maya Castellanos', r: 'Founder, Lattice Bio' },
  { tone: 'dune', trip: 'Namibia · 2025', stamp: 'NAM·25', rot: 2.0, q: 'The stars were obscene. The conversations were better. Worth every minute away from my inbox.', n: 'Jonas Weidemann', r: 'CEO, Meridian Labs' },
  { tone: 'palm', trip: 'Bhutan · 2026', stamp: 'BTN·26', rot: -1.6, q: 'Zero service for six days. I returned sharper than a week of meetings could ever make me.', n: 'Aditi Rao', r: 'Founder, Heronwood' },
  { tone: 'grove', trip: 'Faroe · 2025', stamp: 'FAR·25', rot: 0.8, q: 'Eight strangers on Monday. Eight people I would call at 3am by Sunday.', n: 'Marcus Linde', r: 'CEO, Northbeam' },
];

export default function FlipTestimonials() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setFlipped((f) => ({ ...f, [i]: !f[i] }));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, rowGap: 72, maxWidth: 1280, margin: '0 auto' }}>
      {CARDS.map((c, i) => {
        const isFlipped = !!flipped[i];
        return (
          <div
            key={i}
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              cursor: 'pointer',
              perspective: 1400,
              transform: `rotate(${c.rot}deg) translateY(${isFlipped ? -6 : 0}px)`,
              transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onClick={() => toggle(i)}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 8,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 24px 48px rgba(20,19,16,0.22), 0 4px 10px rgba(20,19,16,0.08)',
                  overflow: 'hidden',
                  transform: 'rotateY(0deg)',
                }}
              >
                <Photo tone={c.tone} h="100%" />
                <div style={{ position: 'absolute', inset: 0, border: `10px solid ${FIN.paper}`, borderRadius: 8, pointerEvents: 'none' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    width: 56,
                    height: 64,
                    background: FIN.paper,
                    border: `2px dashed ${FIN.ink}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(6deg)',
                    fontFamily: FIN.mono,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: FIN.ink,
                    textAlign: 'center',
                    padding: 4,
                    lineHeight: 1.2,
                  }}
                >
                  {c.stamp}
                  <br />★
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 22,
                    left: 22,
                    fontFamily: FIN.serif,
                    fontStyle: 'italic',
                    fontSize: 22,
                    color: FIN.paper,
                    textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                  }}
                >
                  {c.trip}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 22,
                    right: 22,
                    fontFamily: FIN.mono,
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    color: FIN.paper,
                    textTransform: 'uppercase',
                    background: 'rgba(20,19,16,0.55)',
                    padding: '6px 10px',
                    borderRadius: 4,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  ↻ flip
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 8,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 24px 48px rgba(20,19,16,0.22), 0 4px 10px rgba(20,19,16,0.08)',
                  overflow: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: FIN.paper,
                  border: `10px solid ${FIN.paper}`,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 10,
                    background: `repeating-linear-gradient(transparent 0, transparent 28px, ${FIN.rule} 28px, ${FIN.rule} 29px)`,
                    opacity: 0.4,
                  }}
                />
                <div style={{ position: 'absolute', left: '50%', top: 24, bottom: 24, width: 1, background: FIN.rule }} />
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 54,
                    height: 64,
                    background: FIN.ochre,
                    border: `2px solid ${FIN.ink}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FIN.mono,
                    fontSize: 9,
                    fontWeight: 700,
                    color: FIN.ink,
                    lineHeight: 1.1,
                  }}
                >
                  <div style={{ fontSize: 16 }}>✴</div>
                  <div style={{ marginTop: 2 }}>F.E.</div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: 30,
                    right: 84,
                    width: 58,
                    height: 58,
                    borderRadius: '50%',
                    border: `1.5px solid ${FIN.ink}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FIN.mono,
                    fontSize: 8,
                    color: FIN.ink,
                    opacity: 0.5,
                    transform: 'rotate(-12deg)',
                    textAlign: 'center',
                    padding: 4,
                    lineHeight: 1.1,
                  }}
                >
                  {c.stamp}
                  <br />POSTED
                </div>
                <div style={{ position: 'absolute', top: 24, left: 22, right: '52%', bottom: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ color: FIN.ochre, fontSize: 14, letterSpacing: '0.18em', marginBottom: 8 }}>★★★★★</div>
                  <blockquote style={{ margin: 0, fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 15, lineHeight: 1.45, color: FIN.ink }}>
                    &quot;{c.q}&quot;
                  </blockquote>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: 110,
                    right: 22,
                    width: '42%',
                    fontFamily: FIN.mono,
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    color: FIN.stone,
                    lineHeight: 1.6,
                  }}
                >
                  <div style={{ textTransform: 'uppercase', fontWeight: 700, color: FIN.ink, marginBottom: 6 }}>To:</div>
                  Future Founder
                  <br />
                  c/o Inbox
                  <br />
                  Somewhere Busy
                  <br />
                  Earth — 00000
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 22,
                    right: 22,
                    paddingTop: 12,
                    borderTop: `1px solid ${FIN.rule}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                    <Photo tone={c.tone} h="100%" />
                  </div>
                  <div>
                    <div style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 16, color: FIN.ink, lineHeight: 1 }}>— {c.n}</div>
                    <div style={{ fontSize: 10, color: FIN.stone, marginTop: 3, letterSpacing: '0.04em' }}>{c.r} · {c.trip}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
