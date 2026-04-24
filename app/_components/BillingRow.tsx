'use client';

import { useState } from 'react';
import { FIN } from './fin';
import Photo, { Tone } from './Photo';

export type Trip = {
  n: string;
  name: string;
  sub: string;
  when: string;
  fee: string;
  diff: string;
  tone: Tone;
  hype: string;
};

export default function BillingRow({ t, i }: { t: Trip; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="fe-billing-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 280px 220px',
        gap: 24,
        padding: '32px 0',
        borderTop: i === 0 ? `1px solid ${FIN.ruleD}` : 'none',
        borderBottom: `1px solid ${FIN.ruleD}`,
        alignItems: 'center',
        paddingLeft: hover ? 20 : 0,
        transition: 'padding 0.3s',
        cursor: 'pointer',
      }}
    >
      <div style={{ fontFamily: FIN.mono, fontSize: 14, letterSpacing: '0.2em', color: FIN.ochre, fontWeight: 600 }}>N°{t.n}</div>
      <div>
        <div
          className="fe-mob-h2"
          style={{
            fontFamily: FIN.sans,
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            color: hover ? FIN.ochre : FIN.paper,
            transition: 'color 0.2s',
          }}
        >
          {t.name}
        </div>
        <div style={{ fontFamily: FIN.serif, fontSize: 22, fontStyle: 'italic', marginTop: 6, opacity: 0.75 }}>{t.sub}</div>
      </div>
      <div style={{ width: 260, height: 140, overflow: 'hidden', borderRadius: 12, transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.4s' }}>
        <Photo tone={t.tone} label={t.hype} h="100%" />
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontFamily: FIN.sans, fontSize: 26, fontWeight: 600 }}>{t.fee}</div>
        <div style={{ fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.65, marginTop: 6 }}>
          {t.when} · Diff {t.diff}
        </div>
      </div>
    </div>
  );
}
