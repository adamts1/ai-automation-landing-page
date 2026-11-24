import type { FC } from 'react';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden isolate bg-[#070A12] pt-20 pb-20 lg:pb-0">
      {/* Ultra-subtle grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3] pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Mobile: globe on top, text right under it. Desktop: text on the start side (right in Hebrew), globe on the other. */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center lg:justify-center gap-2 lg:gap-6">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 -mt-10 sm:-mt-6 lg:mt-0 text-center lg:text-start lg:max-w-[30rem]"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-2xl mx-auto lg:mx-0">
            {t('hero.title')}
          </h1>

          <p className="text-xl sm:text-2xl text-[#C9D1D9] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* 3D globe */}
        <div className="order-1 lg:order-2 relative w-full h-[46vh] max-h-[420px] lg:w-[560px] lg:shrink-0 lg:h-[680px] lg:max-h-none">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 w-[min(950px,150vw)] lg:w-[900px] aspect-square -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(139,92,246,0.20), rgba(56,189,248,0.06) 38%, transparent 64%)',
            }}
          />
          {/* Colored floor glow under the ball, breathing with its float */}
          <div aria-hidden="true" className="absolute left-1/2 bottom-[16%] lg:bottom-[13%] -translate-x-1/2 w-[230px] lg:w-[400px] h-10 lg:h-14 pointer-events-none">
            <div
              className="hero-floor-glow w-full h-full rounded-[50%] blur-2xl"
              style={{ background: 'linear-gradient(90deg, rgba(192,132,252,0.75), rgba(129,140,248,0.6), rgba(56,189,248,0.75))' }}
            />
            <div
              className="hero-floor-glow absolute left-[20%] right-[20%] top-[30%] bottom-[30%] rounded-[50%] blur-md"
              style={{ background: 'linear-gradient(90deg, rgba(167,139,250,0.9), rgba(56,189,248,0.9))' }}
            />
          </div>
          <HeroScene className="absolute inset-0 w-full h-full" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#30363D] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#58A6FF] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

