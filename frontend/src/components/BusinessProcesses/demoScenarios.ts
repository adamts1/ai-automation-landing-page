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
  customerSupport: [
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
        { type: 'bot_text', text: 'היי, אני דני מאדם בניה.\nשמח לעזור - בודק זמינות ומכין הצעת מחיר מסודרת עם אפשרויות משלוח.', time: '16:43' }
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
  leadCapture: [
    {
      title: 'leadCapture.realEstateInvestor - זיהוי והערכת משקיעי נדל״ן',
      messages: [
        // 1) Entry point
        { 
          type: 'user_text', 
          text: 'היי, מחפש השקעה בנדל״ן', 
          time: '14:20' 
        },
        {
          type: 'bot_buttons',
          text: 'מעולה 👍\nכדי לדייק ולהעביר אותך לאיש הנכון,\nאשאל כמה שאלות קצרות.',
          time: '14:21',
          buttons: [
            { id: 'start_qualification', title: 'להתחיל' },
            { id: 'talk_to_agent', title: 'לדבר עם סוכן' }
          ]
        },
        // 2) Investment type
        { 
          type: 'user_reply_selection', 
          replyToText: 'מעולה 👍\nכדי לדייק ולהעביר אותך לאיש הנכון,\nאשאל כמה שאלות קצרות.', 
          value: 'להתחיל', 
          choiceId: 'start_qualification', 
          source: 'button', 
          time: '14:21' 
        },
        {
          type: 'bot_buttons',
          text: 'איזה סוג השקעה מעניין אותך?',
          time: '14:22',
          buttons: [
            { id: 'investment_type_yield', title: 'תשואה שוטפת' },
            { id: 'investment_type_appreciation', title: 'השבחה' },
            { id: 'investment_type_combined', title: 'שילוב' },
            { id: 'investment_type_exploring', title: 'עדיין בודק' }
          ]
        },
        // 3) Budget range
        { 
          type: 'user_reply_selection', 
          replyToText: 'איזה סוג השקעה מעניין אותך?', 
          value: 'תשואה שוטפת', 
          choiceId: 'investment_type_yield', 
          source: 'button', 
          time: '14:23' 
        },
        {
          type: 'bot_buttons',
          text: 'סדר גודל של תקציב?',
          time: '14:23',
          buttons: [
            { id: 'budget_under_1_5', title: 'עד 1.5 מ׳' },
            { id: 'budget_1_5_to_2_5', title: '1.5–2.5 מ׳' },
            { id: 'budget_2_5_to_4', title: '2.5–4 מ׳' },
            { id: 'budget_over_4', title: 'מעל 4 מ׳' }
          ]
        },
        // 4) Area preference (free text)
        { 
          type: 'user_reply_selection', 
          replyToText: 'סדר גודל של תקציב?', 
          value: '2.5–4 מ׳', 
          choiceId: 'budget_2_5_to_4', 
          source: 'button', 
          time: '14:24' 
        },
        {
          type: 'bot_text',
          text: 'יש אזור שמעניין אותך במיוחד?\n(אפשר לכתוב חופשי)',
          time: '14:24'
        },
        { 
          type: 'user_text', 
          text: 'מרכז, אזורים עם ביקוש להשכרה', 
          time: '14:25' 
        },
        // 5) Timing
        {
          type: 'bot_buttons',
          text: 'מתי מתוכננת ההשקעה?',
          time: '14:25',
          buttons: [
            { id: 'timing_immediate', title: 'מיידי' },
            { id: 'timing_near_future', title: 'בחודשים הקרובים' },
            { id: 'timing_this_year', title: 'בשנה הקרובה' },
            { id: 'timing_exploring', title: 'רק בוחן אפשרויות' }
          ]
        },
        // 6) Readiness level
        { 
          type: 'user_reply_selection', 
          replyToText: 'מתי מתוכננת ההשקעה?', 
          value: 'בחודשים הקרובים', 
          choiceId: 'timing_near_future', 
          source: 'button', 
          time: '14:26' 
        },
        {
          type: 'bot_buttons',
          text: 'כדי שנדע איך לגשת אליך —\nאיפה אתה נמצא בתהליך?',
          time: '14:26',
          buttons: [
            { id: 'readiness_ready', title: 'מוכן להתקדם' },
            { id: 'readiness_need_offers', title: 'צריך הצעות רלוונטיות' },
            { id: 'readiness_info_gathering', title: 'רק אוסף מידע' }
          ]
        },
        // 7) Capture & handoff
        { 
          type: 'user_reply_selection', 
          replyToText: 'כדי שנדע איך לגשת אליך —\nאיפה אתה נמצא בתהליך?', 
          value: 'מוכן להתקדם', 
          choiceId: 'readiness_ready', 
          source: 'button', 
          time: '14:27' 
        },
        {
          type: 'bot_text',
          text: 'תודה 👍\nמעביר לסוכן עם כל הפרטים.',
          time: '14:27'
        },
        // 8) Human agent message (first touch)
        {
          type: 'bot_text',
          text: 'היי, קיבלתי את הפרטים שלך.\nיש לי כמה כיוונים שיכולים להתאים בדיוק למה שחיפשת.\nמתי נוח שנדבר?',
          time: '14:28'
        }
      ]
    }
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

