'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
import { Banner } from './hero-data';

interface HeroSlideProps {
  banner: Banner;
  /** True while the overlay is fading away — used to re-trigger the text entrance timing. */
  isRevealing: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const HeroSlide: React.FC<HeroSlideProps> = ({ banner, isRevealing }) => {
  return (
    <div className="absolute inset-0 h-full w-full">
      {/* Background image — slow continuous zoom (Ken Burns) while it's on screen */}
      <motion.div
        key={banner.id}
        className="absolute inset-0 h-full w-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 8, ease: 'linear' }}
      >
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          priority
          sizes="100vw"
          draggable={false}
          className="object-cover object-[60%_center]"
        />
      </motion.div>

      {/* Gradient for text legibility */}
      <div className="absolute inset-0 bg-linear-to-t from-overlay-heavy via-overlay-light/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="max-w-3xl px-6 pb-24 md:px-12 md:pb-28 lg:px-20 lg:pb-32">
          <motion.div
            key={`eyebrow-${banner.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: isRevealing ? 0.25 : 0.3, ease: EASE }}
            className="mb-4 flex items-center gap-3 md:mb-5"
          >
            <span className="h-px w-8 bg-text-inverse/70 md:w-12" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-text-inverse md:text-sm">
              {banner.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            key={`title-${banner.id}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: isRevealing ? 0.35 : 0.45, ease: EASE }}
            className="mb-7 text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-text-inverse sm:text-5xl md:mb-9 md:text-6xl lg:text-7xl"
          >
            {banner.title}
          </motion.h1>

          <motion.div
            key={`cta-${banner.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: isRevealing ? 0.5 : 0.6, ease: EASE }}
          >
            <Link
              href={banner.link}
              className="group isolate relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-text-inverse/80 py-2 pl-6 pr-2 transition-colors duration-300 hover:border-text-inverse md:py-2.5 md:pl-7 md:pr-2.5"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-inverse transition-colors duration-300 md:text-sm">
                Shop Now
              </span>
              <span className="flex h-8 w-8 -rotate-45 items-center justify-center rounded-full bg-text-inverse text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-0 md:h-9 md:w-9">
                <IoArrowForward className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 -z-10 rounded-full bg-text-inverse/0 transition-colors duration-300 group-hover:bg-text-inverse/20" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;