import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { TechnologyItem } from '../types';

const Technologies: FC = () => {
  const { t } = useTranslation();
  
  const technologies: TechnologyItem[] = [
    { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
    { name: 'Node.js', color: 'from-green-600 to-green-700' },
    { name: 'React', color: 'from-cyan-600 to-cyan-700' },
    { name: 'MongoDB', color: 'from-emerald-600 to-emerald-700' },
    { name: 'Redis', color: 'from-red-600 to-red-700' },
    { name: 'AWS', color: 'from-orange-600 to-orange-700' },
    { name: 'n8n', color: 'from-purple-600 to-purple-700' },
    { name: 'Local LLMs', color: 'from-indigo-600 to-indigo-700' },
    { name: 'External APIs', color: 'from-pink-600 to-pink-700' },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('technologies.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('technologies.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`bg-gradient-to-br ${tech.color} p-6 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-lg hover:shadow-2xl transition-all`}
            >
              <span className="text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('technologies.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

