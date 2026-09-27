'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { banners, Banner } from './hero-data';
import HeroSlide from './HeroSlide';
import HeroTransitionOverlay from './HeroTransitionOverlay';
import HeroPagination from './HeroPagination';
import NavigationArrows from './NavigationArrows';

const AUTOPLAY_DELAY = 5000;
const DARKEN_DURATION = 450; // ms — screen fades to black
const REVEAL_DURATION = 650; // ms — black fades away, revealing new slide
const SWIPE_THRESHOLD = 50; // px

type Phase = 'idle' | 'darkening' | 'revealing';

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');

  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const clearPhaseTimeout = useCallback(() => {
    if (phaseTimeoutRef.current) {
      clearTimeout(phaseTimeoutRef.current);
      phaseTimeoutRef.current = null;
    }
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      if (index === current || phase !== 'idle') return;

      clearAutoplay();
      setPhase('darkening');

      phaseTimeoutRef.current = setTimeout(() => {
        setCurrent(index);
        setPhase('revealing');

        phaseTimeoutRef.current = setTimeout(() => {
          setPhase('idle');
        }, REVEAL_DURATION);
      }, DARKEN_DURATION);
    },
    [current, phase, clearAutoplay],
  );

  const goToNext = useCallback(() => {
    goToIndex((current + 1) % banners.length);
  }, [current, goToIndex]);

  const goToPrevious = useCallback(() => {
    goToIndex((current - 1 + banners.length) % banners.length);
  }, [current, goToIndex]);

  // Autoplay 
  useEffect(() => {
    if (phase !== 'idle' || banners.length <= 1) return;

    autoplayRef.current = setTimeout(goToNext, AUTOPLAY_DELAY);
    return clearAutoplay;
  }, [current, phase, goToNext, clearAutoplay]);

  useEffect(() => {
    return () => {
      clearAutoplay();
      clearPhaseTimeout();
    };
  }, [clearAutoplay, clearPhaseTimeout]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta < 0 ? goToNext() : goToPrevious();
    }
    touchStartX.current = null;
  };

  const activeBanner: Banner = banners[current];
  const slideNumber = String(current + 1).padStart(2, '0');
  const totalSlides = String(banners.length).padStart(2, '0');

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      aria-label="Featured products"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <HeroSlide banner={activeBanner} isRevealing={phase === 'revealing'} />

      <HeroTransitionOverlay phase={phase} />

      <NavigationArrows handleNext={goToNext} handlePrevious={goToPrevious} />

      <HeroPagination
        total={banners.length}
        current={current}
        isPaused={phase !== 'idle'}
        autoplayDelay={AUTOPLAY_DELAY}
        onSelect={goToIndex}
      />

      <span className="sr-only">
        Slide {slideNumber} of {totalSlides}
      </span>
    </section>
  );
};

export default Hero;