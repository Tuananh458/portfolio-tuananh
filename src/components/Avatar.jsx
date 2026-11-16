import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Put the portrait at /public/avatar.jpg. Until it exists, initials are shown instead.
export const AVATAR_SRC = '/avatar.jpg';

export const Avatar = ({ className = '', imgClassName = '', fallbackClassName = '', alt = 'Hoang Kim Tuan Anh' }) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className={`flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-black ${className} ${fallbackClassName}`}>
        TA
      </span>
    );
  }
  return (
    <img
      src={AVATAR_SRC}
      alt={alt}
      onError={() => setFailed(true)}
      className={`object-cover ${className} ${imgClassName}`}
      draggable={false}
    />
  );
};

/* Large portrait for the hero: gradient ring, glow, floating info chips. */
export const HeroPortrait = () => {
  const { t } = useLanguage();
  return (
    <div className="relative w-full max-w-[340px] aspect-[4/5] select-none">
      <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/35 via-purple-500/25 to-pink-500/35 blur-3xl rounded-full pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full rounded-[32px] p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl"
      >
        <div className="h-full w-full rounded-[30px] overflow-hidden bg-white">
          <Avatar
            className="w-full h-full"
            imgClassName="object-[50%_20%]"
            fallbackClassName="text-6xl font-display"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -left-10 bottom-6 glass-panel bg-surface-solid/90 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg-custom animate-float"
      >
        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center">
          <Briefcase size={16} />
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-extrabold text-ink">{t('now_role')}</div>
          <div className="text-[11px] font-semibold text-accent">@ VinSmart Future</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute -right-8 top-[58%] glass-panel bg-surface-solid/90 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg-custom animate-float-delayed"
      >
        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 text-white flex items-center justify-center">
          <Rocket size={16} />
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-extrabold text-ink">{t('portrait_chip')}</div>
          <div className="text-[11px] font-semibold text-ink-2">Quizify · HKChinese</div>
        </div>
      </motion.div>
    </div>
  );
};
