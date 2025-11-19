import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
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
        <div className="space-y-8">
          {/* Header with Circular Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-row justify-center items-center mb-12"
          >
            {/* Circular Profile Image - centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full shadow-xl overflow-hidden border-4 border-[#30363D] ring-2 ring-[#58A6FF]/30">
                <img
                  src={profileImage}
                  alt="Adam Tsityat"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default About;

