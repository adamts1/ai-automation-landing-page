import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.png';

const About: FC = () => {
  const { t } = useTranslation();

  const scrollToContact = (): void => {
    const element: HTMLElement | null = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-[#161B22]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">

          {/* Text Content - Right on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-center">
              {t('about.heading')}
            </h2>

            <p className="text-lg text-[#C9D1D9] leading-relaxed">
              {t('about.paragraph1')}
            </p>

            <p className="text-lg text-[#C9D1D9] leading-relaxed">
              {t('about.paragraph2')}
            </p>

            <p className="text-lg text-[#C9D1D9] leading-relaxed">
              {t('about.paragraph3')}
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mt-8 mb-4">
              {t('about.subheading')}
            </h3>

            <p className="text-lg text-[#C9D1D9] leading-relaxed">
              {t('about.service1')}
            </p>

            <p className="text-lg text-[#C9D1D9] leading-relaxed">
              {t('about.service2')}
            </p>

            <p className="text-lg text-[#C9D1D9] leading-relaxed">
              {t('about.service3')}
            </p>

            <p className="text-lg text-[#C9D1D9] leading-relaxed">
              {t('about.service4')}
            </p>

            <p className="text-lg text-[#C9D1D9] leading-relaxed mt-6">
              {t('about.paragraphFinal')}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#58A6FF]/30 transition-all duration-200"
            >
              {t('about.cta')}
              <ArrowLeft size={20} className="rtl:rotate-180" />
            </motion.button>
          </motion.div>

          {/* Profile Subsection - Left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0D1117] rounded-lg p-3 md:p-4 border border-[#30363D] md:flex-shrink-0 md:w-80 md:self-start"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-md overflow-hidden border-2 border-[#30363D]">
                  <img
                    src={profileImage}
                    alt="Adam Tsityat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Name */}
              <h2 className="text-lg md:text-xl font-bold text-white">
                {t('about.profileName')}
              </h2>

              {/* Description */}
              <p className="text-xs text-[#C9D1D9] leading-relaxed text-center md:text-right max-w-lg md:max-w-full">
                {t('about.profileDescription')}
              </p>

              {/* Quote */}
              <p className="text-xs md:text-sm text-[#58A6FF] font-medium italic text-center max-w-lg md:max-w-full">
                "{t('about.profileQuote')}"
              </p>

              {/* LinkedIn Link */}
              <motion.a
                href="https://www.linkedin.com/in/adam-tsityat-05340a124/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="mt-1 w-7 h-7 bg-[#161B22] border border-[#30363D] rounded-lg flex items-center justify-center hover:bg-[#21262D] hover:border-[#58A6FF] transition-colors"
              >
                <Linkedin size={14} className="text-[#C9D1D9]" />
              </motion.a>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;

