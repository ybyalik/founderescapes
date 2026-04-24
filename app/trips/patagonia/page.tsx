import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Footer from '@/components/Footer';
import { ACCENT, BG, BORDER, CARD_BG, FG, MUTED } from '@/components/theme';

export const metadata = {
  title: 'Patagonia · Torres del Paine — Founder Escapes',
  description: 'Eight days circling the Torres del Paine, on foot. Six seats. March 14–22, 2026.',
};

const SPEC = [
  ['Duration', '8 days'], ['Distance', '82 km'], ['Elevation', '±3,200m'],
  ['Difficulty', '4 / 5'], ['Group', '6–8 founders'], ['Price', '$6,800'],
] as const;

const ITIN = [
  { d: '01', t: 'Arrival · Puerto Natales', body: 'Meet your cohort at sunset over asado at Estancia Cerro Guido. Early to bed.', km: '0' },
  { d: '02', t: 'Ascencio Valley', body: '14km approach through lenga forest. First camp at 780m. First circle.', km: '14' },
  { d: '03', t: 'The Towers', body: 'Alpine start at 4am. Sunrise at the base of the towers. Hot coffee, cold hands.', km: '12' },
  { d: '04', t: 'French Valley', body: 'Ridge traverse. Glacier panorama. Six hours on foot, two on your back.', km: '16' },
  { d: '05', t: 'Grey Glacier', body: 'Rest day — or not. Optional kayak among the icebergs.', km: '8' },
  { d: '06', t: 'Paso John Gardner', body: 'The crux. 1,200m of elevation in a day. You will remember this one.', km: '18' },
  { d: '07', t: 'Laguna Amarga', body: 'Long descent. Final camp. Fire. Last circle.', km: '14' },
  { d: '08', t: 'Return · Asado', body: 'Lamb over coals. Long table. Different humans going home.', km: '0' },
];

const GALLERY = [
  { img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80', span: '2 / span 2' },
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80' },
];

const GUIDES = [
  { n: 'Ignacia Vergara', r: 'Lead Guide', bio: 'Born Puerto Natales. 12 years in the park. Climbs harder than you.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
  { n: 'Marcus Okonkwo', r: 'Cohort Host', bio: 'Founder Escapes alumni Exp. 041. Ex-CEO Ridgeline. Runs the evening circles.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
];

export default function TripPatagonia() {
  return (
    <div style={{ background: BG, color: FG }}>
      <div style={{ padding: '20px 40px', borderBottom: `1px solid ${BORDER}`, fontSize: 12, fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', letterSpacing: '0.1em', color: MUTED }}>
        <Link href="/">TRIPS</Link>
        <span style={{ margin: '0 10px' }}>/</span>
        <Link href="/">TREKKING</Link>
        <span style={{ margin: '0 10px' }}>/</span>
        <span style={{ color: FG }}>PATAGONIA · N°047</span>
      </div>

      <section style={{ position: 'relative', height: 620, overflow: 'hidden' }}>
        <div className="kin-zoom" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1800&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.65) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 48, left: 40, right: 40, color: '#fafaf7', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600, background: ACCENT, color: '#0a0a0a', padding: '4px 10px', borderRadius: 3, display: 'inline-block' }}>EXPEDITION N°047 · 6 SEATS LEFT</div>
            <h1 style={{ fontSize: 112, fontWeight: 800, margin: '18px 0 0', letterSpacing: '-0.045em', lineHeight: 0.88 }}>
              Patagonia.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>Torres del Paine.</span>
            </h1>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.14em', opacity: 0.9 }}>
            <div>S 50°56′ · W 73°24′</div>
            <div style={{ marginTop: 4 }}>ELEV · 850–1,200M</div>
            <div style={{ marginTop: 4 }}>MAR 14 — 22, 2026</div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: `1px solid ${BORDER}`, padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0 }}>
          {SPEC.map(([k, v], i) => (
            <div key={k} style={{ padding: '28px 24px', borderLeft: i === 0 ? 'none' : `1px solid ${BORDER}` }}>
              <div style={{ fontSize: 10, letterSpacing: '0.2em', color: MUTED, textTransform: 'uppercase', fontWeight: 600 }}>{k}</div>
              <div style={{ fontSize: 24, fontWeight: 700, marginTop: 6, letterSpacing: '-0.02em' }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 40px', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 60, alignItems: 'flex-start' }}>
        <Reveal>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ THE EXPEDITION</div>
            <h2 style={{ fontSize: 44, fontWeight: 700, margin: '12px 0 28px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Eight days circling the towers, on foot.
            </h2>
            <div style={{ fontSize: 16, lineHeight: 1.7, color: MUTED, maxWidth: 620, display: 'grid', gap: 18 }}>
              <p style={{ margin: 0 }}>
                The classic &quot;O&quot; circuit, done slowly and with intention. You&apos;ll sleep in refugios, eat real food, and spend more time above treeline than anywhere else on the planet where you can still order a beer at the end of the day.
              </p>
              <p style={{ margin: 0 }}>
                Our guides are locals — three of them Patagonian-born, one Chilean-Canadian, all with 10+ years in the park. They know which refugio has the best beds, when the wind actually drops at the towers, and how to pace a group of operators who have never walked 20km in a day.
              </p>
              <p style={{ margin: 0 }}>
                Evenings are unstructured. No agenda, no talks. Just a circle on day two, three, and five — whoever wants to speak, speaks.
              </p>
            </div>
          </div>
        </Reveal>
        <div style={{ position: 'sticky', top: 100 }}>
          <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em' }}>$6,800</div>
              <div style={{ fontSize: 11, color: MUTED, letterSpacing: '0.1em' }}>ALL IN</div>
            </div>
            <div style={{ marginTop: 6, fontSize: 13, color: MUTED }}>Deposit $1,200 · balance 60 days out</div>
            <div style={{ height: 1, background: BORDER, margin: '20px 0' }} />
            <div style={{ display: 'grid', gap: 12, fontSize: 13 }}>
              {['Mar 14 — 22, 2026', '6 of 8 seats remaining', 'Arrive Puerto Natales (PNT)', 'Locally-guided · bilingual'].map((r) => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round"><path d="M2 7l3 3 7-7" /></svg>
                  <span>{r}</span>
                </div>
              ))}
            </div>
            <Link href="/apply" style={{
              display: 'block', textAlign: 'center',
              marginTop: 24, width: '100%', background: FG, color: BG,
              padding: '16px', borderRadius: 100, fontSize: 15, fontWeight: 600,
            }}>Apply for this trip →</Link>
            <div style={{ marginTop: 14, fontSize: 11, color: MUTED, textAlign: 'center', letterSpacing: '0.1em' }}>
              10 MIN · RESPONSE WITHIN 14 DAYS
            </div>
          </div>
          <div style={{ marginTop: 16, padding: 20, background: ACCENT, color: '#0a0a0a', borderRadius: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em' }}>◆ COHORT BALANCE</div>
            <div style={{ fontSize: 13, marginTop: 10, lineHeight: 1.5 }}>
              We&apos;re looking for 1–2 more seed-stage founders and one late-stage operator to balance this cohort.
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 40px 100px' }}>
        <Reveal>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ DAY BY DAY</div>
          <h2 style={{ fontSize: 48, fontWeight: 700, margin: '12px 0 40px', letterSpacing: '-0.035em' }}>
            Eight days, <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>one circuit</span>.
          </h2>
        </Reveal>
        <div>
          {ITIN.map((row, i) => (
            <Reveal key={row.d} delay={i * 30}>
              <div style={{
                display: 'grid', gridTemplateColumns: '80px 280px 1fr 80px',
                gap: 32, alignItems: 'center', padding: '24px 0', borderTop: `1px solid ${BORDER}`,
              }}>
                <div style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontSize: 44, color: ACCENT, lineHeight: 1, fontStyle: 'italic', fontWeight: 500 }}>{row.d}</div>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em' }}>{row.t}</div>
                <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.5, maxWidth: 560 }}>{row.body}</div>
                <div style={{ fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', fontSize: 12, color: MUTED, textAlign: 'right' }}>{row.km} KM</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 40px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, gridAutoRows: 200 }}>
          {GALLERY.map((g, i) => (
            <div key={i} style={{
              gridRow: g.span || 'auto',
              borderRadius: 12, overflow: 'hidden', background: `url(${g.img}) center/cover`,
              transition: 'transform .3s', cursor: 'pointer',
            }} />
          ))}
        </div>
      </section>

      <section style={{ padding: '100px 40px', background: '#0a0a0a', color: '#fafaf7' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: ACCENT, fontWeight: 600 }}>◆ YOUR GUIDES</div>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: '12px 0 0', letterSpacing: '-0.035em', lineHeight: 1 }}>
              People who know<br />this <span style={{ color: ACCENT, fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>terrain</span>.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {GUIDES.map((g) => (
              <div key={g.n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundImage: `url(${g.img})`, backgroundSize: 'cover', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>{g.n}</div>
                  <div style={{ fontSize: 11, color: ACCENT, letterSpacing: '0.14em', marginTop: 2 }}>{g.r}</div>
                  <div style={{ fontSize: 13, color: '#aaa', marginTop: 10, lineHeight: 1.5 }}>{g.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 40px', textAlign: 'center', background: ACCENT, color: '#0a0a0a' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600 }}>◆ APPLY · N°047</div>
        <h2 style={{ fontSize: 88, fontWeight: 800, margin: '20px 0 24px', letterSpacing: '-0.04em', lineHeight: 0.92 }}>
          Six seats. <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>Fourteen days.</span>
        </h2>
        <Link href="/apply" style={{
          display: 'inline-block', background: '#0a0a0a', color: ACCENT,
          padding: '18px 36px', borderRadius: 100, fontSize: 15, fontWeight: 600, marginTop: 12,
        }}>Apply for Patagonia →</Link>
      </section>

      <Footer />
    </div>
  );
}
