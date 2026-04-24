'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { ACCENT, FG, MUTED } from './theme';

const DESTINATIONS = [
  { id: 'patagonia', name: 'Patagonia', country: 'Chile', x: 30, y: 78, lat: -50, lng: -73, img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80', sub: 'Torres del Paine · Mar' },
  { id: 'faroe', name: 'Faroe Islands', country: 'Denmark', x: 46, y: 26, lat: 62, lng: -7, img: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=600&q=80', sub: 'Stórá Dímun · Jun' },
  { id: 'hokkaido', name: 'Hokkaido', country: 'Japan', x: 82, y: 34, lat: 43, lng: 142, img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80', sub: 'Backcountry · Feb' },
  { id: 'oman', name: 'Empty Quarter', country: 'Oman', x: 59, y: 46, lat: 19, lng: 56, img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', sub: 'Desert · Nov' },
  { id: 'atacama', name: 'Atacama', country: 'Chile', x: 30, y: 66, lat: -24, lng: -69, img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&q=80', sub: 'High desert · Apr' },
  { id: 'dolomites', name: 'Dolomites', country: 'Italy', x: 50, y: 34, lat: 46, lng: 12, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', sub: 'Via ferrata · Sep' },
  { id: 'mongolia', name: 'Gobi-Altai', country: 'Mongolia', x: 74, y: 33, lat: 45, lng: 94, img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80', sub: 'Nomad camp · Aug' },
];

const LAND_COLOR = '#e8e3d2';
const PANEL_BG = '#f5f2e8';

export function DestinationsMap() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % DESTINATIONS.length), 2800);
    return () => clearInterval(id);
  }, [paused]);

  const d = DESTINATIONS[active];

  return (
    <section style={{ padding: '100px 40px', background: PANEL_BG, color: FG, position: 'relative', overflow: 'hidden' }}>
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, marginBottom: 40, alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ WHERE WE GO</div>
            <h2 style={{ fontSize: 68, fontWeight: 700, margin: '12px 0 0', letterSpacing: '-0.035em', lineHeight: 0.98 }}>
              Seven places.<br />
              <span style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 500 }}>
                Six continents.
              </span>
            </h2>
          </div>
          <div style={{ maxWidth: 420, fontSize: 15, color: MUTED, lineHeight: 1.55, paddingBottom: 14 }}>
            Every expedition starts with a map. Hover any pin to pause the tour and see what we do there.
          </div>
        </div>
      </Reveal>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ position: 'relative', aspectRatio: '2 / 1', maxWidth: 1200, margin: '0 auto' }}
      >
        <svg viewBox="0 0 1000 500" style={{ width: '100%', height: '100%', display: 'block' }}>
          <defs>
            <pattern id="ob-dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.2" fill={LAND_COLOR} />
            </pattern>
          </defs>
          <g fill="url(#ob-dots)">
            <path d="M80 80 Q 150 60 220 90 L 280 140 L 260 200 L 220 230 L 170 220 L 120 200 Q 70 160 80 80 Z" />
            <path d="M240 260 L 290 250 L 310 310 L 300 400 L 280 440 L 260 420 L 250 360 Z" />
            <path d="M470 110 L 540 105 L 560 140 L 540 170 L 500 175 L 470 160 Z" />
            <path d="M490 200 L 570 195 L 600 260 L 580 340 L 540 380 L 510 340 L 490 280 Z" />
            <path d="M560 100 L 700 90 L 820 120 L 860 180 L 820 220 L 720 230 L 640 210 L 580 180 Z" />
            <path d="M780 330 L 860 325 L 880 370 L 850 400 L 800 395 L 780 365 Z" />
            <path d="M380 70 L 430 65 L 445 100 L 420 125 L 385 115 Z" />
            <path d="M860 190 L 880 195 L 885 220 L 865 225 Z" />
          </g>
        </svg>

        {DESTINATIONS.map((dest, i) => {
          const isActive = i === active;
          return (
            <button
              key={dest.id}
              className="ob-pin"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              style={{
                position: 'absolute',
                left: `${dest.x}%`,
                top: `${dest.y}%`,
                transform: 'translate(-50%, -50%)',
                width: 36,
                height: 36,
                border: 'none',
                background: 'transparent',
                padding: 0,
                zIndex: isActive ? 5 : 2,
              }}
              aria-label={dest.name}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                {isActive && (
                  <circle className="ob-pin-ring" cx="18" cy="18" r="10" fill="none" stroke={ACCENT} strokeWidth="2" />
                )}
                <circle cx="18" cy="18" r="8" fill={isActive ? ACCENT : FG} stroke={PANEL_BG} strokeWidth="2.5" />
                {isActive && <circle cx="18" cy="18" r="3" fill={FG} />}
              </svg>
            </button>
          );
        })}

        <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
          <line
            key={d.id + '-line'}
            x1={`${d.x}%`}
            y1={`${d.y}%`}
            x2="50%"
            y2="50%"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: 'obLineDraw .6s ease-out' }}
            strokeLinecap="round"
          />
        </svg>

        <div
          key={d.id}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 280,
            background: '#fff',
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.06)',
            animation: 'obCardIn .45s cubic-bezier(.2,.7,.3,1)',
          }}
        >
          <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                background: ACCENT,
                color: '#0a0a0a',
                padding: '4px 10px',
                borderRadius: 3,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              {d.country.toUpperCase()}
            </div>
          </div>
          <div style={{ padding: '16px 18px' }}>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>{d.name}</div>
            <div style={{ fontSize: 12, color: MUTED, marginTop: 4, fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', letterSpacing: '0.05em' }}>
              {d.lat >= 0 ? 'N' : 'S'} {Math.abs(d.lat)}° · {d.lng >= 0 ? 'E' : 'W'} {Math.abs(d.lng)}° · {d.sub}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
        {DESTINATIONS.map((dest, i) => (
          <button
            key={dest.id}
            onClick={() => setActive(i)}
            style={{
              padding: '8px 14px',
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 500,
              border: `1px solid ${i === active ? FG : '#e5e3da'}`,
              background: i === active ? FG : 'transparent',
              color: i === active ? PANEL_BG : FG,
              cursor: 'pointer',
              transition: 'all .2s',
              letterSpacing: '-0.01em',
            }}
          >
            {dest.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export function DestinationsGlobe() {
  const [rotation, setRotation] = useState(0);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused) setRotation((r) => (r + dt * 0.012) % 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % DESTINATIONS.length), 3400);
    return () => clearInterval(id);
  }, [paused]);

  const project = (lat: number, lng: number) => {
    const lambda = ((lng - rotation) * Math.PI) / 180;
    const phi = (lat * Math.PI) / 180;
    const x = Math.cos(phi) * Math.sin(lambda);
    const y = -Math.sin(phi);
    const z = Math.cos(phi) * Math.cos(lambda);
    return { x, y, z, visible: z > 0 };
  };

  const R = 220;
  const d = DESTINATIONS[active];

  const grid: Array<{ type: 'lat' | 'lng'; lat?: number; lng?: number }> = [];
  for (let lat = -60; lat <= 60; lat += 30) grid.push({ type: 'lat', lat });
  for (let lng = 0; lng < 360; lng += 30) grid.push({ type: 'lng', lng });

  return (
    <section style={{ padding: '100px 40px', background: PANEL_BG, color: FG, position: 'relative', overflow: 'hidden' }}>
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, marginBottom: 40, alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ WHERE WE GO</div>
            <h2 style={{ fontSize: 68, fontWeight: 700, margin: '12px 0 0', letterSpacing: '-0.035em', lineHeight: 0.98 }}>
              A rotating<br />
              <span style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 500 }}>
                atlas of trips
              </span>
              .
            </h2>
          </div>
          <div style={{ maxWidth: 420, fontSize: 15, color: MUTED, lineHeight: 1.55, paddingBottom: 14 }}>
            Seven places we come back to. Hover the globe to stop the rotation and pick one.
          </div>
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative', width: R * 2 + 60, height: R * 2 + 60, margin: '0 auto' }}
        >
          <svg viewBox={`${-R - 30} ${-R - 30} ${R * 2 + 60} ${R * 2 + 60}`} style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <radialGradient id="ob-globe-grad" cx="0.35" cy="0.3" r="0.9">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="70%" stopColor="#ece7d7" />
                <stop offset="100%" stopColor="#d6cfbb" />
              </radialGradient>
              <radialGradient id="ob-globe-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="80%" stopColor={ACCENT} stopOpacity="0" />
                <stop offset="100%" stopColor={ACCENT} stopOpacity="0.25" />
              </radialGradient>
              <clipPath id="ob-globe-clip">
                <circle cx="0" cy="0" r={R} />
              </clipPath>
            </defs>
            <circle cx="0" cy="0" r={R + 18} fill="url(#ob-globe-glow)" />
            <circle cx="0" cy="0" r={R} fill="url(#ob-globe-grad)" stroke="rgba(0,0,0,0.1)" />

            <g clipPath="url(#ob-globe-clip)">
              {grid.map((g, i) => {
                if (g.type === 'lat') {
                  const r = Math.cos((g.lat! * Math.PI) / 180) * R;
                  const y = -Math.sin((g.lat! * Math.PI) / 180) * R;
                  return <ellipse key={'lat' + i} cx="0" cy={y} rx={r} ry={r * 0.08} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />;
                } else {
                  const lambda = ((g.lng! - rotation) * Math.PI) / 180;
                  const rx = Math.abs(Math.sin(lambda)) * R;
                  if (rx < 0.5) return null;
                  const opacity = Math.abs(Math.sin(lambda));
                  return <ellipse key={'lng' + i} cx="0" cy="0" rx={rx} ry={R} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" opacity={opacity * 0.8} />;
                }
              })}

              {DESTINATIONS.map((dest, i) => {
                const p = project(dest.lat, dest.lng);
                const isActive = i === active;
                if (!p.visible) return null;
                const px = p.x * R;
                const py = p.y * R;
                const scale = 0.55 + p.z * 0.45;
                return (
                  <g
                    key={dest.id}
                    transform={`translate(${px}, ${py}) scale(${scale})`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    {isActive && (
                      <circle cx="0" cy="0" r="10" fill="none" stroke={ACCENT} strokeWidth="2">
                        <animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle cx="0" cy="0" r="5" fill={isActive ? ACCENT : FG} stroke={PANEL_BG} strokeWidth="1.5" />
                  </g>
                );
              })}
            </g>

            <ellipse cx={-R * 0.35} cy={-R * 0.45} rx={R * 0.35} ry={R * 0.22} fill="rgba(255,255,255,0.15)" />
          </svg>

          <div
            style={{
              position: 'absolute',
              bottom: -4,
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
              fontSize: 11,
              letterSpacing: '0.14em',
              color: MUTED,
              whiteSpace: 'nowrap',
            }}
          >
            LON {rotation.toFixed(1).padStart(5, '0')}° · ROTATING
          </div>
        </div>

        <div>
          <div
            style={{
              padding: 28,
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 14,
              minHeight: 360,
            }}
          >
            <div style={{ height: 220, borderRadius: 10, overflow: 'hidden', marginBottom: 20, position: 'relative' }}>
              <div
                key={d.id}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${d.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  animation: 'kinZoom 14s ease-in-out infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: ACCENT,
                  color: '#0a0a0a',
                  padding: '4px 10px',
                  borderRadius: 3,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                {d.country.toUpperCase()}
              </div>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>{d.name}</div>
            <div style={{ fontSize: 12, color: MUTED, marginTop: 6, fontFamily: 'var(--font-mono), "JetBrains Mono", monospace', letterSpacing: '0.08em' }}>
              {d.lat >= 0 ? 'N' : 'S'} {Math.abs(d.lat)}° · {d.lng >= 0 ? 'E' : 'W'} {Math.abs(d.lng)}°
            </div>
            <div style={{ fontSize: 14, color: MUTED, marginTop: 14, lineHeight: 1.55 }}>{d.sub}</div>
            <a
              href="/trips/patagonia"
              style={{
                display: 'inline-block',
                marginTop: 22,
                background: FG,
                color: PANEL_BG,
                padding: '12px 22px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              See this trip →
            </a>
          </div>
          <div style={{ display: 'flex', gap: 4, marginTop: 16, flexWrap: 'wrap' }}>
            {DESTINATIONS.map((dest, i) => (
              <button
                key={dest.id}
                onClick={() => setActive(i)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 100,
                  fontSize: 11,
                  fontWeight: 500,
                  border: `1px solid ${i === active ? FG : '#e5e3da'}`,
                  background: i === active ? FG : 'transparent',
                  color: i === active ? PANEL_BG : FG,
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                {dest.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Destinations() {
  return (
    <Fragment>
      <DestinationsMap />
      <DestinationsGlobe />
    </Fragment>
  );
}
