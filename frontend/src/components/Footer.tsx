import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1117] text-white py-12 border-t border-[#30363D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {t('header.logo')}
            </h3>
            <p className="text-[#8B949E] mb-4 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-[#161B22] border border-[#30363D] rounded-lg flex items-center justify-center hover:bg-[#21262D] hover:border-[#58A6FF] transition-colors"
              >
                <Twitter size={18} className="text-[#C9D1D9]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/adam-tsityat-05340a124/"
                className="w-10 h-10 bg-[#161B22] border border-[#30363D] rounded-lg flex items-center justify-center hover:bg-[#21262D] hover:border-[#58A6FF] transition-colors"
              >
                <Linkedin size={18} className="text-[#C9D1D9]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-[#161B22] border border-[#30363D] rounded-lg flex items-center justify-center hover:bg-[#21262D] hover:border-[#BC8CFF] transition-colors"
              >
                <Github size={18} className="text-[#C9D1D9]" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-[#8B949E]">
              <li>
                <a href="#services" className="hover:text-[#58A6FF] transition-colors">
                  {t('header.services')}
                </a>
              </li>
              <li>
                <a href="#business-processes" className="hover:text-[#58A6FF] transition-colors">
                  {t('header.businessProcesses')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#58A6FF] transition-colors">
                  {t('header.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#58A6FF] transition-colors">
                  {t('header.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-[#8B949E]">
              <li>{t('contact.info.email')}</li>
              <li>{t('footer.phone')}</li>
              <li>{t('footer.coverage')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#30363D] pt-8 text-center text-[#8B949E]">
          <p>© {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

