'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const ESSENTIALS_HREF = '/collections/essentials' as const;


declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js' | 'set',
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
  }
}


const Essentials = () => {
  const handleShopClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'select_promotion', {
        promotion_name: 'essential_collection',
        creative_slot: 'homepage_essentials_banner',
      });
    }
  };

  return (
    <section
      aria-labelledby="essentials-heading"
      className="w-full mt-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="group relative min-h-120 w-full overflow-hidden rounded-2xl bg-neutral-900  sm:rounded-xl aspect-1080/1350 md:aspect-video lg:aspect-21/9">

        {/* Background Image */}
        <Image
          src="/essentials/essential-collection.jpg"
          alt="Model wearing pieces from the AVENRO Essential Collection"
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
          className="object-cover object-center transition-transform duration-1200 ease-out motion-safe:group-hover:scale-105"
        />

        {/* Gradient Overlay — guarantees text contrast regardless of image */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent sm:bg-linear-to-r sm:from-black/80 sm:via-black/25 sm:to-transparent" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-end p-6 sm:items-center sm:p-10 lg:p-16">
          <div className="max-w-md text-text-inverse">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-inverse/80">
              Essential Collection
            </p>

            <h2
              id="essentials-heading"
              className="mt-3 text-2xl font-bold leading-tight tracking-tight text-text-inverse sm:text-4xl lg:text-5xl"
            >
              Everyday, elevated.
            </h2>

            <p className="mt-3 max-w-sm text-xs leading-relaxed tracking-wide text-text-inverse/65 sm:text-sm md:text-base">
              Considered basics, built to outlast the season.
            </p>

            <Link
              href={ESSENTIALS_HREF}
              onClick={handleShopClick}
              aria-label="Shop the Essential Collection"
              className="group/cta relative mt-7 inline-flex w-fit flex-col items-start gap-2 pb-2 text-xs font-medium uppercase tracking-[0.2em] outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
            >
              <span className="inline-flex items-center gap-2">
                Shop Essentials
                <FaArrowRightLong
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-in-out group-hover/cta:translate-x-1.5"
                />
              </span>
              <span className="absolute bottom-0 left-0 h-px w-full origin-left lg:scale-x-[0.4]  bg-text-inverse/70 transition-transform duration-300 ease-in-out group-hover/cta:scale-x-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essentials;