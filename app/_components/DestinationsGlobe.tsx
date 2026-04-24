'use client';

import { useEffect, useMemo, useState } from 'react';
import { geoOrthographic, geoPath, geoGraticule10 } from 'd3-geo';
import { feature } from 'topojson-client';
import worldRaw from 'world-atlas/countries-110m.json';
import { FIN } from './fin';
import Photo, { Tone } from './Photo';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WORLD = worldRaw as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const COUNTRIES: any[] = (feature(WORLD, WORLD.objects.countries) as any).features;
const GRATICULE = geoGraticule10();

type Dest = { id: string; name: string; lat: number; lon: number; season: string; tone: Tone };

const DESTS: Dest[] = [
  { id: 'patagonia', name: 'Patagonia', lat: -49, lon: -73, season: 'Nov — Mar', tone: 'peak' },
  { id: 'atlas', name: 'High Atlas', lat: 31, lon: -7, season: 'Apr — Oct', tone: 'dune' },
  { id: 'faroe', name: 'Faroe Is.', lat: 62, lon: -7, season: 'Jun — Aug', tone: 'grove' },
  { id: 'namibia', name: 'Namibia', lat: -22, lon: 17, season: 'May — Oct', tone: 'clay' },
  { id: 'bhutan', name: 'Bhutan', lat: 27, lon: 90, season: 'Oct — Apr', tone: 'palm' },
  { id: 'hokkaido', name: 'Hokkaido', lat: 43, lon: 142, season: 'Jan — Mar', tone: 'wave' },
];

const SIZE = 540;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 230;
const TILT = -18; // tilt north up

// Visibility check using orthographic dot-product (point in front of sphere)
function isVisible(lon: number, lat: number, rotation: number): boolean {
  const la = (lat * Math.PI) / 180;
  const lo = ((lon + rotation) * Math.PI) / 180;
  const tilt = (TILT * Math.PI) / 180;
  // After rotating by lambda then by phi (tilt), the z component is:
  const z = Math.cos(la) * Math.cos(lo) * Math.cos(tilt) - Math.sin(la) * Math.sin(tilt);
  return z > 0.05;
}

export default function DestinationsGlobe() {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setRotation((r) => (r + 0.18) % 360), 30);
    return () => clearInterval(id);
  }, [paused]);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .scale(R)
        .translate([CX, CY])
        .rotate([rotation, TILT])
        .clipAngle(90),
    [rotation]
  );

  const pathGen = useMemo(() => geoPath(projection), [projection]);

  const graticulePath = useMemo(() => pathGen(GRATICULE) || '', [pathGen]);
  const countryPaths = useMemo(
    () => COUNTRIES.map((c) => ({ id: c.id, d: pathGen(c) || '' })),
    [pathGen]
  );

  const hoveredDest = DESTS.find((d) => d.id === hovered);

  return (
    <div className="fe-globe-wrap" style={{ position: 'relative', width: '100%', height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ overflow: 'visible', maxWidth: '100%', height: 'auto' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <defs>
          {/* Ocean — soft cream/blue gradient with shaded hemisphere */}
          <radialGradient id="g-ocean" cx="32%" cy="28%">
            <stop offset="0%" stopColor="#f5f1e6" stopOpacity="1" />
            <stop offset="55%" stopColor="#d8e0e2" stopOpacity="1" />
            <stop offset="100%" stopColor="#7e8e95" stopOpacity="1" />
          </radialGradient>
          {/* Atmosphere lime halo */}
          <radialGradient id="g-atm" cx="50%" cy="50%">
            <stop offset="78%" stopColor={FIN.ochre} stopOpacity="0" />
            <stop offset="92%" stopColor={FIN.ochre} stopOpacity="0.35" />
            <stop offset="100%" stopColor={FIN.ochre} stopOpacity="0" />
          </radialGradient>
          {/* Hemisphere shadow */}
          <radialGradient id="g-shade" cx="65%" cy="70%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="60%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(10,28,18,0.45)" />
          </radialGradient>
          <clipPath id="g-clip">
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
        </defs>

        {/* Atmosphere halo */}
        <circle cx={CX} cy={CY} r={R + 24} fill="url(#g-atm)" />

        {/* Ocean sphere */}
        <circle cx={CX} cy={CY} r={R} fill="url(#g-ocean)" />

        <g clipPath="url(#g-clip)">
          {/* Graticule (lat/lng grid) */}
          <path d={graticulePath} fill="none" stroke="rgba(20,40,30,0.18)" strokeWidth={0.5} />

          {/* Countries — dark green land masses */}
          {countryPaths.map((c) => (
            <path
              key={c.id}
              d={c.d}
              fill={FIN.teal}
              stroke="#0e2618"
              strokeWidth={0.45}
              strokeLinejoin="round"
            />
          ))}

          {/* Destination markers */}
          {DESTS.map((d) => {
            if (!isVisible(d.lon, d.lat, rotation)) return null;
            const p = projection([d.lon, d.lat]);
            if (!p) return null;
            const isHover = hovered === d.id;
            return (
              <g
                key={d.id}
                onMouseEnter={() => setHovered(d.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Pulse ring */}
                <circle cx={p[0]} cy={p[1]} r={6} fill="none" stroke={FIN.ochre} strokeWidth={1.5} opacity={0.7}>
                  <animate attributeName="r" values="6;18;6" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
                </circle>
                {/* Dot */}
                <circle cx={p[0]} cy={p[1]} r={isHover ? 7 : 5} fill={FIN.ochre} stroke="#fff" strokeWidth={2} />
                {/* Hover stem + flag */}
                {isHover && (
                  <g>
                    <line x1={p[0]} y1={p[1]} x2={p[0]} y2={p[1] - 36} stroke={FIN.ink} strokeWidth={1.2} />
                    <rect x={p[0] - 4} y={p[1] - 44} width={8} height={8} fill={FIN.ochre} stroke={FIN.ink} strokeWidth={1.2} />
                  </g>
                )}
              </g>
            );
          })}

          {/* Shadow on the trailing hemisphere */}
          <circle cx={CX} cy={CY} r={R} fill="url(#g-shade)" pointerEvents="none" />
        </g>

        {/* Visible-side destination labels */}
        {DESTS.map((d) => {
          if (!isVisible(d.lon, d.lat, rotation)) return null;
          const p = projection([d.lon, d.lat]);
          if (!p) return null;
          const isHover = hovered === d.id;
          return (
            <foreignObject
              key={`l-${d.id}`}
              x={p[0] + 12}
              y={p[1] - 12}
              width={130}
              height={26}
              style={{ overflow: 'visible', pointerEvents: 'none' }}
            >
              <div
                style={{
                  fontFamily: FIN.serif,
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: FIN.ink,
                  fontWeight: 500,
                  opacity: isHover ? 1 : 0.78,
                  textShadow: '0 1px 0 rgba(255,255,255,0.7)',
                  transition: 'opacity 0.2s',
                }}
              >
                {d.name}
              </div>
            </foreignObject>
          );
        })}
      </svg>

      {/* Hover info card */}
      {hoveredDest && (
        <div
          style={{
            position: 'absolute',
            top: 30,
            right: 30,
            width: 240,
            background: FIN.paper,
            padding: 10,
            borderRadius: 10,
            boxShadow: '0 20px 44px rgba(20,19,16,0.22)',
            pointerEvents: 'none',
            zIndex: 5,
            animation: 'gFadeIn 0.3s',
          }}
        >
          <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 6, overflow: 'hidden', marginBottom: 10 }}>
            <Photo tone={hoveredDest.tone} h="100%" />
          </div>
          <div style={{ fontFamily: FIN.sans, fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', color: FIN.ink }}>{hoveredDest.name}</div>
          <div style={{ fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: FIN.stone, marginTop: 4 }}>{hoveredDest.season}</div>
        </div>
      )}

      {/* Rotation HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: 4,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: FIN.mono,
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: FIN.stone,
          whiteSpace: 'nowrap',
        }}
      >
        LON {rotation.toFixed(1).padStart(5, '0')}° {paused ? '· PAUSED' : '· ROTATING'}
      </div>

      <style>{`
        @keyframes gFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
