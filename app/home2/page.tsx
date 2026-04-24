'use client';

import { useEffect, useState } from 'react';
import { FIN } from './_components/fin';
import HeroVideo from './_components/HeroVideo';
import Photo from './_components/Photo';
import DestinationsMap from './_components/DestinationsMap';
import DestinationsGlobe from './_components/DestinationsGlobe';
import FlipTestimonials from './_components/FlipTestimonials';
import PostcardsHome from './_components/PostcardsHome';
import BillingRow, { Trip } from './_components/BillingRow';
import CalRow, { CalRowData } from './_components/CalRow';
import FAQ from './_components/FAQ';

const CYC = ['Patagonia.', 'Hokkaido.', 'Bhutan.', 'Namibia.', 'Faroe.'];

const TRIPS: Trip[] = [
  { n: '01', name: 'Patagonia', sub: 'Torres del Paine', when: 'Nov 08 · 26', fee: '$11,400', diff: '4/5', tone: 'peak', hype: 'Glaciers · W-Trek' },
  { n: '02', name: 'Hokkaido', sub: 'Niseko Powder Week', when: 'Feb 14 · 27', fee: '$13,200', diff: '3/5', tone: 'wave', hype: 'Ski + onsen' },
  { n: '03', name: 'High Atlas', sub: 'Berber Ridgeline', when: 'Mar 22 · 27', fee: '$9,800', diff: '3/5', tone: 'clay', hype: 'Mules & altitude' },
  { n: '04', name: 'Namibia', sub: 'Skeleton Coast', when: 'Jun 05 · 27', fee: '$14,600', diff: '4/5', tone: 'dune', hype: 'Overland + camps' },
];

const CAL: CalRowData[] = [
  { d: 'Nov 08 — 16, 2026', p: 'Patagonia', r: 'Torres del Paine', days: 8, fee: '$11,400', s: 'Departing' },
  { d: 'Feb 14 — 21, 2027', p: 'Hokkaido', r: 'Niseko Powder Week', days: 7, fee: '$13,200', s: '2 seats' },
  { d: 'Mar 22 — 28, 2027', p: 'High Atlas', r: 'Berber Ridgeline', days: 7, fee: '$9,800', s: '5 seats' },
  { d: 'Jun 05 — 13, 2027', p: 'Namibia', r: 'Skeleton Coast', days: 9, fee: '$14,600', s: '7 seats' },
  { d: 'Sep 10 — 16, 2027', p: 'Faroe Islands', r: 'Open-water Sail', days: 7, fee: '$12,400', s: 'Waitlist' },
  { d: 'Oct 14 — 21, 2027', p: 'Bhutan', r: 'Druk Path', days: 8, fee: '$15,800', s: 'Waitlist' },
];

const FAQS = [
  { q: 'How fit do I need to be?', a: "Aerobically competent. If you can comfortably hike for four hours with a day pack, you're ready for most of our trips. Each trip is graded 1 – 5 and we send a 6-week prep plan after you're accepted." },
  { q: 'Can I actually go offline?', a: 'Yes — every camp has Starlink we turn on for an hour each evening. Most founders stop checking after day three.' },
  { q: "What's included in the price?", a: 'Everything on the ground: lodging, meals, guides, permits, gear, transfers, and evacuation insurance. International flights are separate. No tipping games.' },
  { q: 'Can my co-founder come?', a: "Encouraged. Apply together and we'll keep you paired. The second seat is 10% off." },
  { q: "What's the cancellation policy?", a: '100% refund up to 90 days out. 50% refund 45 – 90 days. Credit inside 45 days. Medical exceptions always honored.' },
  { q: 'Is this a retreat or a vacation?', a: "Neither. It's an expedition with nine other founders. There's no programming — the conversations happen because of where we are." },
];

const COHORT = [
  { top: 0, left: 40, rot: -4, tone: 'peak' as const, name: 'Maya C.', co: 'Lattice Bio' },
  { top: 100, left: 220, rot: 3, tone: 'clay' as const, name: 'Theo O.', co: 'Kestrel' },
  { top: 40, left: 420, rot: -2, tone: 'palm' as const, name: 'Paula R.', co: 'Driftwave' },
  { top: 260, left: 0, rot: 2, tone: 'wave' as const, name: 'Jun Y.', co: 'Strata' },
  { top: 300, left: 180, rot: -3, tone: 'grove' as const, name: 'Ana B.', co: 'Heron' },
  { top: 260, left: 380, rot: 5, tone: 'dune' as const, name: 'Kwame T.', co: 'Orbital' },
];

const PEEK = [
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=70', rot: -6, w: 200 },
  { img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=600&q=70', rot: 4, w: 220 },
  { img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=600&q=70', rot: -2, w: 210 },
  { img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=600&q=70', rot: 6, w: 200 },
  { img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=70', rot: -4, w: 215 },
  { img: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&w=600&q=70', rot: 3, w: 205 },
];

export default function Home2() {
  const [cycIdx, setCycIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCycIdx((i) => (i + 1) % CYC.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: FIN.bg, color: FIN.ink, fontFamily: FIN.sans }}>
      {/* NAV */}
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: '24px 44px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: FIN.paper,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            <circle cx="14" cy="14" r="12" fill={FIN.teal} />
            <path d="M14 6 L20 18 L8 18 Z" fill={FIN.ochre} />
          </svg>
          <div style={{ fontFamily: FIN.sans, fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em' }}>Founder Escapes</div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 500, alignItems: 'center' }}>
          {['Trips', 'How it works', 'Calendar', 'Journal'].map((i) => (
            <a key={i} href={`#${i.toLowerCase().replace(/ /g, '')}`} style={{ color: 'inherit', opacity: 0.9 }}>
              {i}
            </a>
          ))}
          <a
            href="#apply"
            style={{
              background: FIN.ochre,
              color: FIN.ink,
              padding: '11px 22px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Apply →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', height: 960, overflow: 'hidden', color: FIN.paper }}>
        <HeroVideo />
        <div style={{ position: 'absolute', inset: 0, padding: '0 44px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 100, zIndex: 10 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(253,251,245,0.12)',
              backdropFilter: 'blur(10px)',
              padding: '8px 16px',
              borderRadius: 999,
              marginBottom: 36,
              fontSize: 13,
              fontWeight: 500,
              border: '1px solid rgba(253,251,245,0.2)',
              width: 'fit-content',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: FIN.ochre }} />
            Applications open for 2026 · 27
          </div>

          <h1 style={{ fontFamily: FIN.sans, fontSize: 148, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.92, margin: 0, maxWidth: 1200, textShadow: '0 4px 40px rgba(0,0,0,0.4)' }}>
            Go somewhere <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.sand }}>wild</span>
            <br />
            with ten other founders,
            <br />
            in{' '}
            <span style={{ position: 'relative', display: 'inline-block', minWidth: 520 }}>
              <span
                key={cycIdx}
                style={{
                  fontFamily: FIN.serif,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: FIN.ochre,
                  display: 'inline-block',
                  animation: 'fe-cyc 2.6s ease',
                }}
              >
                {CYC[cycIdx]}
              </span>
            </span>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end', marginTop: 44 }}>
            <p style={{ fontFamily: FIN.serif, fontSize: 22, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.4, margin: 0, maxWidth: 540, color: 'rgba(253,251,245,0.9)' }}>
              Six small-group expeditions a year. Every detail taken care of. The people you meet are the reason you&apos;ll come back.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#apply" style={{ background: FIN.ochre, color: FIN.ink, padding: '18px 30px', borderRadius: 999, fontSize: 15, fontWeight: 600, boxShadow: '0 10px 28px rgba(216,138,54,0.35)' }}>
                Request an invitation
              </a>
              <a href="#trips" style={{ color: FIN.paper, padding: '18px 26px', fontSize: 15, fontWeight: 500, border: '1px solid rgba(253,251,245,0.35)', borderRadius: 999 }}>
                See the trips
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 28,
            right: 44,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            opacity: 0.7,
            fontFamily: FIN.mono,
            fontSize: 10,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: FIN.paper,
          }}
        >
          <div style={{ width: 1, height: 40, background: FIN.paper, animation: 'fe-scroll 2.2s ease-in-out infinite' }} />
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: FIN.teal, color: FIN.paper, padding: '22px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', animation: 'fe-marq 40s linear infinite', whiteSpace: 'nowrap', gap: 44 }}>
          {[...Array(3)].flatMap((_, x) =>
            ['Patagonia ✴ Chile', 'Hokkaido ✴ Japan', 'High Atlas ✴ Morocco', 'Namibia ✴ Skeleton Coast', 'Faroe Islands ✴ Denmark', 'Bhutan ✴ Himalaya', 'Baja ✴ Mexico'].map((p) => (
              <span key={`${x}-${p}`} style={{ fontFamily: FIN.serif, fontSize: 32, fontStyle: 'italic', fontWeight: 400 }}>
                {p}
              </span>
            ))
          )}
        </div>
      </div>

      {/* MANIFESTO */}
      <section style={{ padding: '140px 44px 120px', background: FIN.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.22em' }}>✴ Our manifesto</div>
            <h2 style={{ fontFamily: FIN.sans, fontSize: 88, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.96, margin: 0, textTransform: 'uppercase' }}>
              Built by
              <br />
              <span style={{ color: FIN.teal }}>founders,</span> for
              <br />
              the <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre, textTransform: 'none' }}>restless</span> ones.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 40 }}>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: FIN.stone, margin: 0 }}>
                We&apos;re a small crew of operators, storytellers, and guides who believe the best conversations happen a long way from a laptop. Every trip is built around the idea that a week in the wild with nine other founders can change the arc of a year.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: FIN.stone, margin: 0 }}>
                We pick the places carefully — glaciers, deserts, reefs, ridgelines — and we pick the people even more carefully. You show up. We handle the rest. What you leave with is not a vacation; it&apos;s a chapter you&apos;ll still be telling in a decade.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 44, alignItems: 'center' }}>
              <a href="#trips" style={{ background: FIN.ochre, color: FIN.ink, padding: '16px 28px', borderRadius: 6, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}>
                Explore our journey →
              </a>
              <div style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontSize: 16, color: FIN.stone }}>— Est. 2024, Boulder CO</div>
            </div>
          </div>
          <div style={{ position: 'relative', height: 540 }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 20, overflow: 'hidden', boxShadow: '0 30px 60px rgba(20,19,16,0.18)' }}>
              <Photo tone="peak" h="100%" />
              <svg style={{ position: 'absolute', top: 0, right: 0, width: '70%', height: '70%', opacity: 0.35, pointerEvents: 'none', mixBlendMode: 'screen' }} viewBox="0 0 400 400">
                <defs>
                  <radialGradient id="intro-sun" cx="85%" cy="15%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="340" cy="60" r="180" fill="url(#intro-sun)" />
                {[...Array(12)].map((_, i) => {
                  const a = ((i * 30 + 180) * Math.PI) / 180;
                  return <line key={i} x1="340" y1="60" x2={340 + Math.cos(a) * 380} y2={60 + Math.sin(a) * 380} stroke="#fff" strokeWidth="1" opacity="0.3" />;
                })}
              </svg>
            </div>
            <div style={{ position: 'absolute', bottom: -24, left: -24, background: FIN.paper, padding: '20px 26px', borderRadius: 14, boxShadow: '0 16px 36px rgba(20,19,16,0.14)', border: `1px solid ${FIN.rule}` }}>
              <div style={{ fontFamily: FIN.sans, fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: FIN.ink }}>
                412 <span style={{ color: FIN.ochre }}>founders</span>
              </div>
              <div style={{ fontSize: 12, color: FIN.stone, marginTop: 6, letterSpacing: '0.04em' }}>across 6 continents · 28 expeditions · since 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE STEPS */}
      <section id="howitworks" style={{ padding: '140px 44px', background: FIN.bg2 }}>
        <div style={{ marginBottom: 72 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>✴ How it works</div>
          <h2 style={{ fontFamily: FIN.sans, fontSize: 84, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.95, margin: 0 }}>
            Three steps, then <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.teal }}>pack your boots</span>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { n: '01', t: 'Apply', b: 'Ten minutes. Tell us what you are working on, where you want to go, and what you hope to come back with.', tone: 'sun' as const },
            { n: '02', t: 'Meet your cohort', b: 'We hand-pick 8 – 12 founders per trip. We introduce you on a call a month out so you land already knowing names.', tone: 'field' as const },
            { n: '03', t: 'Go', b: 'We handle the rest — everything on the ground is covered. Guides, lodges, chefs, evac. You show up with a daypack.', tone: 'palm' as const },
          ].map((s) => (
            <div
              key={s.n}
              style={{
                background: FIN.paper,
                borderRadius: 20,
                padding: 24,
                border: `1px solid ${FIN.rule}`,
                display: 'grid',
                gridTemplateColumns: '1fr 140px',
                gap: 20,
                alignItems: 'stretch',
                minHeight: 260,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: FIN.sans, fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: FIN.ink, marginBottom: 'auto' }}>{s.n}</div>
                <div style={{ marginTop: 20 }}>
                  <h3 style={{ fontFamily: FIN.sans, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.15, margin: '0 0 10px' }}>{s.t}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: FIN.stone, margin: 0 }}>{s.b}</p>
                </div>
              </div>
              <div style={{ borderRadius: 14, overflow: 'hidden' }}>
                <Photo tone={s.tone} h="100%" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER 01 — COHORT */}
      <section style={{ padding: '120px 44px', background: FIN.bg2, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>── Chapter 01 · The cohort</div>
            <h2 style={{ fontFamily: FIN.sans, fontSize: 124, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 0.88, margin: 0 }}>
              A cohort
              <br />
              of <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.teal }}>ten</span>.
            </h2>
            <p style={{ fontFamily: FIN.serif, fontSize: 22, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.45, margin: '28px 0 0', maxWidth: 500, color: FIN.ink }}>
              Each trip is eight to twelve founders. We read every application. No influencers, no coaches, no lurkers — operators in the middle of something real.
            </p>
            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              {[['8—12', 'Per cohort'], ['3:1', 'Acceptance ratio'], ['96%', 'Return for another']].map(([n, l]) => (
                <div key={l} style={{ background: FIN.paper, borderRadius: 16, padding: 18, border: `1px solid ${FIN.rule}` }}>
                  <div style={{ fontFamily: FIN.sans, fontSize: 38, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: FIN.stone, marginTop: 6, letterSpacing: '0.05em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: 560 }}>
            {COHORT.map((p, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: p.top,
                  left: p.left,
                  width: 200,
                  height: 240,
                  background: FIN.paper,
                  padding: 10,
                  paddingBottom: 36,
                  borderRadius: 12,
                  border: `1px solid ${FIN.rule}`,
                  boxShadow: '0 12px 28px rgba(20,19,16,0.12)',
                  transform: `rotate(${p.rot}deg)`,
                }}
              >
                <div style={{ height: 170, borderRadius: 8, overflow: 'hidden' }}>
                  <Photo tone={p.tone} />
                </div>
                <div style={{ fontFamily: FIN.sans, fontSize: 14, fontWeight: 600, marginTop: 10, textAlign: 'center' }}>{p.name}</div>
                <div style={{ fontFamily: FIN.mono, fontSize: 9, letterSpacing: '0.18em', color: FIN.stone, textTransform: 'uppercase', textAlign: 'center', marginTop: 2 }}>{p.co}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 02 — FOUR FEATURE TRIPS */}
      <section id="trips" style={{ padding: '120px 44px', background: FIN.tealD, color: FIN.paper }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: FIN.sand, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>── Chapter 02 · The billing</div>
          <h2 style={{ fontFamily: FIN.sans, fontSize: 124, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 0.88, margin: 0 }}>
            Four feature
            <br />
            <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre }}>expeditions</span>.
          </h2>
        </div>
        <div>
          {TRIPS.map((t, i) => (
            <BillingRow key={t.n} t={t} i={i} />
          ))}
        </div>
      </section>

      {/* DESTINATIONS — MAP */}
      <section style={{ padding: '140px 44px 80px', background: FIN.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>── Six continents</div>
            <h2 style={{ fontFamily: FIN.sans, fontSize: 88, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, margin: 0, textTransform: 'uppercase' }}>
              Unforgettable
              <br />
              <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, textTransform: 'none', color: FIN.teal }}>destinations</span>.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: FIN.stone, margin: '28px 0 0', maxWidth: 380 }}>
              Six handpicked corners of the world, chosen for the places — and the conversations — you cannot have anywhere else. Tap a pin.
            </p>
            <a href="#trips" style={{ display: 'inline-block', marginTop: 32, background: FIN.ochre, color: FIN.ink, padding: '14px 28px', borderRadius: 999, fontSize: 14, fontWeight: 600, letterSpacing: '0.05em' }}>
              View all destinations →
            </a>
          </div>
          <DestinationsMap />
        </div>
      </section>

      {/* DESTINATIONS — GLOBE */}
      <section style={{ padding: '80px 44px 140px', background: FIN.bg2, position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 60, alignItems: 'center' }}>
          <DestinationsGlobe />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>── Or spin the world</div>
            <h2 style={{ fontFamily: FIN.sans, fontSize: 88, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, margin: 0, textTransform: 'uppercase' }}>
              Go <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, textTransform: 'none', color: FIN.ochre }}>anywhere</span>
              <br />
              you haven&apos;t.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: FIN.stone, margin: '28px 0 0', maxWidth: 420 }}>
              Rotating quietly since 2024. Hover a marker to meet the expedition — each one a week with eight founders, handpicked guides, and no wifi that matters.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 32, fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: FIN.stone }}>
              <div>
                <span style={{ display: 'block', fontFamily: FIN.sans, fontSize: 40, fontWeight: 700, color: FIN.ink, letterSpacing: '-0.02em', textTransform: 'none' }}>6</span>
                Continents
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: FIN.sans, fontSize: 40, fontWeight: 700, color: FIN.ink, letterSpacing: '-0.02em', textTransform: 'none' }}>28</span>
                Trips
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: FIN.sans, fontSize: 40, fontWeight: 700, color: FIN.ink, letterSpacing: '-0.02em', textTransform: 'none' }}>412</span>
                Founders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03 — REVIEWS */}
      <section style={{ padding: '140px 44px 120px', background: FIN.bg, position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', marginBottom: 60, gap: 40 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>── Chapter 03 · The reviews</div>
            <h2 style={{ fontFamily: FIN.sans, fontSize: 108, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 0.88, margin: 0 }}>
              What founders <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.teal }}>tell us</span>.
            </h2>
          </div>
          <div style={{ fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: FIN.stone, paddingBottom: 8 }}>↻ Tap a postcard to flip</div>
        </div>
        <FlipTestimonials />
      </section>

      {/* POSTCARDS */}
      <PostcardsHome />

      {/* PARTNERS STRIP */}
      <section style={{ padding: '36px 44px', background: FIN.ochre, color: FIN.ink }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ fontFamily: FIN.sans, fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>As featured in →</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {['Condé Nast Traveler', 'Monocle', 'Afar', 'The Information', 'Outside', 'Bloomberg'].map((p) => (
              <div
                key={p}
                style={{
                  fontFamily: FIN.serif,
                  fontSize: 20,
                  fontWeight: 500,
                  fontStyle: p === 'Afar' || p === 'Monocle' ? 'italic' : 'normal',
                  color: FIN.ink,
                  opacity: 0.85,
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 04 — SCHEDULE */}
      <section id="calendar" style={{ padding: '140px 44px', background: FIN.bg }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>── Chapter 04 · Showtimes</div>
          <h2 style={{ fontFamily: FIN.sans, fontSize: 96, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.92, margin: 0 }}>
            Upcoming <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.teal }}>departures</span>.
          </h2>
        </div>
        <div style={{ background: FIN.paper, borderRadius: 20, overflow: 'hidden', border: `1px solid ${FIN.rule}` }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1.3fr 1fr 110px 130px 150px',
              background: FIN.ink,
              color: FIN.paper,
              fontFamily: FIN.mono,
              fontSize: 10,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            {['Dates', 'Trip', 'Route', 'Duration', 'All-in', 'Status'].map((h, i) => (
              <div key={h} style={{ padding: '16px 22px', borderRight: i < 5 ? '1px solid rgba(253,251,245,0.15)' : 'none' }}>
                {h}
              </div>
            ))}
          </div>
          {CAL.map((row, i, arr) => (
            <CalRow key={i} row={row} last={i === arr.length - 1} />
          ))}
        </div>
      </section>

      {/* CHAPTER 05 — FAQ */}
      <section style={{ padding: '140px 44px', background: FIN.bg2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.4fr', gap: 80 }}>
          <div style={{ position: 'sticky', top: 60, alignSelf: 'start' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: FIN.ochreD, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.18em' }}>── Chapter 05 · Questions</div>
            <h2 style={{ fontFamily: FIN.sans, fontSize: 80, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.92, margin: 0 }}>
              FAQs, not <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.teal }}>FOMO</span>.
            </h2>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <FAQ key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FOOTER — matches homepage: peeking polaroids above + dark green block */}
      <section id="apply" style={{ position: 'relative', marginTop: 80, paddingTop: 120, overflow: 'visible' }}>
        {/* Peeking photo strip — sits above the green block, half-overlapping */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            justifyContent: 'center',
            gap: 14,
            padding: '0 40px',
            marginBottom: -90,
            pointerEvents: 'none',
          }}
        >
          {PEEK.map((p, i) => (
            <div
              key={i}
              style={{
                width: p.w,
                height: 260,
                borderRadius: 14,
                overflow: 'hidden',
                transform: `rotate(${p.rot}deg)`,
                backgroundImage: `url(${p.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.12)',
                border: '5px solid #fafaf7',
              }}
            />
          ))}
        </div>

        {/* Dark green block with atmospheric bg */}
        <div style={{ position: 'relative', background: '#1e3a2a', color: '#fafaf7', padding: '180px 40px 56px', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=2000&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.18,
              mixBlendMode: 'luminosity',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 40%, transparent 30%, rgba(0,0,0,0.35) 100%)',
            }}
          />

          <div style={{ position: 'relative', textAlign: 'center', maxWidth: 1200, margin: '0 auto', zIndex: 2 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.22em', color: FIN.ochre }}>✴ Applications are open</div>
            <h2 style={{ fontFamily: FIN.sans, fontSize: 108, fontWeight: 600, letterSpacing: '-0.04em', margin: 0, lineHeight: 0.92, color: '#fafaf7' }}>
              Come <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre }}>get lost</span> with us.
            </h2>
            <p style={{ fontFamily: FIN.serif, fontSize: 22, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.4, margin: '32px auto 36px', maxWidth: 620, color: 'rgba(250,250,247,0.85)' }}>
              Ten minutes to apply. We read every submission and reply inside a week — with a yes, a no, or a different trip that might suit you better.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="/apply" style={{ background: FIN.ochre, color: '#0a0a0a', padding: '18px 32px', borderRadius: 999, fontSize: 15, fontWeight: 600 }}>
                Request an invitation →
              </a>
              <a href="#" style={{ background: 'transparent', color: '#fafaf7', padding: '18px 32px', fontSize: 15, fontWeight: 600, border: '1.5px solid rgba(250,250,247,0.6)', borderRadius: 999 }}>
                Gift a seat to a friend
              </a>
            </div>
            <div style={{ marginTop: 28, fontSize: 13, fontWeight: 500, color: 'rgba(250,250,247,0.6)' }}>8 – 12 founders per trip · No fake urgency</div>

            <div
              style={{
                marginTop: 64,
                paddingTop: 40,
                borderTop: '1.5px solid rgba(255,255,255,0.18)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 40,
                alignItems: 'center',
                textAlign: 'left',
                maxWidth: 960,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <div>
                <div style={{ fontFamily: FIN.mono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10, color: FIN.ochre }}>✴ Field Notes — monthly</div>
                <div style={{ fontFamily: FIN.sans, fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#fafaf7' }}>
                  Not ready? Get <span style={{ fontFamily: FIN.serif, fontStyle: 'italic', fontWeight: 400, color: FIN.ochre }}>one good email</span> a month.
                </div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: 'flex', alignItems: 'center', background: '#fafaf7', borderRadius: 999, padding: 6 }}
              >
                <input placeholder="your@email" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '14px 20px', fontSize: 15, color: '#0a0a0a' }} />
                <button style={{ background: '#0a0a0a', color: '#fafaf7', border: 'none', padding: '14px 26px', borderRadius: 999, cursor: 'pointer', fontSize: 14, fontWeight: 600 }}>Subscribe</button>
              </form>
            </div>

            <div
              style={{
                marginTop: 48,
                paddingTop: 22,
                borderTop: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: 11,
                fontFamily: FIN.mono,
                letterSpacing: '0.1em',
                color: 'rgba(250,250,247,0.55)',
                maxWidth: 1200,
                marginLeft: 'auto',
                marginRight: 'auto',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 28 28">
                  <circle cx="14" cy="14" r="12" fill={FIN.ochre} />
                  <path d="M14 6 L20 18 L8 18 Z" fill="#1e3a2a" />
                </svg>
                <span>© 2026 FOUNDER ESCAPES · BOULDER, CO</span>
              </div>
              <span>1% FOR THE PLANET · CARBON NEUTRAL · HELLO@FOUNDERESCAPES.COM</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fe-cyc {
          0% { opacity: 0; transform: translateY(16px); }
          14% { opacity: 1; transform: translateY(0); }
          86% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-8px); }
        }
        @keyframes fe-scroll {
          0%, 100% { opacity: 0.2; transform: scaleY(0.4); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes fe-marq {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
