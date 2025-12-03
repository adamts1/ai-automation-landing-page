import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  Headphones,
  ShoppingCart,
  Database,
  UserPlus,
  Package,
  MessageSquare,
  Receipt,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProcessItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const BusinessProcesses: FC = () => {
  const { t } = useTranslation();

  const processes: ProcessItem[] = [
    {
      icon: <Users size={32} />,
      title: t('businessProcesses.items.leadCapture.title'),
      description: t('businessProcesses.items.leadCapture.description'),
    },
    {
      icon: <Calendar size={32} />,
      title: t('businessProcesses.items.appointmentScheduling.title'),
      description: t('businessProcesses.items.appointmentScheduling.description'),
    },
    {
      icon: <Headphones size={32} />,
      title: t('businessProcesses.items.customerSupport.title'),
      description: t('businessProcesses.items.customerSupport.description'),
    },
    {
      icon: <ShoppingCart size={32} />,
      title: t('businessProcesses.items.sales.title'),
      description: t('businessProcesses.items.sales.description'),
    },
    {
      icon: <Database size={32} />,
      title: t('businessProcesses.items.crmUpdate.title'),
      description: t('businessProcesses.items.crmUpdate.description'),
    },
    {
      icon: <UserPlus size={32} />,
      title: t('businessProcesses.items.onboarding.title'),
      description: t('businessProcesses.items.onboarding.description'),
    },
    {
      icon: <Package size={32} />,
      title: t('businessProcesses.items.inventory.title'),
      description: t('businessProcesses.items.inventory.description'),
    },
    {
      icon: <MessageSquare size={32} />,
      title: t('businessProcesses.items.followUps.title'),
      description: t('businessProcesses.items.followUps.description'),
    },
    {
      icon: <Receipt size={32} />,
      title: t('businessProcesses.items.invoices.title'),
      description: t('businessProcesses.items.invoices.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="business-processes" className="py-20 bg-[#161B22]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('businessProcesses.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#C9D1D9] max-w-3xl mx-auto mb-4">
            {t('businessProcesses.subtitle')}
          </p>
          <p className="text-[#8B949E] max-w-2xl mx-auto">
            {t('businessProcesses.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {processes.map((process, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#0D1117] border border-[#30363D] p-6 rounded-xl hover:border-[#58A6FF]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#58A6FF] to-[#BC8CFF] rounded-lg flex items-center justify-center text-white mb-4">
                {process.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {process.title}
              </h3>
              <p className="text-[#C9D1D9] leading-relaxed text-sm">
                {process.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessProcesses;

