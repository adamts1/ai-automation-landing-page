import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2 } from 'lucide-react';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string; // HTML content
  audioSrc?: string; // Optional audio source
}

export const ContentModal: FC<ContentModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  audioSrc,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioSrc]);

  // Reset audio when modal closes
  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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
                <h2 className="text-2xl sm:text-3xl font-bold text-white gradient-text mb-4">
                  {title}
                </h2>
                
                {/* Audio Player */}
                {audioSrc && (
                  <div className="mt-4 p-4 bg-[#161B22] rounded-lg border border-[#30363D]">
                    <div className="flex items-center gap-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlay}
                        className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 fill-current" />
                        ) : (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        )}
                      </button>

                      {/* Audio Info and Controls */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Volume2 className="w-4 h-4 text-[#58A6FF] flex-shrink-0" />
                          <span className="text-sm text-[#C9D1D9] font-medium">האזנה להדגמה</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="flex items-center gap-2" dir="rtl">
                          <span className="text-xs text-[#8B949E] w-12 text-right">
                            {formatTime(currentTime)}
                          </span>
                          <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="flex-1 h-2 bg-[#30363D] rounded-lg appearance-none cursor-pointer accent-[#58A6FF]"
                            style={{
                              direction: 'rtl',
                              background: `linear-gradient(to left, #58A6FF 0%, #58A6FF ${(currentTime / duration) * 100}%, #30363D ${(currentTime / duration) * 100}%, #30363D 100%)`
                            }}
                          />
                          <span className="text-xs text-[#8B949E] w-12 text-right">
                            {formatTime(duration)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hidden Audio Element */}
                {audioSrc && (
                  <audio ref={audioRef} src={audioSrc} preload="metadata" />
                )}
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
