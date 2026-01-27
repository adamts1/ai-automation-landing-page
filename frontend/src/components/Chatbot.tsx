import { useState, useRef, useEffect } from 'react';
import type { FC, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// ============================================================================
// Types & Interfaces
// ============================================================================

/**
 * Represents a single message in the chat conversation
 */
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

/**
 * Request body format for n8n webhook
 */
interface ChatbotRequest {
  action: 'sendMessage';
  sessionId: string;
  chatInput: string;
}

/**
 * Response format from n8n webhook
 */
interface ChatbotResponse {
  output: string;
  sessionId: string;
}

// ============================================================================
// Constants
// ============================================================================

/** n8n webhook URL for chatbot API */
const CHATBOT_WEBHOOK_URL: string = 'https://tsityat.app.n8n.cloud/webhook/faad1fce-b241-4234-a055-848ded3770f3/chat';

/** LocalStorage key for storing session ID */
const SESSION_ID_STORAGE_KEY: string = 'chatbot_session_id';

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generates or retrieves a unique session ID for the user
 * Session ID is stored in localStorage to persist across page refreshes
 * @returns Unique session ID string
 */
const generateSessionId = (): string => {
  // Try to get existing session ID from localStorage
  const storedSessionId: string | null = localStorage.getItem(SESSION_ID_STORAGE_KEY);
  
  if (storedSessionId) {
    return storedSessionId;
  }
  
  // Generate new session ID: user-{timestamp}-{random}
  const timestamp: number = Date.now();
  const randomString: string = Math.random().toString(36).substr(2, 9);
  const newSessionId: string = `user-${timestamp}-${randomString}`;
  
  // Store in localStorage for persistence
  localStorage.setItem(SESSION_ID_STORAGE_KEY, newSessionId);
  
  return newSessionId;
};

// ============================================================================
// Main Component
// ============================================================================

/**
 * Chatbot component that provides an AI-powered chat interface
 * Integrates with n8n webhook for AI responses
 */
interface ChatbotProps {
  isBusinessProcessModalOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Chatbot: FC<ChatbotProps> = ({ 
  // isBusinessProcessModalOpen = false,
  isOpen: externalIsOpen,
  onOpenChange
}) => {
  // ========================================================================
  // Translation Hook
  // ========================================================================
  const { t } = useTranslation();

  // ========================================================================
  // State Management
  // ========================================================================
  
  /** Unique session ID for maintaining conversation context */
  const [sessionId] = useState<string>(() => generateSessionId());
  
  /** Internal state for isOpen if not controlled externally */
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(false);
  
  /** Controls whether the chat panel is open or closed */
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  
  /** Function to update isOpen state */
  const setIsOpen = (open: boolean): void => {
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalIsOpen(open);
    }
  };
  
  /** Array of all messages in the conversation */
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.welcome') || 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  /** Current input value in the message input field */
  const [inputValue, setInputValue] = useState<string>('');
  
  /** Loading state while waiting for AI response */
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ========================================================================
  // Refs
  // ========================================================================
  
  /** Reference to the messages container for auto-scrolling */
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  /** Reference to the input field for focusing */
  const inputRef = useRef<HTMLInputElement>(null);

  // ========================================================================
  // Effects
  // ========================================================================
  
  /**
   * Auto-scrolls to bottom and focuses input when chat opens or new messages arrive
   */
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      
      // Focus input when chat opens (with slight delay for animation)
      const focusTimeout: number = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      
      return () => clearTimeout(focusTimeout);
    }
  }, [isOpen, messages]);

  // ========================================================================
  // Helper Functions
  // ========================================================================
  
  /**
   * Scrolls the messages container to the bottom
   */
  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ========================================================================
  // Event Handlers
  // ========================================================================
  
  /**
   * Handles input field changes
   * @param e - Change event from input field
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  /**
   * Sends a message to the chatbot API and handles the response
   * @param e - Form submit event
   */
  const sendMessage = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Prevent sending empty messages or while loading
    if (!inputValue.trim() || isLoading) {
      return;
    }

    // Create user message object
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    // Add user message to chat immediately
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Prepare request body according to n8n webhook format
      const requestBody: ChatbotRequest = {
        action: 'sendMessage',
        sessionId: sessionId,
        chatInput: userMessage.text,
      };

      // Send request to n8n webhook
      const response: Response = await fetch(CHATBOT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Handle HTTP errors
      if (!response.ok) {
        let errorMessage: string = `Server error (${response.status})`;
        
        // Try to extract error details from response
        try {
          const errorData: string = await response.text();
          
          // Try to parse as JSON
          try {
            const errorJson: { message?: string; error?: string } = JSON.parse(errorData);
            errorMessage = errorJson.message || errorJson.error || errorMessage;
          } catch {
            // If not JSON, use the text (truncated to 100 chars)
            if (errorData) {
              errorMessage = `Server error: ${errorData.substring(0, 100)}`;
            }
          }
        } catch (e) {
          console.error('Error reading error response:', e);
        }

        throw new Error(errorMessage);
      }

      // Parse successful response
      const data: ChatbotResponse = await response.json();
      
      // Extract bot response text (with fallbacks)
      const botText: string = 
        data.output || 
        (data as unknown as { message?: string }).message || 
        (data as unknown as { text?: string }).text || 
        t('chatbot.error') || 
        'I apologize, but I encountered an error. Please try again.';

      // Create bot message object
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date(),
      };

      // Add bot response to chat
      setMessages((prev: Message[]) => [...prev, botResponse]);
      
    } catch (error: unknown) {
      console.error('Chatbot error:', error);
      
      // Determine appropriate error message based on error type
      let errorText: string = t('chatbot.error') || 'I apologize, but I encountered an error. Please try again.';
      
      if (error instanceof Error) {
        const errorMessage: string = error.message;
        
        if (errorMessage.includes('500')) {
          errorText = t('chatbot.serverError') || 'The server is experiencing issues. Please try again in a moment.';
        } else if (errorMessage.includes('404')) {
          errorText = t('chatbot.notFound') || 'The chat service is not available. Please contact us directly.';
        } else if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
          errorText = t('chatbot.networkError') || 'Network error. Please check your connection and try again.';
        } else if (errorMessage && errorMessage.length < 200) {
          // Show user-friendly error messages (if not too long)
          errorText = errorMessage;
        }
      }
      
      // Create error message object
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      // Add error message to chat
      setMessages((prev: Message[]) => [...prev, errorMessage]);
      
    } finally {
      // Always reset loading state
      setIsLoading(false);
    }
  };

  /**
   * Opens the chat panel
   */
  // const handleOpenChat = (): void => {
  //   setIsOpen(true);
  // };

  /**
   * Closes the chat panel
   */
  const handleCloseChat = (): void => {
    setIsOpen(false);
  };

  // ========================================================================
  // Render
  // ========================================================================
  
  return (
    <>
      {/* Chat Interface - Slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseChat}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              aria-hidden="true"
            />

            {/* Chat Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#0D1117] border-l border-[#30363D] shadow-2xl z-[70] flex flex-col"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#30363D] bg-[#161B22]">
                <div className="flex items-center gap-3">
                  {/* Bot Avatar */}
                  <div className="w-10 h-10 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] rounded-full flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  
                  {/* Bot Info */}
                  <div>
                    <h3 className="text-white font-semibold">
                      {t('chatbot.title') || 'AI Assistant'}
                    </h3>
                    <p className="text-xs text-[#8B949E]">
                      {t('chatbot.subtitle') || 'We\'re here to help'}
                    </p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={handleCloseChat}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#21262D] transition-colors text-[#C9D1D9]"
                  aria-label={t('chatbot.close') || 'Close chat'}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message: Message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {/* Bot Avatar (only for bot messages) */}
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}
                    
                    {/* Message Bubble */}
                    <div
                      className={`max-w-[75%] rounded-lg px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] text-white'
                          : 'bg-[#161B22] border border-[#30363D] text-[#C9D1D9]'
                      }`}
                    >
                      {/* Message Text */}
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      
                      {/* Message Timestamp */}
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    
                    {/* User Avatar (only for user messages) */}
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-[#21262D] rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-[#C9D1D9]" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-2">
                      <Loader2 size={16} className="animate-spin text-[#58A6FF]" />
                    </div>
                  </motion.div>
                )}
                
                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form
                onSubmit={sendMessage}
                className="p-4 border-t border-[#30363D] bg-[#161B22]"
              >
                <div className="flex gap-2">
                  {/* Message Input */}
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={t('chatbot.inputPlaceholder') || 'Type your message...'}
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg focus:outline-none focus:border-[#58A6FF] transition-colors text-white placeholder:text-[#8B949E] disabled:opacity-50"
                  />
                  
                  {/* Send Button */}
                  <motion.button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] text-white rounded-lg hover:shadow-lg hover:shadow-[#58A6FF]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    aria-label={t('chatbot.send') || 'Send message'}
                  >
                    {isLoading ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <Send size={20} />
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
