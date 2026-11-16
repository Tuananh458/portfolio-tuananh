import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ROLES = {
  en: ['AI Engineer.', 'LLM & RAG builder.', 'Agentic systems engineer.', 'EdTech founder.'],
  vi: ['Kỹ sư AI.', 'Người xây LLM & RAG.', 'Kỹ sư hệ thống Agent.', 'Founder EdTech.']
};

export const RotatingRole = () => {
  const { lang } = useLanguage();
  const roles = ROLES[lang] || ROLES.en;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative block h-[1.3em] mt-2 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${lang}-${i}`}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient font-black absolute left-0 top-0 whitespace-nowrap leading-[1.3]"
        >
          {roles[i % roles.length]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const TERMINAL = {
  en: [
    { cmd: 'whoami', out: ['Hoang Kim Tuan Anh · AI Engineer'] },
    { cmd: 'cat ./now.md', out: ['🏢 AI Engineer @ VinSmart Future', '📍 Gia Lam, Ha Noi'] },
    { cmd: 'ls ./shipped', out: ['quizify.vn   hkchinese.com'] },
    { cmd: 'stack --top', out: ['LLMs · RAG · LangGraph · FastAPI · React'] }
  ],
  vi: [
    { cmd: 'whoami', out: ['Hoàng Kim Tuấn Anh · Kỹ sư AI'] },
    { cmd: 'cat ./now.md', out: ['🏢 Kỹ sư AI @ VinSmart Future', '📍 Gia Lâm, Hà Nội'] },
    { cmd: 'ls ./shipped', out: ['quizify.vn   hkchinese.com'] },
    { cmd: 'stack --top', out: ['LLMs · RAG · LangGraph · FastAPI · React'] }
  ]
};

export const TerminalCard = () => {
  const { lang } = useLanguage();
  const script = TERMINAL[lang] || TERMINAL.en;
  // step = index of the command currently being typed; chars = typed length
  const [step, setStep] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    setStep(0);
    setChars(0);
  }, [lang]);

  useEffect(() => {
    if (step >= script.length) {
      const restart = setTimeout(() => { setStep(0); setChars(0); }, 6000);
      return () => clearTimeout(restart);
    }
    const cmd = script[step].cmd;
    if (chars < cmd.length) {
      const id = setTimeout(() => setChars((c) => c + 1), 55);
      return () => clearTimeout(id);
    }
    const next = setTimeout(() => { setStep((s) => s + 1); setChars(0); }, 650);
    return () => clearTimeout(next);
  }, [step, chars, script]);

  return (
    <div className="relative w-full max-w-[400px]">
      <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-3xl rounded-full pointer-events-none" />
      <div className="relative rounded-2xl border border-white/10 bg-[#0b0c14]/95 shadow-2xl overflow-hidden font-mono text-[12.5px] leading-relaxed">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <i className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
          <span className="ml-3 text-[10.5px] text-slate-500">tuananh@vsf: ~</span>
        </div>
        <div className="p-5 min-h-[250px] text-slate-300">
          {script.map((line, idx) => {
            if (idx > step) return null;
            const typing = idx === step;
            const shown = typing ? line.cmd.slice(0, chars) : line.cmd;
            return (
              <div key={idx} className="mb-2">
                <div>
                  <span className="text-emerald-400">➜</span>{' '}
                  <span className="text-indigo-300">~</span>{' '}
                  <span className="text-white">{shown}</span>
                  {typing && <span className="inline-block w-[7px] h-[14px] bg-slate-200 align-middle ml-0.5 animate-blink" />}
                </div>
                {!typing &&
                  line.out.map((o) => (
                    <div key={o} className="text-slate-400 pl-4">{o}</div>
                  ))}
              </div>
            );
          })}
          {step >= script.length && (
            <div>
              <span className="text-emerald-400">➜</span> <span className="text-indigo-300">~</span>{' '}
              <span className="inline-block w-[7px] h-[14px] bg-slate-200 align-middle animate-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TECH = ['Python', 'LLMs', 'RAG', 'LangGraph', 'AI Agents', 'FastAPI', 'OpenAI', 'Gemini', 'OCR', 'pgvector', 'PostgreSQL', 'ReactJS', 'NextJS', 'Speech AI', 'Supabase', 'Google Cloud', 'ASP.NET Core'];

export const TechMarquee = () => (
  <div className="relative overflow-hidden border-y border-line py-4 bg-surface/40 select-none [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
    <div className="flex w-max animate-marquee gap-10 pr-10">
      {[...TECH, ...TECH].map((tech, i) => (
        <span key={i} className="font-mono text-sm font-semibold text-ink-3 whitespace-nowrap flex items-center gap-10">
          {tech}
          <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
        </span>
      ))}
    </div>
  </div>
);
