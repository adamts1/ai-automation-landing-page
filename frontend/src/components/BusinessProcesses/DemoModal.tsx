import { useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { WhatsAppInterface } from '../WhatsAppDemo/WhatsAppInterface';
import type { DemoScenario } from '../WhatsAppDemo/WhatsAppInterface';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  scenarios: DemoScenario[];
  contactName?: string;
  businessAccount?: string;
}

export const DemoModal: FC<DemoModalProps> = ({
  isOpen,
  onClose,
  title,
  scenarios,
  contactName = 'אלקטרו סליל',
  businessAccount = 'Business account',
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-[#0D1117] rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-full sm:max-w-6xl h-full sm:h-auto sm:max-h-[90vh] overflow-hidden border border-[#30363D] flex flex-col">
              {/* Close Button - Floating */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 p-1.5 sm:p-2 rounded-lg bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-[#0D1117] relative">
                <WhatsAppInterface
                  scenarios={scenarios}
                  contactName={contactName}
                  businessAccount={businessAccount}
                  showNavigation={true}
                  showDots={true}
                  showCaption={false}
                />
                
                {/* Title - Bottom Right */}
                <h2 className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 text-sm sm:text-base md:text-lg font-semibold text-white text-right z-10">{title}</h2>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

