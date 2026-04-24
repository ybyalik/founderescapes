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
        <HeroLabel n="01" total={TOTAL} name="Text-clipped Video" blurb="Mountain video plays inside the negative space of GO WILDER" />
        <V1Cinematic />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="02" total={TOTAL} name="Liquid Distortion" blurb="SVG turbulence + displacement warps the video like flowing water" dark />
        <V2Split />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="03" total={TOTAL} name="Magnetic 3D Tilt" blurb="Headline tilts to your cursor with custom dot cursor + lime spotlight" dark />
        <V3Parallax />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="04" total={TOTAL} name="Aurora Particles" blurb="Canvas particle field — flowing lime + teal currents under starlight" dark />
        <V4WordReveal />
      </div>

      <div style={{ position: 'relative' }}>
        <HeroLabel n="05" total={TOTAL} name="Cinematic Crop Reveal" blurb="On mount: video fills the screen, then collapses to a strip while content emerges" />
        <V5MarqueeTiles />
      </div>
    </>
  );
}
