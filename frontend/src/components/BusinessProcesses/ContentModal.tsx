import { useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string; // HTML content
}

export const ContentModal: FC<ContentModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
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
            <div className="relative bg-[#0D1117] rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-full sm:max-w-4xl h-full sm:h-auto sm:max-h-[90vh] overflow-hidden border border-[#30363D] flex flex-col">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 p-1.5 sm:p-2 rounded-lg bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Header */}
              <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 border-b border-[#30363D]">
                <h2 className="text-2xl sm:text-3xl font-bold text-white gradient-text">
                  {title}
                </h2>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0D1117]">
                <div
                  className="text-[#C9D1D9] leading-relaxed prose prose-invert max-w-none
                    [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h2]:mt-6 [&_h2]:text-white [&_h2:first-child]:mt-0
                    [&_p]:mb-4 [&_p]:text-base [&_p]:leading-relaxed
                    [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-4
                    [&_li]:mb-2 [&_li]:text-base"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
