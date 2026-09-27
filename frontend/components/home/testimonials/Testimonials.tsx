'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa6';
import SectionsHeader from '@/components/SectionsHeader';
import TestimonialCard, { type Testimonial } from './TestimonialCard';

const AUTO_PLAY_INTERVAL_MS = 5000;
const FADE_DURATION_MS = 200;

const testimonials: Testimonial[] = [
  { id: 'emma-m', name: 'Emma M.', rating: 5, quote: 'The quality is even better than I expected.', verified: true },
  { id: 'sara-k', name: 'Sara.', rating: 5, quote: 'Fits perfectly, and the fabric still feels new after months of wear.', verified: true },
  { id: 'ali-r', name: 'David.', rating: 4, quote: 'Simple, clean pieces — exactly what I look for in everyday basics.', verified: true },
  { id: 'zara-h', name: 'Zara ', rating: 5, quote: 'Ordered twice already. Sizing runs true and shipping was fast.', verified: true },
  { id: 'omar-f', name: 'Omar F.', rating: 5, quote: 'Finally a basics brand that does not fall apart after a few washes.', verified: true },
  { id: 'noor-s', name: 'Noor S.', rating: 4, quote: 'Clean design, no logos, exactly what my wardrobe needed.', verified: true },
];

/** Tracks how many cards should render per page, */
const useCardsPerView = () => {
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const mdQuery = window.matchMedia('(min-width: 640px)');
    const lgQuery = window.matchMedia('(min-width: 1024px)');

    const update = () => {
      if (lgQuery.matches) setCardsPerView(3);
      else if (mdQuery.matches) setCardsPerView(2);
      else setCardsPerView(1);
    };

    update();
    mdQuery.addEventListener('change', update);
    lgQuery.addEventListener('change', update);
    return () => {
      mdQuery.removeEventListener('change', update);
      lgQuery.removeEventListener('change', update);
    };
  }, []);

  return cardsPerView;
};

const chunk = <T,>(items: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
};

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
    
const Testimonials = () => {
  const cardsPerView = useCardsPerView();
  const pages = useMemo(() => chunk(testimonials, cardsPerView), [cardsPerView]);

  const [activePage, setActivePage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);


  // changes too — clamp the active page so it never points past the new array.
  useEffect(() => {
    setActivePage((prev) => Math.min(prev, pages.length - 1));
  }, [pages.length]);

  const goTo = useCallback((index: number) => {
    setIsVisible(false);
    window.setTimeout(() => {
      setActivePage(index);
      setIsVisible(true);
    }, FADE_DURATION_MS);
  }, []);

  const goToNext = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(() => {
      setActivePage((prev) => (prev + 1) % pages.length);
      setIsVisible(true);
    }, FADE_DURATION_MS);
  }, [pages.length]);

  const goToPrev = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(() => {
      setActivePage((prev) => (prev - 1 + pages.length) % pages.length);
      setIsVisible(true);
    }, FADE_DURATION_MS);
  }, [pages.length]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) setUserPaused(true);
  }, []);

  useEffect(() => {
    if (isPaused || userPaused || pages.length <= 1) return;
    const id = window.setInterval(goToNext, AUTO_PLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, userPaused, pages.length, goToNext]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrev();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goToPrev() : goToNext();
    }
    touchStartX.current = null;
  };

  const currentCards = pages[activePage] ?? [];

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <SectionsHeader
        tag="What Our Customers Say"
        title="Loved by the AVENRO community."
      />

      <div
        className="mx-auto mt-10 flex max-w-6xl flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
      >
        <div
          aria-live="polite"
          className={`grid w-full grid-cols-1 gap-6 transition-opacity ease-in-out sm:grid-cols-2 lg:grid-cols-3 ${
            isVisible ? 'opacity-100 duration-300' : 'opacity-0 duration-200'
          }`}
        >
          {currentCards.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {pages.length > 1 && (
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={goToPrev}
              className="rounded-full p-1.5 text-text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FaChevronLeft className="h-3 w-3" />
            </button>

            <div role="tablist" aria-label="Select testimonial page" className="flex items-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  type="button"
                  aria-selected={index === activePage}
                  aria-label={`Show testimonials page ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activePage ? 'w-6 bg-accent' : 'w-2 bg-border hover:bg-border/80'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonials"
              onClick={goToNext}
              className="rounded-full p-1.5 text-text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FaChevronRight className="h-3 w-3" />
            </button>

            <button
              type="button"
              aria-label={userPaused ? 'Resume autoplay' : 'Pause autoplay'}
              onClick={() => setUserPaused((prev) => !prev)}
              className="ml-1 rounded-full p-1.5 text-text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {userPaused ? <FaPlay className="h-3 w-3" /> : <FaPause className="h-3 w-3" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;