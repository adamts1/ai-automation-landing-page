import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VideoDemo: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="video" className="py-20 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('video.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl shadow-2xl overflow-hidden border border-[#30363D]"
        >
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#58A6FF] to-[#BC8CFF] rounded-full flex items-center justify-center shadow-xl"
              >
                <Play size={48} className="text-white ml-1" fill="white" />
              </motion.div>
              <p className="text-2xl font-bold text-[#C9D1D9]">
                {t('video.comingSoon')}
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-[#58A6FF] rounded-full opacity-50" />
          <div className="absolute top-4 right-4 w-3 h-3 bg-[#BC8CFF] rounded-full opacity-50" />
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#39D0D8] rounded-full opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;

