import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, X, Type, Contrast, ZoomIn, ZoomOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AccessibilityButtonProps {
  isBusinessProcessModalOpen?: boolean;
}

const AccessibilityButton: FC<AccessibilityButtonProps> = ({ isBusinessProcessModalOpen = false }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(100); // Percentage
  const [highContrast, setHighContrast] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const increaseFontSize = (): void => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = (): void => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = (): void => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleHighContrast = (): void => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <>
      {/* Accessibility Button - Mobile First */}
      <motion.button
        onClick={toggleMenu}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-28 right-4 sm:right-6 md:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full items-center justify-center text-white shadow-2xl hover:shadow-[#10b981]/50 transition-all z-50 ${
          isBusinessProcessModalOpen ? 'hidden md:flex' : 'flex'
        }`}
        aria-label={t('accessibility.open') || 'Accessibility Options'}
      >
        <Accessibility size={22} className="sm:w-7 sm:h-7" />
      </motion.button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-32 right-4 sm:right-6 md:right-8 w-72 sm:w-80 bg-[#0D1117] border border-[#30363D] rounded-lg shadow-2xl z-[70] p-4 sm:p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full flex items-center justify-center">
                    <Accessibility size={16} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {t('accessibility.title') || 'Accessibility Options'}
                  </h3>
                </div>
                <button
                  onClick={toggleMenu}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-[#21262D] transition-colors text-[#C9D1D9]"
                  aria-label={t('accessibility.close') || 'Close menu'}
                >
                  <X size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Options */}
              <div className="space-y-3 sm:space-y-4">
                {/* Font Size Control */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#C9D1D9] text-xs sm:text-sm">
                    <Type size={14} className="sm:w-4 sm:h-4" />
                    <span>{t('accessibility.fontSize') || 'Font Size'}</span>
                    <span className="ml-auto text-[#8B949E]">{fontSize}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={decreaseFontSize}
                      className="px-3 py-2 sm:px-4 sm:py-2.5 bg-[#161B22] border border-[#30363D] rounded-lg hover:bg-[#21262D] transition-colors text-white text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
                      aria-label={t('accessibility.decreaseFont') || 'Decrease font size'}
                    >
                      <ZoomOut size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="hidden sm:inline truncate">{t('accessibility.smaller') || 'Smaller'}</span>
                    </button>
                    <button
                      onClick={resetFontSize}
                      className="px-3 py-2 sm:px-4 sm:py-2.5 bg-[#161B22] border border-[#30363D] rounded-lg hover:bg-[#21262D] transition-colors text-white text-xs sm:text-sm flex items-center justify-center"
                      aria-label={t('accessibility.resetFont') || 'Reset font size'}
                    >
                      <span className="truncate">{t('accessibility.reset') || 'Reset'}</span>
                    </button>
                    <button
                      onClick={increaseFontSize}
                      className="px-3 py-2 sm:px-4 sm:py-2.5 bg-[#161B22] border border-[#30363D] rounded-lg hover:bg-[#21262D] transition-colors text-white text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
                      aria-label={t('accessibility.increaseFont') || 'Increase font size'}
                    >
                      <ZoomIn size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="hidden sm:inline truncate">{t('accessibility.larger') || 'Larger'}</span>
                    </button>
                  </div>
                </div>

                {/* High Contrast Toggle */}
                <button
                  onClick={toggleHighContrast}
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg border transition-all flex items-center justify-between ${
                    highContrast
                      ? 'bg-[#10b981]/20 border-[#10b981] text-white'
                      : 'bg-[#161B22] border-[#30363D] text-[#C9D1D9] hover:bg-[#21262D]'
                  }`}
                  aria-label={t('accessibility.toggleContrast') || 'Toggle high contrast'}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Contrast size={16} className="sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">
                      {t('accessibility.highContrast') || 'High Contrast'}
                    </span>
                  </div>
                  <div
                    className={`w-10 h-6 sm:w-12 sm:h-6 rounded-full transition-colors flex items-center p-0.5 ${
                      highContrast ? 'bg-[#10b981] justify-end' : 'bg-[#30363D] justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full" />
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityButton;

