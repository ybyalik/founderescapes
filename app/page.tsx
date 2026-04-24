import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { DestinationsMap, DestinationsGlobe } from '@/components/Destinations';
import VisualTestimonial from '@/components/VisualTestimonial';
import FAQList from '@/components/FAQList';
import { ACCENT, BG, BORDER, CARD_BG, FG, MUTED } from '@/components/theme';

const TRIPS = [
  { title: 'Patagonia', sub: 'Torres del Paine · 8 days', price: '6.8K', seats: 6, dates: 'Mar 2026', img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80', href: '/trips/patagonia' },
  { title: 'Faroe Islands', sub: 'Stórá Dímun · 9 days', price: '7.4K', seats: 8, dates: 'Jun 2026', img: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=800&q=80' },
  { title: 'Hokkaido', sub: 'Backcountry ski · 10 days', price: '9.2K', seats: 4, dates: 'Feb 2027', img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80' },
  { title: 'Empty Quarter', sub: 'Oman desert · 7 days', price: '8.1K', seats: 6, dates: 'Nov 2026', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' },
  { title: 'Atacama', sub: 'High-altitude · 7 days', price: '6.2K', seats: 4, dates: 'Apr 2026', img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&q=80' },
  { title: 'Dolomites', sub: 'Via ferrata · 6 days', price: '5.4K', seats: 8, dates: 'Sep 2026', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
];

const STAYS = [
  { t: 'Paine Grande', loc: 'REFUGIO · PATAGONIA', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', big: true, body: "A shared bunkhouse at the edge of Lago Pehoé. Hot showers. Hot food. Wool blankets. The kind of tired you earn." },
  { t: 'Yurt Camp', loc: 'GOBI-ALTAI, MONGOLIA', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80' },
  { t: 'Fishing Hut', loc: 'SAKSUN, FAROE IS.', img: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=600&q=80' },
];

const HOW_STEPS = [
  { n: '01', t: 'Browse trips', d: 'Fourteen cohorts across six continents. Filter by terrain, month, or how much you want to suffer.', img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=500&q=80', r: -2 },
  { n: '02', t: 'Apply & talk', d: '10-min application, a real human reply in 14 days, and a 30-min call to make sure the cohort balances.', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80', r: 3 },
  { n: '03', t: 'Prep & pack', d: "Eight-week training plan, shared gear list, cohort Slack, and a Zoom to meet the six strangers you'll share a tent with.", img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&q=80', r: -3 },
  { n: '04', t: 'Go somewhere hard', d: 'Meet your guide at the trailhead. No wifi for eight days. Come home with a cohort and, usually, a decision.', img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500&q=80', r: 2 },
];

const HIW = [
  { n: '01', t: 'Apply in 10 minutes', d: 'A real human reads every application. We select six to eight founders per trip to balance the circle — stage, industry, temperament.' },
  { n: '02', t: 'Meet your cohort', d: "Zoom intros two weeks before departure. You'll know names, faces, and what everyone is working through before you land." },
  { n: '03', t: 'Go somewhere hard', d: 'Eight days, no wifi. A certified guide, a shared tent, and the kind of problem-solving you can only do while moving.' },
  { n: '04', t: 'Come home with a cohort', d: "Alumni Slack. Dinners in your city. Introductions that actually close. The trip ends; the network doesn't." },
];

const FOOTER_COLS = [
  { h: 'Trips', l: ['All expeditions', 'Trek', 'Ski touring', 'Sail', 'Desert'] },
  { h: 'Stays', l: ['Refugios', 'Yurts', 'Fishing huts', 'Glass cabins'] },
  { h: 'Cohort', l: ['Apply', 'Alumni', 'Dinners', 'Referrals'] },
  { h: 'Co.', l: ['About', 'Guides', 'Press', 'B-Corp'] },
];

const PEEK = [
  { img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=500&q=80', r: -6, w: 200 },
  { img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=500&q=80', r: 4, w: 220 },
  { img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=80', r: -2, w: 210 },
  { img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500&q=80', r: 6, w: 200 },
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80', r: -4, w: 215 },
  { img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80', r: 3, w: 205 },
];

export default function Home() {
  return (
    <div style={{ background: BG, color: FG }}>
      {/* Hero marquee */}
      <section>
        <div style={{ overflow: 'hidden', padding: '26px 0 18px', borderBottom: `1px solid ${BORDER}` }}>
          <div className="kin-march" style={{
            display: 'flex', whiteSpace: 'nowrap', width: 'max-content',
            fontSize: 128, fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.88, color: FG,
          }}>
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span>GO&nbsp;SOMEWHERE</span>
                <span style={{
                  margin: '0 24px', width: 68, height: 68, background: ACCENT, borderRadius: '50%',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="38" height="38" viewBox="0 0 56 56" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round">
                    <path d="M18 38L38 18M22 18h16v16" />
                  </svg>
                </span>
                <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>
                  you haven&apos;t been
                </span>
                <span style={{ margin: '0 48px' }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', height: 620 }}>
          <div style={{ padding: '48px 40px', borderRight: `1px solid ${BORDER}`, display: 'flex', flexDirection: 'column' }}>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <span style={{
                  fontSize: 10, letterSpacing: '0.18em', fontWeight: 600,
                  background: FG, color: ACCENT, padding: '4px 8px', borderRadius: 3,
                }}>2026 COHORTS OPEN</span>
                <span style={{ fontSize: 12, color: MUTED }}>→ 14 trips · 6 continents · 72 seats</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 style={{ fontSize: 62, lineHeight: 1.0, fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>
                Adventure trips,<br />engineered for people<br />who{' '}
                <span style={{ background: ACCENT, color: '#0a0a0a', padding: '0 10px', fontStyle: 'italic', fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontWeight: 500 }}>run things</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ marginTop: 28, fontSize: 15, lineHeight: 1.55, color: MUTED, maxWidth: 460 }}>
                We take small groups of founders and operators to genuinely wild places — to move hard, eat well, and have unstructured conversations that rarely happen at offsites.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
                {['Trekking', 'Ski touring', 'Sailing', 'Desert', 'Surf', 'Rivers'].map((c, i) => (
                  <span key={c} className="kin-chip" style={{
                    border: `1px solid ${FG}`, padding: '6px 14px', borderRadius: 100,
                    fontSize: 12, fontWeight: 500, cursor: 'pointer',
                    background: i === 0 ? FG : 'transparent', color: i === 0 ? BG : FG,
                  }}>{c}</span>
                ))}
              </div>
            </Reveal>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
              <Link href="/trips/patagonia" style={{
                background: FG, color: BG, padding: '14px 24px', borderRadius: 100, fontSize: 14, fontWeight: 500,
              }}>Browse all trips →</Link>
              <Link href="/apply" style={{
                background: 'transparent', color: FG, border: `1px solid ${FG}`,
                padding: '14px 24px', borderRadius: 100, fontSize: 14, fontWeight: 500,
              }}>Apply to cohort</Link>
            </div>
          </div>

          {/* Cinematic ken-burns hero panel */}
          <div className="kin-video-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="kin-zoom" style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1600&q=80)',
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,10,.6) 100%)',
            }} />
            <div className="kin-playbtn" style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)', width: 96, height: 96,
              borderRadius: '50%', background: ACCENT,
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
              <svg width="34" height="34" viewBox="0 0 30 30" fill="#0a0a0a"><path d="M9 6l16 9-16 9V6z" /></svg>
            </div>
            <div style={{
              position: 'absolute', top: 20, left: 20, right: 20,
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', fontSize: 10,
              color: '#fafaf7', letterSpacing: '0.18em',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="kin-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT }} />
                LIVE · COHORT 12
              </span>
              <span>02:14 / 03:40</span>
            </div>
            <div style={{ position: 'absolute', bottom: 24, left: 28, right: 28, color: '#fafaf7' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.24em', opacity: 0.8, fontFamily: 'var(--font-mono), monospace' }}>FEATURED FILM — 03:40</div>
              <div style={{ fontSize: 26, fontWeight: 600, marginTop: 6, letterSpacing: '-0.015em' }}>
                Twelve founders. One valley.<br />Zero cell service.
              </div>
            </div>
          </div>
        </div>

        <div style={{ overflow: 'hidden', padding: '14px 0', background: '#0a0a0a', color: '#fafaf7' }}>
          <div className="kin-march-rev" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content', fontSize: 13, letterSpacing: '0.14em', fontWeight: 500 }}>
            {[...Array(2)].flatMap((_, i) => [
              <span key={`a${i}`} style={{ margin: '0 28px' }}>★ Featured in Monocle, Departures, Condé Nast Traveler</span>,
              <span key={`b${i}`} style={{ margin: '0 28px', color: ACCENT }}>— 312 founders · $4.8B raised · 0 bears encountered —</span>,
              <span key={`c${i}`} style={{ margin: '0 28px' }}>★ B-Corp certified · carbon positive since 2021</span>,
              <span key={`d${i}`} style={{ margin: '0 28px', color: ACCENT }}>— Next departure: 14 days —</span>,
            ])}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section style={{ padding: '48px 40px', borderBottom: `1px solid ${BORDER}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 48, justifyContent: 'space-between' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600, whiteSpace: 'nowrap' }}>
              ◆ AS SEEN IN
            </div>
            <div style={{ display: 'flex', gap: 56, alignItems: 'center', flex: 1, justifyContent: 'space-around', opacity: 0.75 }}>
              {['MONOCLE', 'Condé Nast', 'DEPARTURES', 'Outside', 'WIRED', 'The New Yorker', 'Kinfolk'].map((n, i) => (
                <span key={n} style={{
                  fontFamily: i % 2 === 0 ? 'var(--font-cormorant), "Cormorant Garamond", serif' : 'var(--font-inter), "Inter", sans-serif',
                  fontSize: i % 2 === 0 ? 22 : 16, fontWeight: i % 2 === 0 ? 500 : 700,
                  fontStyle: i === 1 ? 'italic' : 'normal',
                  letterSpacing: i % 2 === 1 ? '0.15em' : '-0.01em',
                  color: FG, whiteSpace: 'nowrap',
                }}>{n}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* HOW WE DO TRIPS */}
      <section style={{ padding: '100px 40px 40px' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: `1px solid ${BORDER}`, borderRadius: 100, padding: '6px 14px',
              fontSize: 11, letterSpacing: '0.18em', fontWeight: 600, color: MUTED,
            }}>
              <span style={{ fontSize: 14, color: ACCENT }}>✦</span>
              HOW A TRIP WORKS
            </div>
            <h2 style={{
              fontSize: 64, fontWeight: 700, margin: '24px auto 0',
              letterSpacing: '-0.035em', lineHeight: 1.02, maxWidth: 780, textWrap: 'balance' as const,
            }}>
              Four honest steps between <span style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 500 }}>signing up</span> and standing at the trailhead.
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {HOW_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="kin-feat-card" style={{
                background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 14,
                padding: 24, height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'default',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontStyle: 'italic',
                    fontSize: 48, fontWeight: 500, lineHeight: 1, color: FG, letterSpacing: '-0.02em',
                  }}>{s.n}</div>
                  <div style={{
                    width: 130, height: 160, borderRadius: 10, overflow: 'hidden', flexShrink: 0,
                    backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                    transform: `rotate(${s.r}deg)`, boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    border: '3px solid #fafaf7',
                    transition: 'transform .4s cubic-bezier(.2,.7,.3,1)',
                  }} />
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 10 }}>{s.t}</div>
                  <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.55 }}>{s.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED TRIPS */}
      <section style={{ padding: '80px 40px 80px' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ 2026 SEASON</div>
              <h2 style={{ fontSize: 56, fontWeight: 700, margin: '12px 0 0', letterSpacing: '-0.035em', lineHeight: 1 }}>
                Open <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>expeditions</span>.
              </h2>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['All', 'Trek', 'Ski', 'Sail', 'Desert'].map((t, i) => (
                <span key={t} style={{
                  padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  background: i === 0 ? FG : CARD_BG, color: i === 0 ? BG : FG, border: `1px solid ${FG}`,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {TRIPS.map((t, i) => {
            const card = (
              <div className="kin-feat-card" style={{
                background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', position: 'relative',
              }}>
                <div style={{ width: '100%', height: 240, overflow: 'hidden', position: 'relative' }}>
                  <div className="kin-feat-img" style={{
                    width: '100%', height: '100%',
                    backgroundImage: `url(${t.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                  }} />
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    background: 'rgba(255,255,255,0.95)', color: '#0a0a0a', padding: '4px 10px', borderRadius: 100,
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.04em',
                  }}>{t.dates}</div>
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    background: ACCENT, color: '#0a0a0a', padding: '4px 10px', borderRadius: 100,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
                  }}>{t.seats} LEFT</div>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{t.title}</div>
                      <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{t.sub}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 20, fontWeight: 700 }}>${t.price}</div>
                      <div style={{ fontSize: 10, color: MUTED, letterSpacing: '0.1em' }}>ALL IN</div>
                    </div>
                  </div>
                </div>
                <span className="kin-card-arrow" style={{
                  position: 'absolute', bottom: 20, right: 20, width: 36, height: 36,
                  borderRadius: '50%', background: FG,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transform: 'rotate(-20deg)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
                    <path d="M3 9L9 3M4 3h5v5" />
                  </svg>
                </span>
              </div>
            );
            return (
              <Reveal key={t.title} delay={i * 50}>
                {t.href ? <Link href={t.href}>{card}</Link> : card}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* DESTINATIONS — both map and globe */}
      <DestinationsMap />
      <DestinationsGlobe />

      {/* HOW IT WORKS */}
      <section style={{ padding: '100px 40px', background: '#0a0a0a', color: '#fafaf7' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
          <Reveal>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: ACCENT, fontWeight: 600 }}>◆ HOW IT WORKS</div>
              <h2 style={{ fontSize: 64, fontWeight: 700, margin: '16px 0 0', letterSpacing: '-0.035em', lineHeight: 1 }}>
                Not a retreat.<br />Not an offsite.<br />
                <span style={{ color: ACCENT, fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>
                  A cohort.
                </span>
              </h2>
            </div>
          </Reveal>
          <div>
            {HIW.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 28, padding: '28px 0', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', fontSize: 14, color: ACCENT, letterSpacing: '0.14em' }}>N° {s.n}</div>
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.015em' }}>{s.t}</div>
                    <div style={{ fontSize: 14, color: '#aaa', marginTop: 8, lineHeight: 1.6, maxWidth: 540 }}>{s.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAYS preview */}
      <section style={{ padding: '100px 40px 80px' }}>
        <Reveal>
          <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ WHERE YOU&apos;LL SLEEP</div>
              <h2 style={{ fontSize: 56, fontWeight: 700, margin: '12px 0 0', letterSpacing: '-0.035em', lineHeight: 1 }}>
                Beds with <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>good bones</span>.
              </h2>
            </div>
            <Link href="/stays" style={{
              background: 'transparent', color: FG, border: `1px solid ${FG}`,
              padding: '12px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
            }}>View all stays →</Link>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 20, height: 520 }}>
          {STAYS.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <Link href="/stays">
                <div className="kin-feat-card" style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', height: 520 }}>
                  <div className="kin-feat-img" style={{
                    position: 'absolute', inset: 0, backgroundImage: `url(${s.img})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)',
                  }} />
                  <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28, color: '#fafaf7' }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.85 }}>{s.loc}</div>
                    <div style={{ fontSize: s.big ? 32 : 22, fontWeight: 700, marginTop: 8, letterSpacing: '-0.02em' }}>{s.t}</div>
                    {s.body && <div style={{ fontSize: 13, opacity: 0.85, marginTop: 6, maxWidth: 420 }}>{s.body}</div>}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <VisualTestimonial />

      {/* FAQ */}
      <section style={{ padding: '100px 40px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <Reveal>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ QUESTIONS</div>
              <h2 style={{ fontSize: 56, fontWeight: 700, margin: '12px 0 0', letterSpacing: '-0.035em', lineHeight: 1 }}>
                Before you <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>ask</span>.
              </h2>
            </div>
          </Reveal>
          <div>
            <FAQList />
          </div>
        </div>
      </section>

      {/* CTA + integrated footer */}
      <section style={{ position: 'relative', marginTop: 80, paddingTop: 120, overflow: 'visible' }}>
        <div style={{
          position: 'relative', zIndex: 3, display: 'flex', justifyContent: 'center',
          gap: 14, padding: '0 40px', marginBottom: -90, pointerEvents: 'none',
        }}>
          {PEEK.map((p, i) => (
            <div key={i} style={{
              width: p.w, height: 260, borderRadius: 14, overflow: 'hidden',
              transform: `rotate(${p.r}deg)`,
              backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.12)',
              border: '5px solid #fafaf7',
            }} />
          ))}
        </div>

        <div style={{
          position: 'relative', background: '#1e3a2a', color: '#fafaf7',
          padding: '180px 40px 56px', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=2000&q=80)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.18, mixBlendMode: 'luminosity',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 50% 40%, transparent 30%, rgba(0,0,0,0.35) 100%)',
          }} />

          <Reveal>
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600, color: ACCENT }}>◆ APPLY · COHORT 14</div>
              <h2 style={{
                fontSize: 108, fontWeight: 800, margin: '20px 0 24px',
                letterSpacing: '-0.045em', lineHeight: 0.92, color: '#fafaf7',
              }}>
                Next flight leaves<br />
                <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', color: ACCENT }}>in fourteen days</span>.
              </h2>
              <p style={{ fontSize: 17, maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.5, color: 'rgba(250,250,247,0.85)' }}>
                Application is 10 minutes. Real humans reply within 14 days. Six seats remain for the March Patagonia departure.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 72 }}>
                <Link href="/apply" style={{
                  background: ACCENT, color: '#0a0a0a',
                  padding: '18px 32px', borderRadius: 100, fontSize: 15, fontWeight: 600,
                }}>Apply now →</Link>
                <Link href="/trips/patagonia" style={{
                  background: 'transparent', color: '#fafaf7', border: '1.5px solid rgba(250,250,247,0.6)',
                  padding: '18px 32px', borderRadius: 100, fontSize: 15, fontWeight: 600,
                }}>Browse trips</Link>
              </div>
            </div>
          </Reveal>

          <div style={{
            position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto',
            paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.15)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 24, height: 24, background: ACCENT, borderRadius: '50%' }} />
                  <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em' }}>Founder Escapes®</span>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(250,250,247,0.65)', lineHeight: 1.6, maxWidth: 280 }}>
                  Adventure trips for operators. Since 2024. Based in a cabin in Bozeman, an office in Lisbon, and a yurt no one can find.
                </div>
              </div>
              {FOOTER_COLS.map((col) => (
                <div key={col.h}>
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14, fontWeight: 600 }}>{col.h.toUpperCase()}</div>
                  <div style={{ display: 'grid', gap: 8 }}>
                    {col.l.map((l) => <div key={l} style={{ fontSize: 13, color: 'rgba(250,250,247,0.8)' }}>{l}</div>)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', justifyContent: 'space-between',
              fontSize: 11, fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
              letterSpacing: '0.1em', color: 'rgba(250,250,247,0.55)', flexWrap: 'wrap', gap: 16,
            }}>
              <span>© 2024—2026 FOUNDER ESCAPES CO.</span>
              <span>B-CORP · CARBON POSITIVE SINCE 2024</span>
              <span>MADE IN BOZEMAN + LISBON</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
