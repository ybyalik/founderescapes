export default function HeroVideo() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0b1a24' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=60"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-drone-shot-of-a-mountain-peak-4068/1080p.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/video/2023/05/04/161944-823362474_large.mp4" type="video/mp4" />
      </video>

      <svg style={{ position: 'absolute', inset: '-10%', width: '120%', height: '120%', opacity: 0.12, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 2 }}>
        <filter id="fe-grain-f">
          <feTurbulence baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#fe-grain-f)" />
      </svg>

      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 55%, transparent 35%, rgba(0,0,0,0.55) 100%)', pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,26,36,0.35) 0%, transparent 30%, rgba(11,26,36,0.75) 100%)', pointerEvents: 'none', zIndex: 3 }} />
    </div>
  );
}
