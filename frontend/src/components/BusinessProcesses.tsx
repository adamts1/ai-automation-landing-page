import { useState } from 'react';
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
  Play,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DemoModal } from './BusinessProcesses/DemoModal';
import { processDemoScenarios, type ProcessKey } from './BusinessProcesses/demoScenarios';

interface ProcessItem {
  icon: any;
  title: string;
  description: string;
  processKey: ProcessKey;
  contactName?: string;
  businessAccount?: string;
  brandName?: string;
  brandAvatar?: string;
}

interface BusinessProcessesProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const BusinessProcesses: FC<BusinessProcessesProps> = ({ isModalOpen, setIsModalOpen }) => {
  const { t } = useTranslation();
  const [selectedProcess, setSelectedProcess] = useState<ProcessKey | null>(null);

  const processes: ProcessItem[] = [
    {
      icon: <Users size={32} />,
      title: t('businessProcesses.items.leadCapture.title'),
      description: t('businessProcesses.items.leadCapture.description'),
      processKey: 'leadCapture',
      contactName: 'נדל״ן',
      businessAccount: 'Business account',
    },
    {
      icon: <Calendar size={32} />,
      title: t('businessProcesses.items.appointmentScheduling.title'),
      description: t('businessProcesses.items.appointmentScheduling.description'),
      processKey: 'appointmentScheduling',
      contactName: 'מרפאה / קליניקה',
      businessAccount: 'Business account',
    },
    {
      icon: <Headphones size={32} />,
      title: t('businessProcesses.items.customerSupport.title'),
      description: t('businessProcesses.items.customerSupport.description'),
      processKey: 'customerSupport',
      contactName: 'חומרי בניין',
      businessAccount: 'Business account',
    },
    {
      icon: <ShoppingCart size={32} />,
      title: t('businessProcesses.items.sales.title'),
      description: t('businessProcesses.items.sales.description'),
      processKey: 'sales',
      brandName: 'אופנה',
      businessAccount: 'Business account',
    },
    {
      icon: <Database size={32} />,
      title: t('businessProcesses.items.crmUpdate.title'),
      description: t('businessProcesses.items.crmUpdate.description'),
      processKey: 'crmUpdate',
      contactName: 'מערכת CRM',
      businessAccount: 'Business account',
    },
    {
      icon: <UserPlus size={32} />,
      title: t('businessProcesses.items.onboarding.title'),
      description: t('businessProcesses.items.onboarding.description'),
      processKey: 'onboarding',
      contactName: 'צוות אונבורדינג',
      businessAccount: 'Business account',
    },
    {
      icon: <Package size={32} />,
      title: t('businessProcesses.items.inventory.title'),
      description: t('businessProcesses.items.inventory.description'),
      processKey: 'inventory',
      contactName: 'ניהול מלאי',
      businessAccount: 'Business account',
    },
    {
      icon: <MessageSquare size={32} />,
      title: t('businessProcesses.items.followUps.title'),
      description: t('businessProcesses.items.followUps.description'),
      processKey: 'followUps',
      contactName: 'מעקב לידים',
      businessAccount: 'Business account',
    },
    {
      icon: <Receipt size={32} />,
      title: t('businessProcesses.items.invoices.title'),
      description: t('businessProcesses.items.invoices.description'),
      processKey: 'invoices',
      contactName: 'חשבוניות',
      businessAccount: 'Business account',
    },
  ];

  const handleProcessClick = (processKey: ProcessKey) => {
    // Skip modal for crmUpdate
    if (processKey === 'crmUpdate') {
      return;
    }
    setSelectedProcess(processKey);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Clear selected process after animation
    setTimeout(() => setSelectedProcess(null), 300);
  };

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
          {processes.map((process, index) => {
            const isCrmUpdate = process.processKey === 'crmUpdate';
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={!isCrmUpdate ? { y: -8, scale: 1.02 } : {}}
                whileTap={!isCrmUpdate ? { scale: 0.98 } : {}}
                onClick={() => handleProcessClick(process.processKey)}
                className={`group relative bg-[#0D1117] border border-[#30363D] p-6 rounded-xl transition-all duration-300 overflow-hidden ${
                  !isCrmUpdate 
                    ? 'hover:border-[#58A6FF]/50 active:border-[#58A6FF]/50 cursor-pointer' 
                    : 'cursor-default'
                }`}
              >
                {/* Play Button - Top Left Corner (only for clickable processes) */}
                {!isCrmUpdate && (
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 md:p-2.5 shadow-lg md:group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-4 h-4 md:w-5 md:h-5 text-[#58A6FF] fill-[#58A6FF] ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#58A6FF] to-[#BC8CFF] rounded-lg flex items-center justify-center text-white mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {process.title}
                  </h3>
                  <p className="text-[#C9D1D9] leading-relaxed text-sm">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Demo Modal */}
      {selectedProcess && (
        <DemoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={processes.find((p) => p.processKey === selectedProcess)?.title || ''}
          scenarios={processDemoScenarios[selectedProcess]}
          processKey={selectedProcess}
          contactName={processes.find((p) => p.processKey === selectedProcess)?.contactName}
          businessAccount={processes.find((p) => p.processKey === selectedProcess)?.businessAccount}
          brandName={processes.find((p) => p.processKey === selectedProcess)?.brandName}
          brandAvatar={processes.find((p) => p.processKey === selectedProcess)?.brandAvatar}
        />
      )}
    </section>
  );
};

export default BusinessProcesses;

