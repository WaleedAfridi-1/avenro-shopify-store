'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Phase = 'idle' | 'darkening' | 'revealing';

const DARKEN_DURATION = 0.45;
const REVEAL_DURATION = 0.65;

const HeroTransitionOverlay: React.FC<{ phase: Phase }> = ({ phase }) => {
  return (
    <AnimatePresence>
      {phase !== 'idle' && (
        <motion.div
          key="hero-transition-overlay"
          className="pointer-events-none absolute inset-0 z-10 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'darkening' ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: phase === 'darkening' ? DARKEN_DURATION : REVEAL_DURATION,
            ease: phase === 'darkening' ? 'easeIn' : 'easeOut',
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default HeroTransitionOverlay;