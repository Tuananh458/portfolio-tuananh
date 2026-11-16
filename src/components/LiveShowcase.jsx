import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { liveProjects } from '../data/projects';
import {
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  Maximize2,
  Minimize2,
  ExternalLink,
  Lock,
  Loader2,
  MousePointerClick,
  CheckCircle2
} from 'lucide-react';

const DEVICES = [
  { id: 'desktop', icon: Monitor, width: null },
  { id: 'tablet', icon: Tablet, width: 820 },
  { id: 'mobile', icon: Smartphone, width: 390 }
];

const hostOf = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

/* One fully independent, interactive embed of a single live product. */
const LiveDemo = ({ project, index }) => {
  const { lang, t } = useLanguage();
  const blockRef = useRef(null);
  const frameRef = useRef(null);

  const [device, setDevice] = useState('desktop');
  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  // Each site only starts loading when its own block approaches the viewport.
  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(document.fullscreenElement === frameRef.current);
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, []);

  const reload = useCallback(() => {
    setLoading(true);
    setReloadKey((k) => k + 1);
  }, []);

  const toggleFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen?.();
    else el.requestFullscreen?.().catch(() => {});
  };

  const deviceCfg = DEVICES.find((d) => d.id === device);
  const highlights = project.highlights?.[lang] || project.highlights?.en || [];
  const name = project.title[lang].split(' — ')[0];
  const mark = project.id === 'quizify' ? 'Q' : '汉';

  return (
    <article id={`live-${project.id}`} ref={blockRef} className="scroll-mt-24">
      {/* Project header */}
      <div className="wrap">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-end mb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-5xl font-black text-line-2 leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.accent} text-white font-display font-black text-lg flex items-center justify-center shadow-lg`}>
                {mark}
              </span>
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight leading-none">{name}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:underline">
                  {hostOf(project.link)}
                </a>
              </div>
            </div>
            <p className="text-ink-2 text-sm leading-relaxed">{project.desc[lang]}</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2 text-xs text-ink-2 leading-snug">
                <CheckCircle2 size={14} className="text-emerald-500 flex-none mt-[1px]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Browser window, wider than the text column so the site has room */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-7">
        <div className="relative">
          <div className={`absolute -inset-1 rounded-[22px] bg-gradient-to-r ${project.accent} opacity-25 blur-xl pointer-events-none`} />
          <div
            ref={frameRef}
            className={`relative border border-line-2 overflow-hidden shadow-lg-custom bg-surface-solid flex flex-col ${
              isFullscreen ? 'rounded-none' : 'rounded-2xl'
            }`}
          >
            {/* Toolbar */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 border-b border-line bg-soft">
              <div className="hidden sm:flex gap-1.5">
                <i className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <i className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <i className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <button
                onClick={reload}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-ink-2 hover:text-ink hover:bg-surface transition-colors"
                aria-label={t('live_reload')}
                title={t('live_reload')}
              >
                <RotateCw size={14} className={loading && inView ? 'animate-spin' : ''} />
              </button>
              <div className="flex-1 min-w-0 flex items-center gap-2 bg-bg border border-line rounded-lg px-3 py-1.5">
                <Lock size={11} className="text-emerald-500 flex-none" />
                <span className="font-mono text-[11px] text-ink-2 truncate">{hostOf(project.embedUrl)}</span>
              </div>
              <div className="hidden md:flex items-center bg-bg border border-line rounded-lg p-0.5">
                {DEVICES.map((d) => {
                  const Icon = d.icon;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setDevice(d.id)}
                      className={`w-8 h-7 rounded-md flex items-center justify-center transition-all ${
                        device === d.id ? 'bg-accent text-white shadow' : 'text-ink-3 hover:text-ink'
                      }`}
                      aria-label={t(`live_${d.id}`)}
                      title={t(`live_${d.id}`)}
                    >
                      <Icon size={14} />
                    </button>
                  );
                })}
              </div>
              <button
                onClick={toggleFullscreen}
                className="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center text-ink-2 hover:text-ink hover:bg-surface transition-colors"
                aria-label={t('live_fullscreen')}
                title={t('live_fullscreen')}
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r ${project.accent} rounded-lg px-3 py-2 hover:brightness-110 transition`}
              >
                <span className="hidden sm:inline">{t('live_open')}</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Viewport */}
            <div
              className={`relative bg-grid-pattern flex justify-center ${
                isFullscreen ? 'flex-1' : 'h-[72vh] min-h-[520px] max-h-[860px]'
              } ${device === 'desktop' ? '' : 'py-6'}`}
              onPointerEnter={() => setHintVisible(false)}
            >
              <div
                className={`relative h-full transition-[width] duration-500 ease-out bg-white overflow-hidden ${
                  device === 'desktop' ? 'w-full' : 'rounded-[28px] border-[6px] border-slate-800 dark:border-slate-700 shadow-2xl'
                }`}
                style={deviceCfg.width ? { width: `min(${deviceCfg.width}px, 100%)` } : undefined}
              >
                {inView && (
                  <iframe
                    key={reloadKey}
                    src={project.embedUrl}
                    title={`${project.title[lang]} (live)`}
                    className="absolute inset-0 w-full h-full border-0 bg-white"
                    allow="microphone; camera; autoplay; clipboard-read; clipboard-write; fullscreen; payment"
                    allowFullScreen
                    onLoad={() => setLoading(false)}
                  />
                )}

                <AnimatePresence>
                  {(!inView || loading) && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface-solid"
                    >
                      <span className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.accent} text-white font-display font-black text-xl flex items-center justify-center shadow-lg animate-pulse`}>
                        {mark}
                      </span>
                      <span className="flex items-center gap-2 font-mono text-xs text-ink-2">
                        <Loader2 size={13} className="animate-spin" />
                        {t('live_loading')} {hostOf(project.embedUrl)}…
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {hintVisible && inView && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-bold text-white bg-slate-900/85 backdrop-blur px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
                  >
                    <MousePointerClick size={14} />
                    {t('live_hint')}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const LiveShowcase = () => {
  const { t } = useLanguage();

  // Project cards elsewhere on the page can jump straight to a demo.
  useEffect(() => {
    const handler = (e) => {
      document.getElementById(`live-${e.detail}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    window.addEventListener('open-live-demo', handler);
    return () => window.removeEventListener('open-live-demo', handler);
  }, []);

  return (
    <section id="live" className="py-24 relative scroll-mt-20">
      <div className="wrap">
        <div className="mb-14 max-w-[680px] select-none">
          <div className="font-mono text-[11px] font-bold text-accent mb-3 flex items-center gap-2.5 tracking-wider uppercase">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span>{t('live_label')}</span>
            <span className="w-12 h-[1px] bg-line-2" />
          </div>
          <h2 className="text-slate-900 dark:text-white font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-snug">
            {t('live_title')}
          </h2>
          <p className="text-ink-2 mt-4 leading-relaxed">{t('live_sub')}</p>
        </div>
      </div>

      <div className="space-y-28">
        {liveProjects.map((p, i) => (
          <LiveDemo key={p.id} project={p} index={i} />
        ))}
      </div>

      <p className="wrap text-[11px] text-ink-3 mt-6 text-center">{t('live_note')}</p>
    </section>
  );
};

export default LiveShowcase;
