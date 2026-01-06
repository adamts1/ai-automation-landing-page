import { useState } from 'react';
import type { FC, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { EMAILJS_CONFIG } from '../config/emailjs';
import type { ContactFormData, FormStatus } from '../types';
import Chatbot from './Chatbot';

interface ContactProps {
  isBusinessProcessModalOpen: boolean;
  isChatbotOpen?: boolean;
  onChatbotOpenChange?: (open: boolean) => void;
}

const Contact: FC<ContactProps> = ({ 
  isBusinessProcessModalOpen,
  isChatbotOpen,
  onChatbotOpenChange
}) => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.description,
          to_name: 'AI Automation Team', // You can customize this
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setStatus('success');
      
      // Show success toast
      toast.success(t('contact.form.successToast') || 'Message sent successfully! We\'ll get back to you soon.', {
        duration: 4000,
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: '600',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#10b981',
        },
      });
      
      setFormData({ name: '', email: '', phone: '', description: '' });
      setTimeout(() => setStatus('idle'), 1000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      
      // Show error toast
      toast.error(t('contact.form.errorToast') || 'Failed to send message. Please try again or contact us directly.', {
        duration: 5000,
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: '600',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#ef4444',
        },
      });
      
      setTimeout(() => setStatus('idle'), 1000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#161B22] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#58A6FF] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BC8CFF] rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-[#C9D1D9] max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#C9D1D9]">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg focus:outline-none focus:border-[#58A6FF] transition-colors text-white placeholder:text-[#8B949E]"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#C9D1D9]">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg focus:outline-none focus:border-[#58A6FF] transition-colors text-white placeholder:text-[#8B949E]"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#C9D1D9]">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg focus:outline-none focus:border-[#58A6FF] transition-colors text-white placeholder:text-[#8B949E]"
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2 text-[#C9D1D9]">
                  {t('contact.form.description')}
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg focus:outline-none focus:border-[#58A6FF] transition-colors resize-none text-white placeholder:text-[#8B949E]"
                  placeholder={t('contact.form.descriptionPlaceholder')}
                />
              </div>

              <motion.button
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#58A6FF] to-[#BC8CFF] rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#58A6FF]/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.form.send')}
                    <Send size={20} className="rtl:rotate182" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot 
        isBusinessProcessModalOpen={isBusinessProcessModalOpen}
        isOpen={isChatbotOpen}
        onOpenChange={onChatbotOpenChange}
      />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/+972533807804"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full items-center justify-center text-white shadow-2xl hover:bg-green-600 transition-colors z-50 ${
          isBusinessProcessModalOpen ? 'hidden md:flex' : 'flex'
        }`}
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: '',
          duration: 4000,
          style: {
            borderRadius: '10px',
            padding: '16px',
            fontSize: '16px',
          },
        }}
      />
    </section>
  );
};

export default Contact;

