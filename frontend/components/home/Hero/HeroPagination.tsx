'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroPaginationProps {
  total: number;
  current: number;
  isPaused: boolean;
  autoplayDelay: number;
  onSelect: (index: number) => void;
}

const HeroPagination: React.FC<HeroPaginationProps> = ({
  total,
  current,
  isPaused,
  autoplayDelay,
  onSelect,
}) => {
  if (total <= 1) return null;

  return (
    <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center px-6 md:bottom-10 md:px-12 lg:px-20">
      <div className="mx-auto flex items-center justify-center gap-2 sm:mx-0">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = current === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? 'true' : undefined}
              className="relative h-1 cursor-pointer overflow-hidden rounded-full bg-text-inverse/30 transition-all duration-300"
              style={{ width: isActive ? '40px' : '8px' }}
            >
              {isActive && !isPaused && (
                <motion.span
                  key={`progress-${current}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: autoplayDelay / 1000, ease: 'linear' }}
                  className="absolute inset-y-0 left-0 bg-text-inverse"
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="hidden w-10 sm:block" />
    </div>
  );
};

export default HeroPagination;