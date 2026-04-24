'use client';

import { useState } from 'react';
import { FIN } from './fin';

export default function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${FIN.rule}` }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          color: FIN.ink,
          cursor: 'pointer',
          padding: '26px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: FIN.sans, fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>{q}</span>
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: open ? FIN.ink : FIN.paper,
            color: open ? FIN.paper : FIN.ink,
            display: 'grid',
            placeItems: 'center',
            fontSize: 18,
            fontWeight: 500,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'all 0.2s',
            border: `1px solid ${FIN.rule}`,
          }}
        >
          +
        </span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, padding-bottom 0.35s', paddingBottom: open ? 24 : 0 }}>
        <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, color: FIN.stone, maxWidth: 720 }}>{a}</p>
      </div>
    </div>
  );
}
