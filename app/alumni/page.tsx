import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Footer from '@/components/Footer';
import { ACCENT, BG, BORDER, CARD_BG, FG, MUTED } from '@/components/theme';

export const metadata = {
  title: 'Alumni — Founder Escapes',
  description: '312 founders. Still talking. The cohort, the network, what they actually get.',
};

const ALUMNI = [
  { n: 'Marcus Okonkwo', r: 'CEO, Ridgeline', exp: '041', q: 'Closed a round on the flight home. Different human.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
  { n: 'Sofia Navarro', r: 'Founder, Glasshouse', exp: '038', q: 'Fired myself as CTO on day four. Best call I ever made.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80' },
  { n: 'Alex Chen', r: 'CEO, Compass', exp: '044', q: 'I cried on a glacier. Wrote the pivot deck at basecamp.', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80' },
  { n: 'Jonas Bauman', r: 'COO, Northstar', exp: '039', q: "We don't do offsites anymore. We do Founder Escapes.", img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80' },
  { n: 'Priya Rao', r: 'Founder, Drift', exp: '045', q: 'Six strangers became my board of directors.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  { n: 'Tom Haberman', r: 'CEO, Switchback', exp: '042', q: 'The silence was the product.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
];

const STATS = [
  { n: '312', l: 'Alumni' },
  { n: '$4.8B', l: 'Raised post-trip' },
  { n: '14', l: 'Cities w/ dinners' },
  { n: '96%', l: 'Would go again' },
];

const NETWORK = [
  ['Private Slack', '312 operators, tagged by industry, stage, and expedition.'],
  ['Quarterly dinners', '14 cities. 6-12 alumni per dinner. We book, you show up.'],
  ['Annual gathering', 'Every February. Montana. Three nights. Open invite.'],
  ['Intros that close', 'The network hires from, invests in, and acquires each other.'],
] as const;

export default function Alumni() {
  return (
    <div style={{ background: BG, color: FG }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <Reveal>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ THE COHORT</div>
          <h1 style={{ fontSize: 112, fontWeight: 800, margin: '16px 0 20px', letterSpacing: '-0.045em', lineHeight: 0.9 }}>
            312 founders.<br />
            <span style={{ background: ACCENT, color: '#0a0a0a', padding: '0 12px', fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>Still talking.</span>
          </h1>
        </Reveal>
      </section>

      <section style={{ padding: '0 40px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 60}>
              <div style={{ padding: 28, borderRadius: 14, background: i === 0 ? ACCENT : CARD_BG, color: i === 0 ? '#0a0a0a' : FG, border: i === 0 ? 'none' : `1px solid ${BORDER}` }}>
                <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, marginTop: 10, opacity: 0.75 }}>{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 40px 100px' }}>
        <Reveal>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ RECENT DISPATCHES</div>
          <h2 style={{ fontSize: 48, fontWeight: 700, margin: '12px 0 40px', letterSpacing: '-0.035em' }}>
            From the <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>field</span>.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {ALUMNI.map((a, i) => (
            <Reveal key={a.n} delay={i * 60}>
              <div style={{ padding: 28, borderRadius: 14, background: CARD_BG, border: `1px solid ${BORDER}` }}>
                <div style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.01em', minHeight: 100 }}>&quot;{a.q}&quot;</div>
                <div style={{ marginTop: 24, paddingTop: 18, borderTop: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundImage: `url(${a.img})`, backgroundSize: 'cover' }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{a.n}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginTop: 2, fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', letterSpacing: '0.08em' }}>{a.r} · EXP. {a.exp}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#0a0a0a', color: '#fafaf7' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: ACCENT, fontWeight: 600 }}>◆ THE NETWORK</div>
            <h2 style={{ fontSize: 56, fontWeight: 700, margin: '12px 0 0', letterSpacing: '-0.035em', lineHeight: 1 }}>
              What alumni<br />actually <span style={{ color: ACCENT, fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>get</span>.
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 0 }}>
            {NETWORK.map(([t, d], i) => (
              <div key={t} style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: i === 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em' }}>{t}</div>
                <div style={{ fontSize: 14, color: '#aaa', marginTop: 6, lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', textAlign: 'center', background: ACCENT, color: '#0a0a0a' }}>
        <h2 style={{ fontSize: 72, fontWeight: 800, margin: '0 0 24px', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
          Become <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>alumni</span>.
        </h2>
        <Link href="/apply" style={{
          display: 'inline-block', background: '#0a0a0a', color: ACCENT,
          padding: '16px 28px', borderRadius: 100, fontSize: 14, fontWeight: 600,
        }}>Apply to a cohort →</Link>
      </section>

      <Footer />
    </div>
  );
}
