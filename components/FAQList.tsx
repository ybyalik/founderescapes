'use client';

import { useState } from 'react';
import { ACCENT, BORDER, FG, MUTED } from './theme';

const ITEMS = [
  { q: 'Who is this actually for?', a: "Founders, CEOs, and senior operators. We don't gatekeep by revenue or funding — we look for people carrying real weight and willing to sit with it for 8 days without a keyboard." },
  { q: 'How fit do I need to be?', a: 'Fit enough to walk 6-8 hours a day with a small pack. We send a training guide 8 weeks out. Most of our alumni are not athletes — they\'re people who started training when they said yes.' },
  { q: "What's the group like?", a: '6-8 founders plus one guide and one host. We curate for a mix of stage (seed through late) and industry. No investors, no coaches, no bros.' },
  { q: "What's actually included?", a: "Everything from arrival at the trailhead: guide, lodging, all meals, gear you don't already own, permits, transport in-country, and a 3-year alumni membership." },
  { q: 'What if I need to reach my team?', a: "Your guide carries a sat phone for real emergencies. Otherwise, it's 8 days off-grid. This is the feature, not the bug." },
  { q: "What's the alumni thing?", a: "A private Slack, quarterly dinners in 14 cities, an annual gathering in Montana, and a directory of 312 operators who've been where you've been." },
];

export default function FAQList() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div style={{ borderTop: `1px solid ${BORDER}` }}>
      {ITEMS.map((it, i) => (
        <div
          key={i}
          className="kin-faq"
          style={{ borderBottom: `1px solid ${BORDER}`, padding: '24px 20px', cursor: 'pointer' }}
          onClick={() => setOpen(open === i ? -1 : i)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.015em', color: FG }}>{it.q}</div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: open === i ? ACCENT : 'transparent',
                border: open === i ? 'none' : `1px solid ${FG}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all .2s',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="#0a0a0a"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .2s' }}
              >
                <path d="M6 2v8M2 6h8" stroke={open === i ? '#0a0a0a' : FG} />
              </svg>
            </div>
          </div>
          <div
            style={{
              maxHeight: open === i ? 200 : 0,
              overflow: 'hidden',
              transition: 'max-height .3s, margin .3s',
              marginTop: open === i ? 14 : 0,
              fontSize: 15,
              lineHeight: 1.6,
              color: MUTED,
              maxWidth: 680,
            }}
          >
            {it.a}
          </div>
        </div>
      ))}
    </div>
  );
}
