/**
 * Mock Sales Messages for Instagram Sales Demo
 * 
 * This file contains example message arrays for sales demonstrations.
 * Replace with actual sales flow data when integrating.
 */

import type { InstagramMessage } from './InstagramSalesInterface';

/**
 * Example: Simple product inquiry flow
 * 
 * Demonstrates:
 * - Welcome message
 * - Product questions
 * - Button quick replies
 * - Call-to-action
 */
export const simpleProductInquiryFlow: InstagramMessage[] = [
  {
    id: '1',
    sender: 'bot',
    type: 'text',
    content: 'שלום! 👋\nשמחים לראות אותך כאן.\nאיך אפשר לעזור לך היום?'
  },
  {
    id: '2',
    sender: 'bot',
    type: 'buttons',
    content: 'מה מעניין אותך?',
    buttons: ['מוצרים', 'מחירים', 'צור קשר']
  }
];

/**
 * Example: E-commerce checkout flow
 * 
 * Demonstrates:
 * - Product selection
 * - Size/option selection via buttons
 * - System confirmations
 * - Checkout process
 */
export const ecommerceCheckoutFlow: InstagramMessage[] = [
  {
    id: '1',
    sender: 'bot',
    type: 'text',
    content: 'היי! 🛍️\nראיתי שהתעניינת במוצר שלנו.'
  },
  {
    id: '2',
    sender: 'bot',
    type: 'buttons',
    content: 'איזה מידה?',
    buttons: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    sender: 'system',
    type: 'text',
    content: 'Payment confirmed'
  },
  {
    id: '4',
    sender: 'bot',
    type: 'text',
    content: 'הזמנה התקבלה! ✅\nאשלח פרטי מעקב בקרוב.'
  }
];

/**
 * Example: Service booking flow
 * 
 * Demonstrates:
 * - Service introduction
 * - Date/time selection
 * - Confirmation
 */
export const serviceBookingFlow: InstagramMessage[] = [
  {
    id: '1',
    sender: 'bot',
    type: 'text',
    content: 'שלום! רוצה לקבוע תור? 📅'
  },
  {
    id: '2',
    sender: 'bot',
    type: 'buttons',
    content: 'מתי נוח לך?',
    buttons: ['היום', 'מחר', 'השבוע', 'חודש הבא']
  },
  {
    id: '3',
    sender: 'bot',
    type: 'text',
    content: 'מעולה! אני אשלח פרטים נוספים.'
  }
];

/**
 * Example: Lead qualification flow
 * 
 * Demonstrates:
 * - Qualification questions
 * - Multiple button interactions
 * - Lead capture
 */
export const leadQualificationFlow: InstagramMessage[] = [
  {
    id: '1',
    sender: 'bot',
    type: 'text',
    content: 'ברוכים הבאים! 🎯\nכדי לדייק את ההצעה שלנו, כמה שאלות קצרות:'
  },
  {
    id: '2',
    sender: 'bot',
    type: 'buttons',
    content: 'מה התקציב שלך?',
    buttons: ['עד 1000₪', '1000-5000₪', '5000-10000₪', 'מעל 10000₪']
  },
  {
    id: '3',
    sender: 'bot',
    type: 'buttons',
    content: 'מתי תרצה להתחיל?',
    buttons: ['מיידי', 'חודש הקרוב', 'רק בודק אפשרויות']
  },
  {
    id: '4',
    sender: 'bot',
    type: 'text',
    content: 'תודה! נציג שלנו יחזור אליך בהקדם. 👍'
  }
];

/**
 * TODO: Integrate with sales automation flows
 * 
 * Integration points:
 * 1. Replace mock data with real sales flow data
 * 2. Connect button clicks to sales automation triggers
 * 3. Add dynamic content based on user responses
 * 4. Implement state management for multi-step flows
 * 5. Add analytics tracking for demo presentations
 */


