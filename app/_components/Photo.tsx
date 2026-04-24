import { FIN } from './fin';

export type Tone = 'sun' | 'sea' | 'field' | 'peak' | 'palm' | 'clay' | 'wave' | 'grove' | 'dune' | 'camp';

// Each tone maps to a real Unsplash photo. Used as a placeholder image
// system so cards/polaroids/testimonials show real wilderness shots
// instead of gradient blocks.
const TONE_URLS: Record<Tone, string> = {
  sun:   'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=70',
  sea:   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=70',
  field: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=70',
  peak:  'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=70',
  palm:  'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=900&q=70',
  clay:  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=70',
  wave:  'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=900&q=70',
  grove: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=70',
  dune:  'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=70',
  camp:  'https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&w=900&q=70',
};

// Fallback gradients (kept so something shows while the remote image loads).
const TONE_FALLBACK: Record<Tone, string> = {
  sun:   'linear-gradient(180deg, #f4c48a 0%, #c47848 45%, #5a2a18 100%)',
  sea:   'linear-gradient(180deg, #7cbcc0 0%, #2e6e74 50%, #0e2828 100%)',
  field: 'linear-gradient(180deg, #c4b46a 0%, #6a6a24 55%, #1c1a08 100%)',
  peak:  'linear-gradient(180deg, #a8b8c8 0%, #4a5a74 55%, #1a2434 100%)',
  palm:  'linear-gradient(180deg, #7cb890 0%, #2a6438 55%, #081c10 100%)',
  clay:  'linear-gradient(180deg, #d8a078 0%, #8a4a28 55%, #281208 100%)',
  wave:  'linear-gradient(180deg, #80a8c0 0%, #2a5a7a 55%, #0c1e30 100%)',
  grove: 'linear-gradient(180deg, #9ab47a 0%, #3a5a2a 55%, #0e1c0a 100%)',
  dune:  'linear-gradient(180deg, #e4ba80 0%, #a87438 55%, #301c0a 100%)',
  camp:  'radial-gradient(ellipse at 40% 65%, #e89548 0%, #8a3820 45%, #1c0f08 100%)',
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
  const url = TONE_URLS[tone] || TONE_URLS.sun;
  const fallback = TONE_FALLBACK[tone] || TONE_FALLBACK.sun;
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: h,
        overflow: 'hidden',
        background: fallback,
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 55%, transparent 40%, rgba(0,0,0,0.32) 100%)',
          pointerEvents: 'none',
        }}
      />
      {label && (
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 14,
            fontFamily: FIN.mono,
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.92)',
            textTransform: 'uppercase',
            textShadow: '0 1px 2px rgba(0,0,0,0.55)',
          }}
        >
          — {label}
        </div>
      )}
      {children}
    </div>
  );
}
