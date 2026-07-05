import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Brain, Rocket, Cpu, GraduationCap } from 'lucide-react';

const iconsMap = {
  Brain: Brain,
  Rocket: Rocket,
  Cpu: Cpu,
  GraduationCap: GraduationCap
};

const ActivityItem = ({ activity }) => {
  const { lang } = useLanguage();
  const IconComponent = iconsMap[activity.icon] || Brain;

  const title = activity.title[lang] || activity.title.en;
  const desc = activity.desc[lang] || activity.desc.en;
  const date = activity.date[lang] || activity.date.en;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 pb-12 group last:pb-0"
    >
      {/* Node indicator */}
      <div className="absolute left-[-20px] top-1.5 w-10 h-10 flex items-center justify-center z-10">
        <div className="w-8 h-8 rounded-lg bg-bg border border-line-2 group-hover:border-accent flex items-center justify-center text-ink-2 group-hover:text-accent shadow-sm-custom transition-all duration-300 group-hover:scale-110 group-hover:shadow-md-custom">
          <IconComponent size={14} className="transition-transform group-hover:rotate-6" />
        </div>
      </div>

      {/* Activity Card */}
      <div className="glass-panel rounded-2xl p-6 hover:translate-x-1 duration-300">
        <span className="font-mono text-[10px] font-bold tracking-widest text-accent uppercase bg-accent-soft px-2.5 py-1 rounded-md mb-3 inline-block">
          {activity.category}
        </span>
        <h3 className="font-display font-extrabold text-lg text-ink leading-snug">
          {title}
        </h3>
        <span className="font-mono text-[11px] text-ink-3 font-semibold mt-1 mb-3 inline-block bg-soft px-2 py-0.5 border border-line rounded">
          {date}
        </span>
        <p className="text-ink-2 text-xs leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default ActivityItem;
