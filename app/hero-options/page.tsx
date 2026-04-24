'use client';

import HeroLabel, { PageNav } from './_components/HeroLabel';
import V1Cinematic from './_components/V1Cinematic';
import V2Split from './_components/V2Split';
import V3Parallax from './_components/V3Parallax';
import V4WordReveal from './_components/V4WordReveal';
import V5MarqueeTiles from './_components/V5MarqueeTiles';

const TOTAL = '05';

export default function HeroOptions() {
  return (
    <>
      <PageNav />

      <div style={{ position: 'relative' }}>
        <HeroLabel n="01" total={TOTAL} name="Cinematic Bleed" blurb="Full-bleed video, italic accent, big bottom-anchored type" dark />
        <V1Cinematic />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="02" total={TOTAL} name="Split Panel" blurb="Video panel left, content right, with chips and microstats" />
        <V2Split />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="03" total={TOTAL} name="Parallax Mountains" blurb="No video — layered SVG mountains drift on cursor move" />
        <V3Parallax />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="04" total={TOTAL} name="Word Reveal" blurb="Minimal — words fade in over a darkened video" dark />
        <V4WordReveal />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="05" total={TOTAL} name="Marquee + Tiles" blurb="Editorial: giant scrolling type + 3 looping video tiles" />
        <V5MarqueeTiles />
      </div>
    </>
  );
}
