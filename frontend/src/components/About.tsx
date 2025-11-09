import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('about.description2')}
            </p>

          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white"
              >
                <Globe2 size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('about.cards.globalReach.title')}</h3>
                <p className="text-sm text-blue-100">
                  {t('about.cards.globalReach.description')}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl text-white"
              >
                <Users size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('about.cards.expertTeam.title')}</h3>
                <p className="text-sm text-purple-100">
                  {t('about.cards.expertTeam.description')}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl text-white"
              >
                <Target size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{t('about.cards.resultDriven.title')}</h3>
                <p className="text-sm text-teal-100">
                  {t('about.cards.resultDriven.description')}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-500 to-pink-600 p-8 rounded-2xl text-white"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">{t('about.cards.fastDeploy.title')}</h3>
                <p className="text-sm text-pink-100">
                  {t('about.cards.fastDeploy.description')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

