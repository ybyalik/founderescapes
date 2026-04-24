'use client';

import { useState } from 'react';
import { FIN } from './fin';

export type CalRowData = {
  d: string;
  p: string;
  r: string;
  days: number;
  fee: string;
  s: string;
};

export default function CalRow({ row, last }: { row: CalRowData; last: boolean }) {
  const [hover, setHover] = useState(false);
  const stateColor = row.s === 'Departing' ? FIN.ochre : row.s === 'Waitlist' ? FIN.stone : FIN.teal;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 1.3fr 1fr 110px 130px 150px',
        background: hover ? FIN.bg : FIN.paper,
        transition: 'background 0.15s',
        borderBottom: last ? 'none' : `1px solid ${FIN.rule}`,
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <div style={{ padding: '20px 22px', fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.16em', color: FIN.stone, textTransform: 'uppercase' }}>{row.d}</div>
      <div style={{ padding: '20px 22px', fontFamily: FIN.sans, fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>{row.p}</div>
      <div style={{ padding: '20px 22px', fontFamily: FIN.serif, fontSize: 17, fontStyle: 'italic', color: FIN.stone }}>{row.r}</div>
      <div style={{ padding: '20px 22px', fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.16em', color: FIN.stone, textTransform: 'uppercase' }}>{row.days} days</div>
      <div style={{ padding: '20px 22px', fontFamily: FIN.sans, fontSize: 17, fontWeight: 600 }}>{row.fee}</div>
      <div style={{ padding: '20px 22px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: hover ? FIN.ink : 'transparent',
            color: hover ? FIN.paper : stateColor,
            padding: '6px 12px',
            borderRadius: 999,
            border: `1px solid ${stateColor}`,
            fontSize: 12,
            fontWeight: 600,
            transition: 'all 0.15s',
          }}
        >
          ● {row.s}
        </span>
      </div>
    </div>
  );
}
