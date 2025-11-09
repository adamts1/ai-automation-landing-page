import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Heart, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ReasonItem } from '../types';

const WhyChooseUs: FC = () => {
  const { t } = useTranslation();
  
  const reasons: ReasonItem[] = [
    {
      icon: <TrendingUp size={32} />,
      title: t('whyUs.reasons.roi.title'),
      description: t('whyUs.reasons.roi.description'),
    },
    {
      icon: <Globe size={32} />,
      title: t('whyUs.reasons.global.title'),
      description: t('whyUs.reasons.global.description'),
    },
    {
      icon: <Heart size={32} />,
      title: t('whyUs.reasons.service.title'),
      description: t('whyUs.reasons.service.description'),
    },
    {
      icon: <PhoneCall size={32} />,
      title: t('whyUs.reasons.consultation.title'),
      description: t('whyUs.reasons.consultation.description'),
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

