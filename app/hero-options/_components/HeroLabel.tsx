'use client';

import Link from 'next/link';
import { FIN } from '@/app/home2/_components/fin';

export default function HeroLabel({
  n,
  total,
  name,
  blurb,
  dark,
}: {
  n: string;
  total: string;
  name: string;
  blurb: string;
  dark?: boolean;
}) {
  const fg = dark ? '#fafaf7' : FIN.ink;
  const bg = dark ? 'rgba(10,10,10,0.55)' : 'rgba(255,255,255,0.85)';
  const border = dark ? 'rgba(255,255,255,0.18)' : 'rgba(10,10,10,0.12)';
  return (
    <div
      style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 14px',
        background: bg,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: 999,
        border: `1px solid ${border}`,
        color: fg,
        fontFamily: FIN.mono,
        fontSize: 11,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      }}
    >
      <span style={{ fontWeight: 700 }}>
        {n}/{total}
      </span>
      <span style={{ opacity: 0.6 }}>·</span>
      <span style={{ fontFamily: FIN.sans, fontWeight: 600, letterSpacing: '-0.01em', textTransform: 'none', fontSize: 13 }}>{name}</span>
      <span style={{ opacity: 0.6, marginLeft: 4, marginRight: 4 }}>—</span>
      <span style={{ fontFamily: FIN.sans, fontWeight: 400, opacity: 0.75, letterSpacing: '-0.005em', textTransform: 'none', fontSize: 12 }}>{blurb}</span>
    </div>
  );
}

export function PageNav() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 100,
        display: 'flex',
        gap: 10,
      }}
    >
      <Link
        href="/home2"
        style={{
          padding: '10px 16px',
          background: 'rgba(255,255,255,0.95)',
          color: FIN.ink,
          borderRadius: 999,
          fontFamily: FIN.mono,
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 700,
          border: `1px solid ${FIN.rule}`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        ← Back to /home2
      </Link>
    </div>
  );
}
