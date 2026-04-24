'use client';

import { useState } from 'react';
import { FIN } from './fin';

export default function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="kin-faq"
      style={{ borderBottom: `1px solid ${FIN.rule}`, padding: '24px 20px', cursor: 'pointer' }}
      onClick={() => setOpen((o) => !o)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: FIN.sans, fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', color: FIN.ink }}>{q}</span>
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
            flexShrink: 0,
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          maxHeight: open ? 200 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, margin-top 0.35s',
          marginTop: open ? 14 : 0,
        }}
      >
        <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, color: FIN.stone, maxWidth: 720 }}>{a}</p>
      </div>
    </div>
  );
}
