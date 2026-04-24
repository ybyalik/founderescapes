'use client';

import { useEffect, useState } from 'react';
import { FIN } from './fin';
import Photo, { Tone } from './Photo';

type Dest = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  season: string;
  tone: Tone;
};

const DESTS: Dest[] = [
  { id: 'patagonia', name: 'Patagonia', lat: -49, lon: -73, season: 'Nov — Mar', tone: 'peak' },
  { id: 'atlas', name: 'High Atlas', lat: 31, lon: -7, season: 'Apr — Oct', tone: 'dune' },
  { id: 'faroe', name: 'Faroe Is.', lat: 62, lon: -7, season: 'Jun — Aug', tone: 'grove' },
  { id: 'namibia', name: 'Namibia', lat: -22, lon: 17, season: 'May — Oct', tone: 'clay' },
  { id: 'bhutan', name: 'Bhutan', lat: 27, lon: 90, season: 'Oct — Apr', tone: 'palm' },
  { id: 'hokkaido', name: 'Hokkaido', lat: 43, lon: 142, season: 'Jan — Mar', tone: 'wave' },
];

const R = 220;
const CX = 260;
const CY = 260;

export default function DestinationsGlobe() {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setRotation((r) => (r + 0.25) % 360), 40);
    return () => clearInterval(id);
  }, []);

  const project = (lat: number, lon: number) => {
    const la = (lat * Math.PI) / 180;
    const lo = ((lon + rotation) * Math.PI) / 180;
    const x = Math.cos(la) * Math.sin(lo);
    const y = -Math.sin(la);
    const z = Math.cos(la) * Math.cos(lo);
    return { x: CX + x * R, y: CY + y * R, z, visible: z > -0.1 };
  };

  type GridLine = { pts: string; lat: number; meridian?: boolean };
  const gridLines: GridLine[] = [];
  for (let lat = -60; lat <= 60; lat += 30) {
    const pts: string[] = [];
    for (let lon = -180; lon <= 180; lon += 10) {
      const p = project(lat, lon);
      if (p.visible) pts.push(`${p.x},${p.y}`);
      else if (pts.length) {
        gridLines.push({ pts: pts.join(' '), lat });
        pts.length = 0;
      }
    }
    if (pts.length) gridLines.push({ pts: pts.join(' '), lat });
  }
  for (let lon = -180; lon < 180; lon += 30) {
    const pts: string[] = [];
    for (let lat = -90; lat <= 90; lat += 5) {
      const p = project(lat, lon);
      if (p.visible) pts.push(`${p.x},${p.y}`);
      else if (pts.length) {
        gridLines.push({ pts: pts.join(' '), lat: lon, meridian: true });
        pts.length = 0;
      }
    }
    if (pts.length) gridLines.push({ pts: pts.join(' '), lat: lon, meridian: true });
  }

  const equatorPts: string[] = [];
  for (let lon = -180; lon <= 180; lon += 5) {
    const p = project(0, lon);
    if (p.visible) equatorPts.push(`${p.x},${p.y}`);
  }

  const hoveredDest = DESTS.find((d) => d.id === hovered);

  return (
    <div style={{ position: 'relative', width: '100%', height: 540, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="520" height="520" viewBox="0 0 520 520" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="globeSphere" cx="35%" cy="30%">
            <stop offset="0%" stopColor={FIN.paper} stopOpacity="1" />
            <stop offset="55%" stopColor={FIN.ochre} stopOpacity="0.9" />
            <stop offset="100%" stopColor={FIN.ochreD} stopOpacity="1" />
          </radialGradient>
          <radialGradient id="globeAtm" cx="50%" cy="50%">
            <stop offset="85%" stopColor={FIN.ochre} stopOpacity="0" />
            <stop offset="95%" stopColor={FIN.ochre} stopOpacity="0.35" />
            <stop offset="100%" stopColor={FIN.ochre} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r={R + 30} fill="url(#globeAtm)" />
        <circle cx={CX} cy={CY} r={R} fill="url(#globeSphere)" />

        {gridLines.map((l, i) => (
          <polyline key={i} points={l.pts} fill="none" stroke={FIN.ink} strokeWidth="0.6" opacity="0.18" />
        ))}

        <polyline points={equatorPts.join(' ')} fill="none" stroke={FIN.ink} strokeWidth="1" opacity="0.35" strokeDasharray="3 4" />

        {DESTS.map((d, i) => {
          const next = DESTS[(i + 1) % DESTS.length];
          const p1 = project(d.lat, d.lon);
          const p2 = project(next.lat, next.lon);
          if (!p1.visible && !p2.visible) return null;
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2 - 40;
          return (
            <path
              key={i}
              d={`M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`}
              fill="none"
              stroke={FIN.teal}
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity={p1.visible && p2.visible ? 0.5 : 0.2}
            />
          );
        })}

        {DESTS.map((d) => {
          const p = project(d.lat, d.lon);
          if (!p.visible) return null;
          const size = 6 + (p.z + 0.1) * 4;
          const isHover = hovered === d.id;
          return (
            <g key={d.id} style={{ cursor: 'pointer' }} onMouseEnter={() => setHovered(d.id)} onMouseLeave={() => setHovered(null)}>
              <circle cx={p.x} cy={p.y} r={size + 4} fill="none" stroke={FIN.teal} strokeWidth="1.5" opacity={0.6} style={{ animation: 'feGlobePulse 2s ease-out infinite' }} />
              <circle cx={p.x} cy={p.y} r={size} fill={FIN.teal} stroke={FIN.paper} strokeWidth="2" />
              {isHover && (
                <g>
                  <line x1={p.x} y1={p.y} x2={p.x} y2={p.y - 40} stroke={FIN.ink} strokeWidth="1" />
                  <rect x={p.x - 4} y={p.y - 48} width="8" height="8" fill={FIN.ochre} stroke={FIN.ink} strokeWidth="1" />
                </g>
              )}
            </g>
          );
        })}

        {DESTS.map((d) => {
          const p = project(d.lat, d.lon);
          if (!p.visible) return null;
          const isHover = hovered === d.id;
          return (
            <foreignObject key={`l-${d.id}`} x={p.x + 12} y={p.y - 10} width="120" height="24" style={{ overflow: 'visible', pointerEvents: 'none' }}>
              <div
                style={{
                  fontFamily: FIN.serif,
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: FIN.ink,
                  fontWeight: 500,
                  opacity: isHover ? 1 : 0.75,
                  textShadow: `0 1px 0 ${FIN.paper}`,
                  transition: 'opacity 0.2s',
                }}
              >
                {d.name}
              </div>
            </foreignObject>
          );
        })}
      </svg>

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
            animation: 'feFadeIn 0.3s',
          }}
        >
          <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 6, overflow: 'hidden', marginBottom: 10 }}>
            <Photo tone={hoveredDest.tone} h="100%" />
          </div>
          <div style={{ fontFamily: FIN.sans, fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', color: FIN.ink }}>{hoveredDest.name}</div>
          <div style={{ fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: FIN.stone, marginTop: 4 }}>{hoveredDest.season}</div>
        </div>
      )}

      <style>{`
        @keyframes feGlobePulse {
          0% { r: 8; opacity: 0.7; }
          100% { r: 22; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
