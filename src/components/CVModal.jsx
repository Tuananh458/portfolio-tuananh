import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cvData';
import { Avatar } from './Avatar';
import { X, Printer, Phone, Mail, Github, MapPin, Globe } from 'lucide-react';

const CVModal = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const role = cvData.role[lang] || cvData.role.en;
  const summary = cvData.summary[lang] || cvData.summary.en;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md overflow-y-auto px-4 py-8 md:py-12 flex justify-center items-start no-print"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Floating print/close controls */}
      <div className="fixed top-6 right-6 md:right-12 z-50 flex gap-3">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-white rounded-full hover:bg-slate-100 shadow-lg hover:scale-105 duration-200"
        >
          <Printer size={13} strokeWidth={2.5} />
          <span>{t('cv_print')}</span>
        </button>
        <button 
          onClick={onClose}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:brightness-110 shadow-lg hover:scale-105 duration-200"
        >
          <X size={13} strokeWidth={2.5} />
          <span>{t('cv_close')}</span>
        </button>
      </div>

      {/* CV Document Container */}
      <div className="w-full max-w-[800px] bg-white text-slate-900 rounded-2xl p-8 md:p-14 relative overflow-hidden shadow-2xl animate-cvIn print-container">
        {/* Colorful top bar marker */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 no-print" />

        {/* CV Header */}
        <div className="flex justify-between gap-6 flex-wrap border-b-2 border-slate-900 pb-5 mb-6">
          <div className="flex items-center gap-5">
          <Avatar className="w-20 h-24 rounded-xl border border-slate-200 flex-none" imgClassName="object-[50%_18%]" fallbackClassName="text-xl" />
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-none text-slate-900">
              {cvData.name[lang] || cvData.name.en}
            </h2>
            <div className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase mt-2">
              {role}
            </div>
          </div>
          </div>
          <div className="text-right text-xs text-slate-500 leading-relaxed min-w-[200px] md:min-w-0">
            <span className="flex items-center justify-end gap-1.5 mb-1">
              <Phone size={11} className="text-slate-400" />
              <a href={`tel:${cvData.contact.phone}`} className="hover:text-indigo-600">{cvData.contact.phone}</a>
            </span>
            <span className="flex items-center justify-end gap-1.5 mb-1">
              <Mail size={11} className="text-slate-400" />
              <a href={`mailto:${cvData.contact.email}`} className="hover:text-indigo-600">{cvData.contact.email}</a>
            </span>
            <span className="flex items-center justify-end gap-1.5 mb-1">
              <Github size={11} className="text-slate-400" />
              <a href={cvData.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">{cvData.contact.github}</a>
            </span>
            <span className="flex items-center justify-end gap-1.5 mb-1">
              <Globe size={11} className="text-slate-400" />
              {cvData.contact.websites.map((w, i) => (
                <React.Fragment key={w.url}>
                  {i > 0 && <span className="text-slate-300">·</span>}
                  <a href={w.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">{w.label}</a>
                </React.Fragment>
              ))}
            </span>
            <span className="flex items-center justify-end gap-1.5">
              <MapPin size={11} className="text-slate-400" />
              <span>{cvData.contact.location[lang] || cvData.contact.location.en}</span>
            </span>
          </div>
        </div>

        {/* Section: Summary */}
        <div className="mb-6">
          <h3 className="font-mono text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>{t('cv_s_sum')}</span>
            <span className="flex-1 h-[1px] bg-slate-200" />
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Section: Experience */}
        <div className="mb-6">
          <h3 className="font-mono text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>{t('cv_s_exp')}</span>
            <span className="flex-1 h-[1px] bg-slate-200" />
          </h3>
          <div className="space-y-3">
            {cvData.experience.map((exp, idx) => {
              const expTitle = exp.title[lang] || exp.title.en;
              const expCompany = exp.company[lang] || exp.company.en;
              const expDate = exp.date[lang] || exp.date.en;
              const expBullets = exp.bullets[lang] || exp.bullets.en;

              return (
                <div key={idx}>
                  <div className="flex justify-between items-baseline gap-2 flex-wrap mb-1">
                    <h4 className="text-xs font-bold text-slate-900">
                      {expTitle}
                      {exp.current && <span className="ml-2 align-middle font-mono text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded uppercase">{t('now_badge')}</span>}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400">{expDate}</span>
                  </div>
                  <div className="text-[11px] text-indigo-600 font-semibold mb-2">{expCompany}</div>
                  <ul className="list-disc pl-4 space-y-1">
                    {expBullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="text-xs text-slate-700 leading-relaxed pl-0.5">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Projects */}
        <div className="mb-6">
          <h3 className="font-mono text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>{t('cv_s_proj')}</span>
            <span className="flex-1 h-[1px] bg-slate-200" />
          </h3>
          <div className="space-y-4">
            {cvData.projects.map((proj, idx) => {
              const projRole = proj.role[lang] || proj.role.en;
              const projDate = proj.date[lang] || proj.date.en;
              const projBullets = proj.bullets[lang] || proj.bullets.en;

              return (
                <div key={idx}>
                  <div className="flex justify-between items-baseline gap-2 flex-wrap mb-1">
                    <h4 className="text-xs font-bold text-slate-900">
                      {proj.title} · <span className="font-semibold text-indigo-600">{projRole}</span>
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400">{projDate}</span>
                  </div>
                  {proj.link && (
                    <div className="text-[11px] text-slate-400 italic mb-2">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{proj.link}</a>
                    </div>
                  )}
                  <ul className="list-disc pl-4 space-y-1.5">
                    {projBullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="text-xs text-slate-700 leading-relaxed pl-0.5">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Skills */}
        <div className="mb-6">
          <h3 className="font-mono text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>{t('cv_s_skills')}</span>
            <span className="flex-1 h-[1px] bg-slate-200" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-slate-700">
            {cvData.skillGroups.map((group, idx) => {
              const name = typeof group.name === 'object' ? group.name[lang] || group.name.en : group.name;
              return (
                <div key={idx}>
                  <b className="block text-slate-900 font-mono text-[10px] tracking-wider uppercase mb-1">{name}</b>
                  <span>{group.skills.join(' · ')}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Education */}
        <div className="mb-6">
          <h3 className="font-mono text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>{t('cv_s_edu')}</span>
            <span className="flex-1 h-[1px] bg-slate-200" />
          </h3>
          <div className="space-y-4">
            {cvData.education.map((edu, idx) => {
              const eduDegree = edu.degree[lang] || edu.degree.en;
              const eduInstitution = typeof edu.institution === 'object' ? edu.institution[lang] || edu.institution.en : edu.institution;
              const eduDate = edu.date[lang] || edu.date.en || edu.date;
              const eduDesc = edu.desc ? edu.desc[lang] || edu.desc.en : '';

              return (
                <div key={idx}>
                  <div className="flex justify-between items-baseline gap-2 flex-wrap mb-1">
                    <h4 className="text-xs font-bold text-slate-900">
                      {eduDegree} — <span className="font-semibold">{eduInstitution}</span>
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400">{eduDate}</span>
                  </div>
                  {eduDesc && <p className="text-[11px] text-slate-500 italic">{eduDesc}</p>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Language */}
        <div>
          <h3 className="font-mono text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>{t('cv_s_lang')}</span>
            <span className="flex-1 h-[1px] bg-slate-200" />
          </h3>
          <div className="space-y-1 text-xs text-slate-700">
            {cvData.languages.map((langItem, idx) => {
              const name = langItem.name[lang] || langItem.name.en;
              const desc = langItem.desc[lang] || langItem.desc.en;
              return (
                <p key={idx}>
                  <strong className="text-slate-900">{name}: </strong>
                  {desc}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
