import type { FC } from 'react';
import { motion } from 'framer-motion';
import {  Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.png';

const About: FC = () => {
  const { t } = useTranslation();



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
          </motion.div>

          {/* Profile Subsection - Left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#4696EB] rounded-lg p-4 md:p-6 border border-[#30363D] md:flex-shrink-0 md:w-96 md:self-start"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Profile Image with Ellipse Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full flex justify-center"
              >
                <div className="relative">
                  {/* Ellipse Frame */}
                  <div 
                    className="border-8 border-white/90 shadow-xl overflow-hidden bg-[#4696EB] flex items-center justify-center"
                    style={{ 
                      width: '320px',
                      height: '360px',
                      borderRadius: '50%',
                      clipPath: 'ellipse(160px 180px at 50% 50%)'
                    }}
                  >
                    <img
                      src={profileImage}
                      alt="Adam Tsityat"
                      className="w-full h-full object-contain"
                      style={{ 
                        clipPath: 'ellipse(160px 180px at 50% 50%)',
                        objectPosition: 'center',
                        backgroundColor: '#4696EB'
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text Content Below Image */}
              <div className="w-full space-y-3 px-2">
                {/* Name - Large and Bold */}
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  {t('about.profileName')}
                </h2>
                
                {/* Description/Tagline - Accent Color */}
                <p className="text-base md:text-lg text-white font-semibold leading-relaxed drop-shadow-md">
                  {t('about.profileDescription')}
                </p>
                
                {/* Quote - Smaller, Italic */}
                <p className="text-sm md:text-base text-white font-medium italic leading-relaxed drop-shadow-md">
                  "{t('about.profileQuote')}"
                </p>
              </div>

              {/* LinkedIn Link */}
              <motion.a
                href="https://www.linkedin.com/in/adam-tsityat-05340a124/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="mt-2 w-10 h-10 md:w-11 md:h-11 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-colors"
              >
                <Linkedin size={18} className="text-white" />
              </motion.a>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;

