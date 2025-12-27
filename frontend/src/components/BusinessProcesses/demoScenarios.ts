import type { DemoScenario } from '../WhatsAppDemo/WhatsAppInterface';

/**
 * Demo scenarios for each business process.
 * These will be filled with specific demo data later.
 */

export type ProcessKey =
  | 'leadCapture'
  | 'appointmentScheduling'
  | 'customerSupport'
  | 'sales'
  | 'crmUpdate'
  | 'onboarding'
  | 'inventory'
  | 'followUps'
  | 'invoices';

/**
 * Placeholder demo scenarios for each business process.
 * Replace these with actual demo data when ready.
 */
export const processDemoScenarios: Record<ProcessKey, DemoScenario[]> = {
  leadCapture: [
    {
      title: 'לקוח פונה עם צורך כללי',
      messages: [
        { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' }
      ]
    },
    {
      title: 'הבוט ממקד את הצורך - בלי בילבול',
      messages: [
        { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' },
        {
          type: 'bot_buttons',
          text: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?',
          time: '16:39',
          buttons: [
            { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
            { id: 'category_rotary', title: 'מקדחה רוטטת' },
            { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
          ]
        }
      ]
    },
    {
      title: 'הצגת מוצר נבחר - בלי קטלוג עמוס',
      messages: [
        { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' },
        {
          type: 'bot_buttons',
          text: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?',
          time: '16:39',
          buttons: [
            { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
            { id: 'category_rotary', title: 'מקדחה רוטטת' },
            { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
          ]
        },
        { type: 'user_reply_selection', replyToText: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?', value: 'מקדחה רוטטת', choiceId: 'category_rotary', source: 'button', time: '16:40' },
        {
          type: 'bot_buttons',
          text: 'מעולה.\nיש לנו מספר דגמים מקצועיים של DeWALT.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות\nמתאים לעבודות קשות ושימוש יומיומי',
          time: '16:40',
          buttons: [
            { id: 'action_product_page', title: 'לראות את דף המוצר באתר' },
            { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' }
          ]
        }
      ]
    },
    {
      title: 'הפניה לאתר - שליטה מלאה במחיר',
      messages: [
        { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' },
        {
          type: 'bot_buttons',
          text: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?',
          time: '16:39',
          buttons: [
            { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
            { id: 'category_rotary', title: 'מקדחה רוטטת' },
            { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
          ]
        },
        { type: 'user_reply_selection', replyToText: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?', value: 'מקדחה רוטטת', choiceId: 'category_rotary', source: 'button', time: '16:40' },
        {
          type: 'bot_buttons',
          text: 'מעולה.\nיש לנו מספר דגמים מקצועיים של DeWALT.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות\nמתאים לעבודות קשות ושימוש יומיומי',
          time: '16:40',
          buttons: [
            { id: 'action_product_page', title: 'לראות את דף המוצר באתר' },
            { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' }
          ]
        },
        { type: 'user_reply_selection', replyToText: 'מעולה.\nיש לנו מספר דגמים מקצועיים של DeWALT.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות\nמתאים לעבודות קשות ושימוש יומיומי', value: 'לראות את דף המוצר באתר', choiceId: 'action_product_page', source: 'button', time: '16:41' },
        {
          type: 'bot_link',
          text: 'בשמחה.\nזה דף המוצר באתר עם כל המפרט:',
          time: '16:41',
          linkPreview: {
            url: 'https://www.electroslil.co.il/product/makdehat-rutata-dcd996p2',
            title: 'מברגה / מקדחה רוטטת DeWALT DCD996P2',
            description: 'מברגה / מקדחה רוטטת 18V XRP, כולל 2 סוללות, מתאים לעבודות קשות ושימוש יומיומי',
            image: 'https://www.electroslil.co.il/images/itempics/dcd996p3_05062023135555_large.jpg'
          },
          buttons: [
            { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' },
            { id: 'action_back', title: 'חזרה' }
          ]
        }
      ]
    },
    {
      title: 'מעבר לנציג - זרימה מלאה',
      messages: [
        { type: 'user_text', text: 'שלום, אני מעוניין לבדוק אפשרויות משלוח.', time: '16:38' },
        {
          type: 'bot_buttons',
          text: 'בשמחה.\nאיזה מוצר אתה מעוניין להזמין?',
          time: '16:39',
          buttons: [
            { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
            { id: 'category_rotary', title: 'מקדחה רוטטת' },
            { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
          ]
        },
        { type: 'user_reply_selection', replyToText: 'בשמחה.\nאיזה מוצר אתה מעוניין להזמין?', value: 'מקדחה רוטטת', choiceId: 'category_rotary', source: 'button', time: '16:40' },
        {
          type: 'bot_buttons',
          text: 'מעולה.\nיש לנו מספר דגמים מקצועיים.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות',
          time: '16:40',
          buttons: [
            { id: 'action_product_page', title: 'לראות את דף המוצר באתר' },
            { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' }
          ]
        },
        { type: 'user_reply_selection', replyToText: 'מעולה.\nיש לנו מספר דגמים מקצועיים.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות', value: 'לקבל הצעת מחיר מנציג', choiceId: 'action_quote_request', source: 'button', time: '16:41' },
        { type: 'bot_text', text: 'מצוין.\nלצורך הצעת מחיר מדויקת, באיזו עיר אתה נמצא?', time: '16:41' },
        { type: 'user_text', text: 'תל אביב', time: '16:42' },
        { type: 'bot_text', text: 'תודה.\nמחבר אותך לנציג שיאשר זמינות, מחיר ואפשרויות משלוח.\nרגע אחד…', time: '16:42' },
        { type: 'bot_text', text: 'היי, אני דני מאלקטרו סליל.\nשמח לעזור - בודק זמינות ומכין הצעת מחיר מסודרת עם אפשרויות משלוח.', time: '16:43' }
      ]
    }
  ],
  appointmentScheduling: [
    {
      title: 'Appointment Scheduling Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
  customerSupport: [
    {
      title: 'Customer Support Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
  sales: [
    {
      title: 'Sales Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
  crmUpdate: [
    {
      title: 'CRM Update Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
  onboarding: [
    {
      title: 'Onboarding Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
  inventory: [
    {
      title: 'Inventory Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
  followUps: [
    {
      title: 'Follow-ups Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
  invoices: [
    {
      title: 'Invoices Demo',
      messages: [
        {
          type: 'bot_text',
          text: 'Hello! Welcome to our service. How can we help you today?',
          time: '10:00',
        },
      ],
    },
  ],
};

