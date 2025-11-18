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
    <section id="services" className="py-16 bg-gray-50">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600 leading-relaxed">
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

