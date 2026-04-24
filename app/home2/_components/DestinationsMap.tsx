'use client';

import { useState } from 'react';
import { FIN } from './fin';
import Photo, { Tone } from './Photo';

type Pin = {
  id: string;
  name: string;
  country: string;
  x: number;
  y: number;
  tone: Tone;
  season: string;
  flag: [string, string, string];
};

const PINS: Pin[] = [
  { id: 'patagonia', name: 'Patagonia', country: 'Chile', x: 31, y: 82, tone: 'peak', season: 'Nov — Mar', flag: ['#0033A0', '#fff', '#DA291C'] },
  { id: 'atlas', name: 'High Atlas', country: 'Morocco', x: 49, y: 48, tone: 'dune', season: 'Apr — Oct', flag: ['#C1272D', '#fff', '#006233'] },
  { id: 'faroe', name: 'Faroe', country: 'Faroe Is.', x: 47, y: 22, tone: 'grove', season: 'Jun — Aug', flag: ['#fff', '#003897', '#D72828'] },
  { id: 'namibia', name: 'Namibia', country: 'Namibia', x: 55, y: 72, tone: 'clay', season: 'May — Oct', flag: ['#003580', '#D21034', '#009A44'] },
  { id: 'bhutan', name: 'Bhutan', country: 'Bhutan', x: 72, y: 46, tone: 'palm', season: 'Oct — Apr', flag: ['#FFCC33', '#FF4E12', '#fff'] },
  { id: 'hokkaido', name: 'Hokkaido', country: 'Japan', x: 82, y: 40, tone: 'wave', season: 'Jan — Mar', flag: ['#fff', '#BC002D', '#fff'] },
];

export default function DestinationsMap() {
  const [active, setActive] = useState(0);
  const cur = PINS[active];

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/8', background: FIN.bg2, overflow: 'hidden' }}>
      <svg viewBox="0 0 1600 800" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill={FIN.stone} opacity="0.35" />
          </pattern>
          <mask id="continents">
            <path d="M 80 180 Q 120 120 240 140 Q 360 130 420 200 Q 440 300 380 380 Q 320 420 260 400 Q 160 380 100 300 Z" fill="#fff" />
            <path d="M 360 440 Q 420 440 460 520 Q 470 640 420 720 Q 360 760 340 700 Q 300 600 320 500 Z" fill="#fff" />
            <path d="M 720 200 Q 820 180 880 220 Q 900 280 860 320 Q 800 340 740 320 Q 700 280 700 240 Z" fill="#fff" />
            <path d="M 760 340 Q 880 340 940 400 Q 960 520 920 620 Q 860 680 820 640 Q 760 560 740 460 Z" fill="#fff" />
            <path d="M 900 180 Q 1100 140 1280 200 Q 1380 260 1360 360 Q 1280 420 1180 400 Q 1020 380 940 320 Q 900 260 900 220 Z" fill="#fff" />
            <path d="M 1240 420 Q 1340 420 1380 460 Q 1380 500 1320 500 Q 1260 490 1240 460 Z" fill="#fff" />
            <path d="M 1300 560 Q 1420 560 1480 620 Q 1480 680 1400 680 Q 1320 680 1280 640 Q 1280 580 1300 560 Z" fill="#fff" />
          </mask>
        </defs>
        <rect width="1600" height="800" fill="url(#dots)" mask="url(#continents)" />

        {PINS.map((p, i) => {
          const next = PINS[(i + 1) % PINS.length];
          const x1 = (p.x / 100) * 1600;
          const y1 = (p.y / 100) * 800;
          const x2 = (next.x / 100) * 1600;
          const y2 = (next.y / 100) * 800;
          const mx = (x1 + x2) / 2;
          const my = Math.min(y1, y2) - 60;
          const lit = active === i || active === (i + 1) % PINS.length;
          return (
            <path
              key={i}
              d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
              stroke={FIN.ochre}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 6"
              opacity={lit ? 0.6 : 0.15}
              style={{ transition: 'opacity 0.4s' }}
            />
          );
        })}
      </svg>

      {PINS.map((p, i) => (
        <button
          key={p.id}
          onClick={() => setActive(i)}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: 'translate(-50%, -100%)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            zIndex: active === i ? 3 : 2,
          }}
        >
          {active === i && (
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(100% - 8px)',
                transform: 'translate(-50%, -50%)',
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: `2px solid ${FIN.ochre}`,
                animation: 'fePulse 1.8s ease-out infinite',
              }}
            />
          )}
          <svg
            width={active === i ? 52 : 40}
            height={active === i ? 64 : 50}
            viewBox="0 0 40 50"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(20,19,16,0.25))', transition: 'all 0.3s' }}
          >
            <path
              d="M 20 2 C 10 2 4 10 4 20 C 4 32 20 48 20 48 C 20 48 36 32 36 20 C 36 10 30 2 20 2 Z"
              fill={FIN.ochre}
              stroke={FIN.ink}
              strokeWidth="1.5"
            />
            <circle cx="20" cy="18" r="10" fill={FIN.paper} />
            <clipPath id={`cp-${p.id}`}>
              <circle cx="20" cy="18" r="8" />
            </clipPath>
            <g clipPath={`url(#cp-${p.id})`}>
              <rect x="12" y="10" width="16" height={16 / 3} fill={p.flag[0]} />
              <rect x="12" y={10 + 16 / 3} width="16" height={16 / 3} fill={p.flag[1]} />
              <rect x="12" y={10 + (2 * 16) / 3} width="16" height={16 / 3} fill={p.flag[2]} />
            </g>
          </svg>
        </button>
      ))}

      <div
        key={cur.id}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: FIN.paper,
          padding: 12,
          boxShadow: '0 30px 60px rgba(20,19,16,0.25), 0 8px 16px rgba(20,19,16,0.12)',
          borderRadius: 10,
          width: 280,
          animation: 'feFadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 4,
        }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 6, overflow: 'hidden' }}>
          <Photo tone={cur.tone} h="100%" />
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: 0,
              background: FIN.ochre,
              color: FIN.ink,
              padding: '6px 16px 6px 12px',
              fontFamily: FIN.serif,
              fontStyle: 'italic',
              fontSize: 18,
              fontWeight: 500,
              clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%)',
            }}
          >
            {cur.name}
          </div>
          <a
            href="#trips"
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: FIN.paper,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: FIN.ink,
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            ↗
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 6px 4px', fontSize: 11, color: FIN.stone, letterSpacing: '0.06em' }}>
          <span style={{ fontFamily: FIN.mono, textTransform: 'uppercase' }}>{cur.country}</span>
          <span style={{ fontFamily: FIN.mono, textTransform: 'uppercase' }}>{cur.season}</span>
        </div>
      </div>

      <style>{`
        @keyframes fePulse {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
        }
        @keyframes feFadeIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
