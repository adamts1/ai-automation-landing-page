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
    <section id="why-us" className="py-20 bg-[#161B22]">
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
          <p className="text-lg text-[#C9D1D9] max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-[#0D1117] border border-[#30363D] p-8 rounded-xl hover:border-[#58A6FF]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#58A6FF] to-[#BC8CFF] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {reason.title}
                  </h3>
                  <p className="text-[#C9D1D9] leading-relaxed">
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

