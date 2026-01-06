import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import type { NavItem, SupportedLanguage } from '../types';

const Header: FC = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState<boolean>(false);

  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const scrollToSection = (id: string): void => {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: SupportedLanguage): void => {
    changeLanguage(lang);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const getLanguageLabel = (lang: SupportedLanguage): string => {
    switch (lang) {
      case 'en':
        return 'English';
      case 'he':
        return 'עברית';
      case 'fr':
        return 'Français';
      default:
        return lang;
    }
  };

  const getLanguageCode = (lang: SupportedLanguage): string => {
    switch (lang) {
      case 'en':
        return 'EN';
      case 'he':
        return 'עב';
      case 'fr':
        return 'FR';
      default:
        return lang || 'EN'.toUpperCase();
    }
  };

  const navItems: NavItem[] = [
    { label: t('header.services'), id: 'services' },
    { label: t('header.businessProcesses'), id: 'business-processes' },
    { label: t('header.video'), id: 'video' },
    { label: t('header.about'), id: 'about' },
    { label: t('header.contact'), id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#161B22]/95 backdrop-blur-md border-b border-[#30363D] shadow-xl' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold gradient-text whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0 pr-2"
          >
            {t('header.logo')}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#58A6FF] ${isScrolled ? 'text-[#C9D1D9]' : 'text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isScrolled ? 'text-[#C9D1D9] hover:bg-[#21262D]' : 'text-white hover:bg-white/10'
                  }`}
                title="Select language"
              >
                <Languages size={18} />
                <span className="text-sm font-medium">{getLanguageCode(language)}</span>
              </button>

              {/* Language Dropdown */}
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-[#0D1117] border border-[#30363D] rounded-lg shadow-xl overflow-hidden z-50"
                  >
                    {(['en', 'he', 'fr'] as SupportedLanguage[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full px-4 py-3 text-left rtl:text-right text-sm transition-colors ${language === lang
                            ? 'bg-[#161B22] text-[#58A6FF]'
                            : 'text-[#C9D1D9] hover:bg-[#21262D]'
                          }`}
                      >
                        {getLanguageLabel(lang)}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#58A6FF]/30 transition-all duration-200"
            >
              {t('header.getStarted')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-[#C9D1D9]' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 bg-[#161B22] border border-[#30363D] rounded-lg shadow-xl mt-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-[#C9D1D9] hover:bg-[#21262D] transition-colors rtl:text-right"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="border-t border-[#30363D]">
              <div className="px-4 py-2 text-xs text-[#8B949E] uppercase">Language</div>
              {(['en', 'he', 'fr'] as SupportedLanguage[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`flex items-center gap-2 w-full px-4 py-3 text-left rtl:text-right transition-colors ${language === lang
                      ? 'bg-[#161B22] text-[#58A6FF]'
                      : 'text-[#C9D1D9] hover:bg-[#21262D]'
                    }`}
                >
                  <Languages size={18} />
                  <span className="font-medium">{getLanguageLabel(lang)}</span>
                  {language === lang && (
                    <span className="ml-auto rtl:mr-auto rtl:ml-0 text-[#58A6FF]">✓</span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Get Started Button */}
            <div className="px-4 pt-3 pb-2 border-t border-[#30363D]">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                {t('header.getStarted')}
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;

