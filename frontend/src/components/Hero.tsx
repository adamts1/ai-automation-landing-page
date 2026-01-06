import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onOpenChatbot?: () => void;
}

const Hero: FC<HeroProps> = ({ onOpenChatbot }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1117]">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg animate-gradient opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#58A6FF] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#161B22]/80 backdrop-blur-md border border-[#30363D] rounded-lg text-[#C9D1D9] mb-8"
            >
              <Sparkles size={18} className="text-[#58A6FF]" />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight max-w-2xl mx-auto">
              {t('hero.title')}
            </h1>

            <p className="text-xl sm:text-2xl text-[#C9D1D9] mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenChatbot}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-[#58A6FF]/40 transition-all duration-200"
            >
              {t('hero.cta')}
              <Bot size={20} />
            </motion.button>
          </motion.div>

          {/* Image/Illustration */}

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#30363D] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#58A6FF] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

