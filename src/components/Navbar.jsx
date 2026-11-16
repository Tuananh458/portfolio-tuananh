import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { Avatar } from './Avatar';

const Navbar = ({ onOpenCV }) => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('nav_about') },
    { href: '#live', label: t('nav_live') },
    { href: '#skills', label: t('nav_skills') },
    { href: '#projects', label: t('nav_projects') },
    { href: '#experience', label: t('nav_exp') },
    { href: '#activities', label: t('nav_activities') },
    { href: '#contact', label: t('nav_contact') },
  ];

  return (
    <nav 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'transform translate-y-1' : 'transform translate-y-0'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 text-ink font-display font-extrabold text-base tracking-tight decoration-none">
            <span className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-md flex-none">
              <Avatar className="w-full h-full rounded-full bg-white" imgClassName="object-[50%_18%]" fallbackClassName="text-[10px]" />
            </span>
            <span className="whitespace-nowrap">
              {lang === 'vi' ? (
                <>
                  Hoàng Kim <span className="text-accent">Tuấn Anh</span>
                </>
              ) : (
                <>
                  Hoang Kim <span className="text-accent">Tuan Anh</span>
                </>
              )}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-ink-2 hover:text-ink text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <button 
              onClick={onOpenCV}
              className="text-accent hover:text-indigo-400 text-sm font-bold flex items-center gap-1 transition-colors duration-200"
            >
              <span>{t('nav_cv')}</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Controls (Theme, Lang, Mobile Menu) */}
          <div className="flex items-center gap-3">
            {/* Language Switch */}
            <div className="flex items-center border border-line-2 rounded-full overflow-hidden bg-white/5 p-[2px] text-[11px] font-mono">
              <button 
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full font-bold transition-all duration-200 ${
                  lang === 'en' ? 'bg-ink text-bg' : 'text-ink-3 hover:text-ink'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1 rounded-full font-bold transition-all duration-200 ${
                  lang === 'vi' ? 'bg-ink text-bg' : 'text-ink-3 hover:text-ink'
                }`}
              >
                VI
              </button>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border border-line-2 bg-white/5 flex items-center justify-center text-ink-2 hover:text-ink hover:border-ink transition-all duration-300 hover:rotate-12"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Mobile Nav Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-ink hover:opacity-85 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 p-4 rounded-2xl glass-panel bg-surface-solid border border-line-2 flex flex-col gap-3 shadow-lg-custom animate-slideDown">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink-2 hover:text-ink font-semibold text-sm py-2 px-3 hover:bg-soft rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="text-accent hover:bg-accent-soft font-bold text-sm py-2 px-3 rounded-lg text-left flex items-center justify-between"
            >
              <span>{t('nav_cv')}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
