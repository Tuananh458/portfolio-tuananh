import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { lang, t } = useLanguage();

  const title = project.title[lang] || project.title.en;
  const role = project.role[lang] || project.role.en;
  const date = project.date[lang] || project.date.en;
  const desc = project.desc[lang] || project.desc.en;
  const bullets = project.bullets[lang] || project.bullets.en;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl p-8 glass-panel relative ${
        project.featured 
          ? 'border-transparent bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/3 dark:to-transparent' 
          : ''
      }`}
      style={
        project.featured 
          ? {
              borderImage: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(217,70,239,0.4)) 1'
            }
          : {}
      }
    >
      {project.featured && (
        <span className="absolute -top-3 left-8 font-mono text-[10px] font-bold tracking-widest text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-3.5 py-1 rounded-full shadow-md">
          {t('proj_flag')}
        </span>
      )}

      <div className="flex justify-between items-baseline gap-4 flex-wrap mb-2">
        <h3 className="font-display font-extrabold text-2xl tracking-tight text-ink">
          {title}
        </h3>
        <span className="font-mono text-xs font-semibold text-ink-3">
          {date}
        </span>
      </div>

      <span className="inline-block text-xs font-bold text-accent bg-accent-soft px-3 py-1 rounded-full mb-4">
        {role}
      </span>

      <p className="text-ink-2 text-sm leading-relaxed mb-5 max-w-[760px]">
        {desc}
      </p>

      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="text-ink-2 text-sm pl-6 relative">
            <span className="absolute left-1 top-2 w-1.5 h-1.5 rounded-full bg-accent" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="font-mono text-[11px] font-semibold text-ink-2 bg-soft border border-line rounded-lg px-2.5 py-1 transition-all duration-200 hover:text-ink hover:border-line-2 hover:bg-surface-solid"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-bold text-ink hover:text-accent flex items-center gap-1 transition-colors duration-200"
          >
            <span>{project.link.replace(/^https?:\/\//, '')}</span>
            <ExternalLink size={14} />
          </a>
        )}
        
        {project.live ? (
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-live-demo', { detail: project.id }))}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full px-4 py-2 hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-md shadow-indigo-500/20"
          >
            <Play size={10} fill="currentColor" />
            <span>{t('embed_btn')}</span>
          </button>
        ) : (
          <span className="text-xs font-semibold text-ink-3 bg-soft border border-line rounded-full px-4 py-2">
            {t('embed_soon')}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
