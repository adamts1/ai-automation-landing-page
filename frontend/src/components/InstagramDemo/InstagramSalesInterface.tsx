import { useState, useRef, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { ArrowRight, Info, Send } from 'lucide-react';
import type { Message } from '../WhatsAppDemo/WhatsAppInterface';

/**
 * Instagram DM Interface Component
 * 
 * This component simulates an Instagram Direct Messages conversation screen
 * for sales demos and presentations, using WhatsApp-style message types.
 * 
 * It does NOT connect to Instagram APIs - it's purely for visual demonstration.
 */

export interface InstagramSalesInterfaceProps {
  scenarios: Message[][];
  brandName?: string;
  brandAvatar?: string;
  statusText?: string;
  showNavigation?: boolean;
  showDots?: boolean;
  showCaption?: boolean;
}

/**
 * Instagram Sales Interface Component
 * 
 * Displays a mobile Instagram DM conversation for sales demonstrations.
 * Uses WhatsApp message types (bot_text, bot_buttons, user_reply_selection, user_text, bot_link)
 * to match the exact behavior of WhatsApp demos, including reply/quote functionality.
 * 
 * Features:
 * - Mobile-first design with Instagram-like styling
 * - WhatsApp-style message types with reply/quote
 * - Button quick replies (chips)
 * - RTL support for Hebrew
 * - Matches WhatsApp demo proportions exactly
 * - Multi-scenario navigation with arrows and dots
 */
export const InstagramSalesInterface: FC<InstagramSalesInterfaceProps> = ({
  scenarios,
  brandName = 'Brand Name',
  brandAvatar,
  statusText = 'Active now',
  showNavigation = true,
  showDots = true,
  showCaption = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : scenarios.length - 1));
  }, [scenarios.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < scenarios.length - 1 ? prev + 1 : 0));
  }, [scenarios.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation (reversed for RTL)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToPrevious(); // Reversed for RTL
      } else if (e.key === 'ArrowLeft') {
        goToNext(); // Reversed for RTL
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Scroll to bottom when slide changes
  useEffect(() => {
    if (chatAreaRef.current) {
      setTimeout(() => {
        if (chatAreaRef.current) {
          chatAreaRef.current.scrollTo({
            top: chatAreaRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [currentIndex]);

  const currentMessages = scenarios[currentIndex] || [];

  /**
   * Render message bubble
   * 
   * Supports WhatsApp message types:
   * - bot_text: Bot text message
   * - bot_buttons: Bot message with button options
   * - bot_link: Bot message with link preview
   * - user_reply_selection: User's button selection with reply/quote
   * - user_text: User's free text message
   */
  const renderMessage = (message: Message, idx: number) => {
    // Determine if message is from customer or bot
    const isCustomer = message.type === 'user_reply_selection' || message.type === 'user_text';
    
    // Track selected button IDs to hide them in subsequent messages
    const selectedButtonIds = new Set<string>();
    for (let i = 0; i < idx; i++) {
      const prevMsg = currentMessages[i];
      if (prevMsg.type === 'user_reply_selection' && prevMsg.choiceId) {
        selectedButtonIds.add(prevMsg.choiceId);
      }
    }

    return (
      <div key={idx} className={`flex ${isCustomer ? 'justify-end' : 'justify-start'} mb-2`}>
        {message.type === 'user_reply_selection' ? (
          // User reply selection - render as Instagram reply style (similar to WhatsApp quote)
          <div className="max-w-[75%]">
            <div className="bg-gradient-to-r from-[#0095F6] to-[#1877F2] text-white rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm">
              {/* Quoted message header (Instagram-style reply) */}
              {message.replyToText && (
                <div className="mb-1.5 pb-1.5 border-b border-white/30">
                  <div className="flex items-start gap-1.5">
                    {/* Vertical accent line (Instagram style) */}
                    <div className="w-0.5 bg-white/60 rounded-full mt-0.5 flex-shrink-0" style={{ minHeight: '20px' }}></div>
                    {/* Quoted text */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-white/90 line-clamp-2 break-words">
                        {message.replyToText}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Selected value */}
              {message.value && (
                <div className="text-xs whitespace-pre-line break-words">
                  {message.value}
                </div>
              )}
            </div>
          </div>
        ) : (
          // Bot message or user text
          <div className="max-w-[75%]">
            {message.type === 'user_text' ? (
              // User text message (Instagram blue gradient)
              <div className="bg-gradient-to-r from-[#0095F6] to-[#1877F2] text-white rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm">
                {message.text && (
                  <div className="text-xs whitespace-pre-line break-words">
                    {message.text}
                  </div>
                )}
              </div>
            ) : (
              // Bot message (gray background)
              <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm">
                {message.text && (
                  <div className="text-xs whitespace-pre-line break-words">
                    {message.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                      part.match(/^https?:\/\//) ? (
                        <span key={i} className="text-blue-600 underline break-all">{part}</span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </div>
                )}
                {/* Link Preview (if bot_link) */}
                {message.linkPreview && (
                  <div className="mt-2 pt-2 border-t border-gray-200/50">
                    <a
                      href={message.linkPreview.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg overflow-hidden border border-gray-200 hover:bg-gray-50 transition"
                    >
                      {message.linkPreview.image && (
                        <div className="w-full h-20 bg-gray-100 overflow-hidden flex items-center justify-center">
                          <img
                            src={message.linkPreview.image}
                            alt={message.linkPreview.title}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <div className="p-2">
                        <div className="text-[9px] text-gray-500 mb-0.5 truncate" dir="ltr">{new URL(message.linkPreview.url).hostname}</div>
                        <div className="text-xs font-semibold text-gray-800 mb-0.5 line-clamp-1">{message.linkPreview.title}</div>
                        <div className="text-[10px] text-gray-600 line-clamp-2 leading-tight">{message.linkPreview.description}</div>
                      </div>
                    </a>
                  </div>
                )}
                {/* Quick Reply Buttons - hide after selection (only show unselected buttons) */}
                {(message.type === 'bot_buttons' || message.type === 'bot_link') && message.buttons && message.buttons.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-200/30 space-y-1.5">
                    {message.buttons
                      .filter((button) => !selectedButtonIds.has(button.id))
                      .map((button) => (
                        <div
                          key={button.id}
                          className="bg-white border border-gray-300 rounded-full px-4 py-2 text-xs text-gray-900 font-medium text-center cursor-default shadow-sm"
                          style={{ direction: 'rtl' }}
                        >
                          {button.title}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const content = (
    <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden" style={{ direction: 'rtl' }}>
      {/* Instagram DM Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-gray-200 bg-white relative z-10">
        <button
          className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Back"
        >
          <ArrowRight className="w-5 h-5 text-gray-900" />
        </button>

        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          {/* Brand Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {brandAvatar ? (
              <img
                src={brandAvatar}
                alt={brandName}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-white font-semibold text-sm">
                {brandName.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-gray-900 truncate">{brandName}</h2>
            <p className="text-[10px] text-gray-500">{statusText}</p>
          </div>
        </div>

        {/* Instagram info icon */}
        <button
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Info"
        >
          <Info className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      {/* Chat Area */}
      <div ref={chatAreaRef} className="flex-1 overflow-y-auto bg-white px-3 py-4">
        {currentMessages.map((message, idx) => renderMessage(message, idx))}
      </div>

      {/* Bottom Input Area (Disabled - Demo Only) */}
      <div className="border-t border-gray-200 bg-white px-3 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200">
            <input
              type="text"
              placeholder="Message..."
              disabled
              className="w-full bg-transparent text-xs text-gray-500 placeholder-gray-400 outline-none"
              style={{ direction: 'rtl' }}
            />
          </div>
          <button
            disabled
            className="p-1.5 text-gray-400 cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  // Match WhatsApp proportions exactly: max-w-[288px] md:max-w-[336px], h-[544px] md:h-[624px]
  return (
    <div className="max-w-5xl mx-auto">
      {/* Phone Viewport Container */}
      <div className="relative mx-auto max-w-[288px] md:max-w-[336px]">
        {/* Navigation Arrows - Outside Phone (Desktop only) */}
        {showNavigation && scenarios.length > 1 && (
          <>
            <button
              onClick={goToNext}
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-14 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="הבא"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-14 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="קודם"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div className="relative bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden h-[544px] md:h-[624px]">
          {content}
        </div>

        {/* Step Indicators (Dots) with Mobile Arrows - Below Phone */}
        {showDots && scenarios.length > 1 && (
          <div className="relative flex items-center justify-center gap-2 mt-4">
            {/* Mobile Navigation Arrows - On sides of dots */}
            {showNavigation && (
              <>
                <button
                  onClick={goToNext}
                  className="md:hidden absolute left-0 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  aria-label="הבא"
                >
                  <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToPrevious}
                  className="md:hidden absolute right-0 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  aria-label="קודם"
                >
                  <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            {/* Dots */}
            <div className="flex justify-center gap-2">
              {scenarios.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-blue-600 w-6' : 'bg-slate-300'
                    }`}
                  aria-label={`מסך ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Caption (Optional) */}
        {showCaption && scenarios.length > 1 && (
          <div className="text-center mt-2 text-xs text-slate-600">
            {currentIndex + 1} / {scenarios.length}
          </div>
        )}
      </div>
    </div>
  );
};
