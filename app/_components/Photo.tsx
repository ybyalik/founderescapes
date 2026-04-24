import { FIN } from './fin';

export type Tone = 'sun' | 'sea' | 'field' | 'peak' | 'palm' | 'clay' | 'wave' | 'grove' | 'dune' | 'camp';

const TONES: Record<Tone, string> = {
  sun: 'linear-gradient(180deg, #f4c48a 0%, #c47848 45%, #5a2a18 100%)',
  sea: 'linear-gradient(180deg, #7cbcc0 0%, #2e6e74 50%, #0e2828 100%)',
  field: 'linear-gradient(180deg, #c4b46a 0%, #6a6a24 55%, #1c1a08 100%)',
  peak: 'linear-gradient(180deg, #a8b8c8 0%, #4a5a74 55%, #1a2434 100%)',
  palm: 'linear-gradient(180deg, #7cb890 0%, #2a6438 55%, #081c10 100%)',
  clay: 'linear-gradient(180deg, #d8a078 0%, #8a4a28 55%, #281208 100%)',
  wave: 'linear-gradient(180deg, #80a8c0 0%, #2a5a7a 55%, #0c1e30 100%)',
  grove: 'linear-gradient(180deg, #9ab47a 0%, #3a5a2a 55%, #0e1c0a 100%)',
  dune: 'linear-gradient(180deg, #e4ba80 0%, #a87438 55%, #301c0a 100%)',
  camp: 'radial-gradient(ellipse at 40% 65%, #e89548 0%, #8a3820 45%, #1c0f08 100%)',
};

export default function Photo({
  tone = 'sun',
  h = '100%',
  label,
  children,
}: {
  tone?: Tone;
  h?: string | number;
  label?: string;
  children?: React.ReactNode;
}) {
  const filterId = `fp-${tone}`;
  return (
    <div style={{ position: 'relative', width: '100%', height: h, overflow: 'hidden', background: TONES[tone] || TONES.sun }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', mixBlendMode: 'overlay', opacity: 0.3, pointerEvents: 'none' }}>
        <filter id={filterId}>
          <feTurbulence baseFrequency="0.85" numOctaves={2} />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 55%, transparent 30%, rgba(0,0,0,0.4) 100%)', pointerEvents: 'none' }} />
      {label && (
        <div style={{ position: 'absolute', bottom: 12, left: 14, fontFamily: FIN.mono, fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}>
          — {label}
        </div>
      )}
      {children}
    </div>
  );
}
