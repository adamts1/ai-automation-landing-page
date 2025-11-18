import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import type { NavItem, SupportedLanguage } from '../types';

const Header: FC = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = (): void => {
    const newLang: SupportedLanguage = language === 'en' ? 'he' : 'en';
    changeLanguage(newLang);
  };

  const navItems: NavItem[] = [
    { label: t('header.services'), id: 'services' },
    { label: t('header.video'), id: 'video' },
    { label: t('header.about'), id: 'about' },
    { label: t('header.contact'), id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            {t('header.logo')}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                title={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
              >
                <Languages size={20} />
                <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'עב'}</span>
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              {t('header.getStarted')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 bg-white rounded-lg shadow-lg mt-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors rtl:text-right"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-t border-gray-200"
            >
              <Languages size={20} />
              <span className="font-medium">{language === 'en' ? 'עברית' : 'English'}</span>
            </button>

            {/* Mobile Get Started Button */}
            <div className="px-4 pt-3 pb-2 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
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

