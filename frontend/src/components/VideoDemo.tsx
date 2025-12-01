import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import videoSrc from '../assets/video.mp4';

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
          className="flex justify-center items-center"
        >
          {/* iPhone Frame */}
          <div className="relative w-full max-w-[300px]">
            {/* Outer Frame - Dark Metallic Border */}
            <div
              className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[44px] p-2.5 shadow-2xl"
              style={{ borderRadius: '44px' }}
            >
              {/* Inner Shadow for Realism */}
              <div className="absolute inset-0 rounded-[44px] shadow-[inset_0_0_20px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none" />
              
              {/* Screen Container */}
              <div className="relative bg-black rounded-[38px] overflow-hidden" style={{ borderRadius: '38px' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-[101px] h-[24px] bg-black rounded-b-[16px] flex items-center justify-center">
                  {/* Speaker */}
                  <div className="w-[45px] h-[5px] bg-[#1a1a1a] rounded-full" />
                  {/* Camera */}
                  <div className="absolute right-[12px] w-[10px] h-[10px] bg-[#1a1a1a] rounded-full border border-[#2a2a2a]" />
                </div>

                {/* Video Container with Inner Rounded Corners */}
                <div 
                  className="relative w-full aspect-[9/19.5] overflow-hidden"
                  style={{ borderRadius: '38px' }}
                >
                  {/* Subtle Inner Shadow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] pointer-events-none z-10" />
                  
                  {/* Video Element */}
                  <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '38px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;

