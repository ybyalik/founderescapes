import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Footer from '@/components/Footer';
import { ACCENT, BG, BORDER, CARD_BG, FG, MUTED } from '@/components/theme';

export const metadata = {
  title: 'Stays — Founder Escapes',
  description: 'Beds with good bones. Refugios, yurts, fishing huts and lodges across our trips.',
};

const STAYS = [
  { t: 'Paine Grande Refugio', loc: 'Patagonia, Chile', type: 'Refugio', beds: '6 bunk', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', body: 'Shared bunkhouse at the edge of Lago Pehoé. Hot showers, hot food, wool blankets.' },
  { t: 'Gobi Yurt Camp', loc: 'Gobi-Altai, Mongolia', type: 'Yurt', beds: '2 per yurt', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80' },
  { t: 'Saksun Fishing Hut', loc: 'Faroe Islands', type: 'Cabin', beds: '4 private', img: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=800&q=80' },
  { t: 'Niseko Lodge', loc: 'Hokkaido, Japan', type: 'Lodge', beds: '8 private', img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80' },
  { t: 'Wahiba Desert Camp', loc: 'Oman', type: 'Tent', beds: '2 per tent', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' },
  { t: 'Atacama Eco-Dome', loc: 'Chile', type: 'Dome', beds: '2 private', img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&q=80' },
  { t: 'Dolomiti Rifugio', loc: 'Italy', type: 'Rifugio', beds: '4 shared', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
];

export default function Stays() {
  const featured = STAYS[0];
  return (
    <div style={{ background: BG, color: FG }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <Reveal>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ STAYS</div>
          <h1 style={{ fontSize: 96, fontWeight: 800, margin: '16px 0 20px', letterSpacing: '-0.045em', lineHeight: 0.92 }}>
            Beds with<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>good bones</span>.
          </h1>
          <p style={{ fontSize: 17, color: MUTED, maxWidth: 640, lineHeight: 1.55 }}>
            Nowhere fancy. Everywhere real. We book the places that stay open because the owners actually live there.
          </p>
        </Reveal>
      </section>

      <section style={{ padding: '0 40px 80px' }}>
        <Reveal>
          <div style={{ borderRadius: 18, overflow: 'hidden', position: 'relative', height: 520, marginBottom: 32 }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${featured.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 40, left: 40, right: 40, color: '#fafaf7' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', background: ACCENT, color: '#0a0a0a', padding: '4px 10px', borderRadius: 3, display: 'inline-block', fontWeight: 700 }}>FEATURED · PATAGONIA</div>
              <div style={{ fontSize: 56, fontWeight: 800, marginTop: 16, letterSpacing: '-0.03em' }}>{featured.t}</div>
              <div style={{ fontSize: 16, marginTop: 10, maxWidth: 500, opacity: 0.9, lineHeight: 1.5 }}>{featured.body}</div>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {STAYS.slice(1).map((s, i) => (
            <Reveal key={s.t} delay={i * 50}>
              <div className="kin-feat-card" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <div className="kin-feat-img" style={{ width: '100%', height: '100%', backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>{s.type.toUpperCase()} · {s.beds.toUpperCase()}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8, letterSpacing: '-0.02em' }}>{s.t}</div>
                  <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{s.loc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: ACCENT, color: '#0a0a0a', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600 }}>◆ BOOK A TRIP</div>
        <h2 style={{ fontSize: 64, fontWeight: 800, margin: '16px 0 24px', letterSpacing: '-0.035em', lineHeight: 1 }}>
          Stays come with the trip.
        </h2>
        <Link href="/" style={{
          display: 'inline-block', background: '#0a0a0a', color: ACCENT,
          padding: '16px 28px', borderRadius: 100, fontSize: 14, fontWeight: 600,
        }}>Browse all trips →</Link>
      </section>

      <Footer />
    </div>
  );
}
