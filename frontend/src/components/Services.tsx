import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageCircle, Server, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ServiceItem } from '../types';

const Services: FC = () => {
  const { t } = useTranslation();
  
  const services: ServiceItem[] = [
    {
      icon: <Bot size={40} />,
      title: t('services.items.virtualWorkers.title'),
      description: t('services.items.virtualWorkers.description'),
    },
    {
      icon: <MessageCircle size={40} />,
      title: t('services.items.chatbots.title'),
      description: t('services.items.chatbots.description'),
    },
    {
      icon: <Server size={40} />,
      title: t('services.items.fullStack.title'),
      description: t('services.items.fullStack.description'),
    },
    {
      icon: <CheckCircle size={40} />,
      title: t('services.items.smallBusiness.title'),
      description: t('services.items.smallBusiness.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('services.title')}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#161B22] border border-[#30363D] p-8 rounded-xl hover:border-[#58A6FF]/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#58A6FF] to-[#BC8CFF] rounded-lg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-[#C9D1D9] leading-relaxed">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

