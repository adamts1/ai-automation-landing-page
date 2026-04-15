import type { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1117]">
      {/* Animated Background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {/* Deep base + refined layered gradients */}
        <div className="absolute inset-0 bg-[#070A12]" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(900px 520px at 18% 22%, rgba(99,102,241,0.22), transparent 60%), radial-gradient(820px 560px at 78% 26%, rgba(59,130,246,0.18), transparent 62%), radial-gradient(760px 600px at 50% 82%, rgba(139,92,246,0.16), transparent 60%)',
          }}
        />

        {/* Slow aurora blobs (transform + opacity only) */}
        <motion.div
          className="absolute -left-28 -top-28 h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              'radial-gradient(closest-side, rgba(96,165,250,0.55), rgba(96,165,250,0) 70%)',
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 18, -10, 0], y: [0, 10, 18, 0], opacity: [0.52, 0.62, 0.54] }
          }
          transition={{
            duration: 18,
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatType: 'mirror' as const,
          }}
        />
        <motion.div
          className="absolute -right-32 top-10 h-[560px] w-[560px] rounded-full blur-3xl opacity-55"
          style={{
            background:
              'radial-gradient(closest-side, rgba(167,139,250,0.55), rgba(167,139,250,0) 70%)',
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -14, 12, 0], y: [0, 14, -8, 0], opacity: [0.45, 0.58, 0.48] }
          }
          transition={{
            duration: 20,
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatType: 'mirror' as const,
          }}
        />
        <motion.div
          className="absolute left-1/2 top-[58%] h-[620px] w-[620px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(closest-side, rgba(56,189,248,0.35), rgba(56,189,248,0) 72%)',
          }}
          animate={shouldReduceMotion ? undefined : { x: [0, 10, -8, 0], y: [0, -10, 12, 0] }}
          transition={{
            duration: 22,
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatType: 'mirror' as const,
          }}
        />

        {/* Vignette + subtle highlight for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_50%_30%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_110%,rgba(0,0,0,0.65),transparent_60%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]" />

        {/* Optional ultra-subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
          }}
        />
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

