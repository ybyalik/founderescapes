'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ACCENT, FG } from './theme';

export default function Nav() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 28px',
        position: 'sticky',
        top: 0,
        background: 'rgba(250,250,247,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 50,
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: FG }}>
        <svg width="24" height="24" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="12" fill="#1a2e1a" />
          <path d="M14 6 L20 18 L8 18 Z" fill={ACCENT} />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em' }}>Founder Escapes</span>
      </Link>

      <Link
        href="/"
        style={{
          fontSize: 13,
          fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: FG,
          opacity: 0.7,
        }}
      >
        ← Back home
      </Link>
    </header>
  );
}
