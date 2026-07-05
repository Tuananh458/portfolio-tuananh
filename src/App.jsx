import React, { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ParticleBg from './components/ParticleBg';
import ProjectCard from './components/ProjectCard';
import ActivityItem from './components/ActivityItem';
import CVModal from './components/CVModal';
import { projects } from './data/projects';
import { activities } from './data/activities';
import { cvData } from './data/cvData';
import { 
  Mail, 
  Phone, 
  Github, 
  Brain, 
  Cpu, 
  GraduationCap, 
  Terminal, 
  ArrowRight, 
  CheckCircle,
  Database,
  Layers,
  Sparkles,
  Blocks,
  Compass
} from 'lucide-react';

const SectionHeader = ({ label, title }) => {
  return (
    <div className="mb-14 max-w-[600px] select-none">
      <div className="font-mono text-[11px] font-bold text-accent mb-3 flex items-center gap-2.5 tracking-wider uppercase">
        <span>{label}</span>
        <span className="w-12 h-[1px] bg-line-2" />
      </div>
      <h2 className="text-slate-900 dark:text-white font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-snug">
        {title}
      </h2>
    </div>
  );
};

const App = () => {
  const { lang, t } = useLanguage();
  const { theme } = useTheme();
  const [cvOpen, setCvOpen] = useState(false);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const role = cvData.role[lang] || cvData.role.en;

  return (
    <div className="relative min-h-screen selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Background orbs */}
      <div className="glow-orbs">
        <div className="orb orb-left" />
        <div className="orb orb-right" />
      </div>

      {/* Navigation */}
      <Navbar onOpenCV={() => setCvOpen(true)} />

      {/* ================= HERO SECTION ================= */}
      <header id="top" className="hero min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
        <ParticleBg />
        <div className="wrap w-full z-10">
          <div className="hero-grid grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
            {/* Left Column info */}
            <div className="text-left">
              <div className="status-pill inline-flex items-center gap-2 font-mono text-xs font-semibold text-ink-2 bg-surface border border-line-2 px-4 py-1.5 rounded-full shadow-sm-custom mb-6">
                <span className="status-dot w-2.5 h-2.5 rounded-full bg-emerald-500 relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                </span>
                <span>{t('hero_badge')}</span>
              </div>
              <h1 className="font-display font-extrabold text-slate-900 dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] mb-6">
                Hoang Kim Tuan Anh<br />
                <span className="text-gradient font-black block mt-2 py-1 leading-normal">
                  {role}.
                </span>
              </h1>
              <p className="subtitle text-ink-2 text-base md:text-lg mb-8 max-w-[600px] leading-relaxed" 
                 dangerouslySetInnerHTML={{ __html: t('hero_sub') }} 
              />
              <div className="hero-actions flex gap-4 flex-wrap">
                <a href="#projects" className="btn btn-primary text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-2 hover:scale-105 shadow-md shadow-indigo-500/20 duration-200">
                  <span>{t('hero_cta1')}</span>
                  <ArrowRight size={15} />
                </a>
                <button onClick={() => setCvOpen(true)} className="btn btn-ghost border border-line-2 text-ink bg-surface flex items-center gap-2 hover:border-ink hover:scale-105 duration-200">
                  {t('hero_cta3')}
                </button>
                <a href="mailto:tuananhhk458@gmail.com" className="btn btn-ghost border border-line-2 text-ink bg-surface flex items-center gap-2 hover:border-ink hover:scale-105 duration-200">
                  {t('hero_cta2')}
                </a>
              </div>
              
              <div className="hero-stats flex gap-8 border-t border-line mt-10 pt-8">
                <div>
                  <div className="stat-num text-3xl font-extrabold font-display text-gradient">4+</div>
                  <div className="stat-label text-[10px] md:text-[11px] font-bold text-ink-3 tracking-widest">{t('stat1')}</div>
                </div>
                <div>
                  <div className="stat-num text-3xl font-extrabold font-display text-gradient">2</div>
                  <div className="stat-label text-[10px] md:text-[11px] font-bold text-ink-3 tracking-widest">{t('stat2')}</div>
                </div>
                <div>
                  <div className="stat-num text-3xl font-extrabold font-display text-gradient">15+</div>
                  <div className="stat-label text-[10px] md:text-[11px] font-bold text-ink-3 tracking-widest">{t('stat3')}</div>
                </div>
              </div>
              
              <div className="hero-meta flex gap-6 flex-wrap font-mono text-[12px] text-ink-3 mt-8">
                <a href="mailto:tuananhhk458@gmail.com" className="hover:text-accent flex items-center gap-1.5 transition-colors">
                  <Mail size={13} />
                  <span>tuananhhk458@gmail.com</span>
                </a>
                <a href="tel:0328778334" className="hover:text-accent flex items-center gap-1.5 transition-colors">
                  <Phone size={13} />
                  <span>0328 778 334</span>
                </a>
                <a href="https://github.com/Tuananh458" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-1.5 transition-colors">
                  <Github size={13} />
                  <span>github.com/Tuananh458</span>
                </a>
              </div>
            </div>

            {/* Right Column neural decoration */}
            <div className="hidden md:flex justify-center select-none">
              <svg viewBox="0 0 200 200" fill="none" className="w-full max-w-[280px] opacity-80 filter drop-shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                <defs>
                  <linearGradient id="neuralGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="60" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="100" cy="100" r="30" stroke="url(#neuralGrad)" strokeWidth="0.75" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="var(--line)" strokeWidth="1" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="var(--line)" strokeWidth="1" />
                <line x1="43.4" y1="43.4" x2="156.6" y2="156.6" stroke="var(--line)" strokeWidth="0.75" />
                <line x1="43.4" y1="156.6" x2="156.6" y2="43.4" stroke="var(--line)" strokeWidth="0.75" />
                
                <circle cx="100" cy="100" r="16" fill="url(#neuralGrad)" className="animate-pulse" />
                <circle cx="100" cy="40" r="6" fill="#6366f1" />
                <circle cx="100" cy="160" r="6" fill="#d946ef" />
                <circle cx="40" cy="100" r="6" fill="#6366f1" />
                <circle cx="180" cy="100" r="6" fill="#d946ef" />
                
                <circle cx="57.6" cy="57.6" r="4.5" fill="#a855f7" />
                <circle cx="142.4" cy="142.4" r="4.5" fill="#a855f7" />
                <circle cx="57.6" cy="142.4" r="4.5" fill="#a855f7" />
                <circle cx="142.4" cy="57.6" r="4.5" fill="#a855f7" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-24">
        <div className="wrap reveal">
          <SectionHeader label={t('about_label')} title={t('about_title')} />
          <div className="about-grid grid md:grid-cols-[1.3fr_1fr] gap-12 items-start">
            <div className="about-text">
              <p className="text-ink-2 mb-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about_p1') }} />
              <p className="text-ink-2 mb-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about_p2') }} />
              <p className="text-ink-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about_p3') }} />
            </div>
            
            <div className="focus-card glass-panel rounded-3xl p-8">
              <h3 className="font-mono text-[11px] font-bold text-ink-3 tracking-widest uppercase mb-6">
                {t('focus_title')}
              </h3>
              <div className="focus-list space-y-6">
                <div className="focus-item flex gap-4 items-start">
                  <div className="focus-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-none">
                    <Brain size={18} />
                  </div>
                  <div>
                    <b className="font-display font-extrabold text-sm text-ink">{t('f1_t')}</b>
                    <span className="text-ink-2 text-xs">{t('f1_d')}</span>
                  </div>
                </div>
                
                <div className="focus-item flex gap-4 items-start">
                  <div className="focus-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-none">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <b className="font-display font-extrabold text-sm text-ink">{t('f2_t')}</b>
                    <span className="text-ink-2 text-xs">{t('f2_d')}</span>
                  </div>
                </div>
                
                <div className="focus-item flex gap-4 items-start">
                  <div className="focus-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-none">
                    <Blocks size={18} />
                  </div>
                  <div>
                    <b className="font-display font-extrabold text-sm text-ink">{t('f3_t')}</b>
                    <span className="text-ink-2 text-xs">{t('f3_d')}</span>
                  </div>
                </div>

                <div className="focus-item flex gap-4 items-start">
                  <div className="focus-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center flex-none">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <b className="font-display font-extrabold text-sm text-ink">{t('f4_t')}</b>
                    <span className="text-ink-2 text-xs">{t('f4_d')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="py-24 bg-soft/50 dark:bg-soft/10 border-y border-line">
        <div className="wrap reveal">
          <SectionHeader label={t('skills_label')} title={t('skills_title')} />
          
          <div className="skills-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* 1. AI */}
            <div className="skill-card glass-panel rounded-3xl p-8 relative overflow-hidden group">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="skill-head flex items-center gap-4.5 mb-5">
                <div className="skill-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-ink">AI Engineering</h3>
              </div>
              <div className="tags flex flex-wrap gap-2">
                <span className="tag">LLMs</span>
                <span class="tag">Prompt Engineering</span>
                <span className="tag">RAG</span>
                <span className="tag">OCR</span>
                <span className="tag">AI Workflow</span>
                <span className="tag">AI Agents</span>
              </div>
            </div>

            {/* 2. Backend */}
            <div className="skill-card glass-panel rounded-3xl p-8 relative overflow-hidden group">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="skill-head flex items-center gap-4.5 mb-5">
                <div className="skill-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <Cpu size={18} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-ink">Backend Development</h3>
              </div>
              <div className="tags flex flex-wrap gap-2">
                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">ASP.NET Core</span>
              </div>
            </div>

            {/* 3. Frontend */}
            <div className="skill-card glass-panel rounded-3xl p-8 relative overflow-hidden group">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="skill-head flex items-center gap-4.5 mb-5">
                <div className="skill-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <Layers size={18} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-ink">Frontend</h3>
              </div>
              <div className="tags flex flex-wrap gap-2">
                <span className="tag">ReactJS</span>
                <span className="tag">NextJS</span>
              </div>
            </div>

            {/* 4. Databases */}
            <div className="skill-card glass-panel rounded-3xl p-8 relative overflow-hidden group">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="skill-head flex items-center gap-4.5 mb-5">
                <div className="skill-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <Database size={18} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-ink">Databases</h3>
              </div>
              <div className="tags flex flex-wrap gap-2">
                <span className="tag">PostgreSQL</span>
                <span className="tag">SQL Server</span>
                <span className="tag">Supabase</span>
              </div>
            </div>

            {/* 5. Tools */}
            <div className="skill-card glass-panel rounded-3xl p-8 relative overflow-hidden group">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="skill-head flex items-center gap-4.5 mb-5">
                <div className="skill-ico w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                  <Compass size={18} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-ink" data-i18n="skills_tools">Tools & Cloud</h3>
              </div>
              <div className="tags flex flex-wrap gap-2">
                <span className="tag">Git</span>
                <span className="tag">Railway</span>
                <span className="tag">Google Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-24">
        <div className="wrap reveal">
          <SectionHeader label={t('proj_label')} title={t('proj_title')} />
          
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCES & EDUCATION SECTION ================= */}
      <section id="experience" className="py-24 bg-soft/50 dark:bg-soft/10 border-y border-line">
        <div className="wrap reveal">
          <SectionHeader label={t('exp_label')} title={t('exp_title')} />
          
          <div className="relative ml-4">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-line rounded-full" />
            
            {/* VinUniversity */}
            <div className="relative pl-12 pb-12 group">
              <div className="absolute left-[-20px] top-1.5 w-10 h-10 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-bg border-2 border-indigo-500 group-hover:border-purple-500 group-hover:scale-125 duration-200 transition-all shadow shadow-indigo-500/20" />
              </div>
              <div className="glass-panel rounded-2xl p-6 hover:translate-x-1 duration-300">
                <h3 className="font-display font-extrabold text-lg text-ink" data-i18n="x2_title">AI In Action</h3>
                <div className="text-sm font-semibold text-ink-2 mt-1">VinUniversity</div>
                <span className="font-mono text-[10px] text-ink-3 font-bold bg-soft px-2 py-0.5 border border-line rounded mt-2.5 inline-block" data-i18n="x2_date">May 2026 — Present</span>
                <ul className="list-disc pl-4 space-y-1.5 mt-4">
                  <li className="text-xs text-ink-2" data-i18n="x2_1">Large Language Models (LLMs), Prompt Engineering, RAG.</li>
                  <li className="text-xs text-ink-2" data-i18n="x2_2">AI Agents and building real-world AI applications.</li>
                </ul>
              </div>
            </div>

            {/* Freelancer */}
            <div className="relative pl-12 pb-12 group">
              <div className="absolute left-[-20px] top-1.5 w-10 h-10 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-bg border-2 border-indigo-500 group-hover:border-purple-500 group-hover:scale-125 duration-200 transition-all shadow shadow-indigo-500/20" />
              </div>
              <div className="glass-panel rounded-2xl p-6 hover:translate-x-1 duration-300">
                <h3 className="font-display font-extrabold text-lg text-ink" data-i18n="x1_title">Freelance Developer</h3>
                <span className="font-mono text-[10px] text-ink-3 font-bold bg-soft px-2 py-0.5 border border-line rounded mt-2.5 inline-block">2022 — <span data-i18n="present3">Present</span></span>
                <ul className="list-disc pl-4 space-y-1.5 mt-4">
                  <li className="text-xs text-ink-2" data-i18n="x1_1">Developed web applications for various clients.</li>
                  <li className="text-xs text-ink-2" data-i18n="x1_2">Designed, implemented, and deployed software systems.</li>
                  <li className="text-xs text-ink-2" data-i18n="x1_3">Worked directly with clients to analyze requirements and deliver solutions.</li>
                </ul>
              </div>
            </div>

            {/* University */}
            <div className="relative pl-12 group">
              <div className="absolute left-[-20px] top-1.5 w-10 h-10 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-bg border-2 border-indigo-500 group-hover:border-purple-500 group-hover:scale-125 duration-200 transition-all shadow shadow-indigo-500/20" />
              </div>
              <div className="glass-panel rounded-2xl p-6 hover:translate-x-1 duration-300">
                <h3 className="font-display font-extrabold text-lg text-ink" data-i18n="x3_title">Bachelor of Information Technology</h3>
                <div className="text-sm font-semibold text-ink-2 mt-1" data-i18n="x3_org">University of Technology and Education — The University of Danang</div>
                <span className="font-mono text-[10px] text-ink-3 font-bold bg-soft px-2 py-0.5 border border-line rounded mt-2.5 inline-block">2020 — 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES / HUB SECTION ================= */}
      <section id="activities" className="py-24">
        <div className="wrap reveal">
          <SectionHeader label={t('act_label')} title={t('act_title')} />
          
          <div className="relative ml-4">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-line rounded-full" />
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-24">
        <div className="wrap reveal">
          <div className="contact-box glass-panel rounded-3xl text-center py-16 px-8 relative overflow-hidden">
            <h2 className="text-slate-900 dark:text-white font-display font-extrabold text-3xl md:text-4xl mb-4" data-i18n="c_title">
              Let's build something together
            </h2>
            <p className="text-ink-2 text-sm leading-relaxed max-w-[500px] mx-auto mb-8 font-semibold" data-i18n="c_desc">
              I'm open to AI engineering opportunities, collaborations, and interesting projects. Reach out anytime.
            </p>
            <div className="contact-links flex flex-wrap gap-4 justify-center">
              <a className="btn btn-primary text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-2 hover:scale-105 shadow-md shadow-indigo-500/20 duration-200" href="mailto:tuananhhk458@gmail.com">
                <Mail size={16} strokeWidth={2.5} />
                <span>tuananhhk458@gmail.com</span>
              </a>
              <a className="btn btn-ghost border border-line-2 text-ink bg-surface flex items-center gap-2 hover:border-ink hover:scale-105 duration-200" href="tel:0328778334">
                <Phone size={16} />
                <span>0328 778 334</span>
              </a>
              <a className="btn btn-ghost border border-line-2 text-ink bg-surface flex items-center gap-2 hover:border-ink hover:scale-105 duration-200" href="https://github.com/Tuananh458" target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 border-t border-line bg-surface-solid/50 dark:bg-surface-solid/20">
        <div className="wrap flex justify-between gap-4 flex-wrap items-center">
          <span className="font-mono text-xs text-ink-3" data-i18n="footer">
            © 2026 Hoang Kim Tuan Anh
          </span>
          <a href="https://github.com/Tuananh458" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-ink-3 hover:text-accent transition-colors">
            github.com/Tuananh458
          </a>
        </div>
      </footer>

      {/* ================= CV MODAL PREVIEW OVERLAY ================= */}
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
};

export default App;
