'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ACCENT, FG, BORDER } from './theme';

const links = [
  { href: '/', label: 'Trips' },
  { href: '/trips/patagonia', label: 'Patagonia' },
  { href: '/stays', label: 'Stays' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/apply', label: 'Apply' },
];

export default function Nav() {
  const pathname = usePathname();
  if (pathname?.startsWith('/home2')) return null;
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px 40px',
        borderBottom: `1px solid ${BORDER}`,
        position: 'sticky',
        top: 0,
        background: 'rgba(250,250,247,0.95)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            width: 26,
            height: 26,
            background: FG,
            borderRadius: '50%',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 3,
              background: ACCENT,
              borderRadius: '50%',
              transform: 'scale(0.6)',
            }}
          />
        </div>
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: FG }}>
          Founder Escapes
          <span style={{ color: ACCENT, background: FG, padding: '0 4px', marginLeft: 4 }}>®</span>
        </span>
      </Link>

      <nav style={{ display: 'flex', gap: 4, fontSize: 13 }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              padding: '8px 14px',
              borderRadius: 100,
              background: isActive(l.href) ? FG : 'transparent',
              color: isActive(l.href) ? '#fafaf7' : FG,
              fontWeight: 500,
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            fontSize: 11,
            color: '#555',
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span
            className="kin-dot"
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: ACCENT,
              display: 'inline-block',
            }}
          />
          42 FOUNDERS ONLINE
        </span>
        <Link
          href="/apply"
          style={{
            background: FG,
            color: '#fafaf7',
            padding: '10px 18px',
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          Get in →
        </Link>
      </div>
    </header>
  );
}
