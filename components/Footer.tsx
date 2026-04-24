import { ACCENT } from './theme';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fafaf7', padding: '60px 40px 32px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 24, background: ACCENT, borderRadius: '50%' }} />
          <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em' }}>
            Founder Escapes®
          </span>
        </div>
        <div
          style={{
            fontSize: 11,
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            letterSpacing: '0.1em',
            color: '#888',
            display: 'flex',
            gap: 28,
            flexWrap: 'wrap',
          }}
        >
          <span>© 2024—2026 FOUNDER ESCAPES CO.</span>
          <span>B-CORP · CARBON POSITIVE</span>
          <span>BOZEMAN + LISBON</span>
        </div>
      </div>
    </footer>
  );
}
