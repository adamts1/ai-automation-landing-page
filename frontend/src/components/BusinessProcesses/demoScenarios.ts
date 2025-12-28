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
    title: 'התחלת הזמנה',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      }
    ]
  },
  {
    title: 'זיהוי סוג לקוח',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.', value: 'להתחיל הזמנה', choiceId: 'start_order', source: 'button', time: '14:21' },
      {
        type: 'bot_buttons',
        text: 'מי מבצע את ההזמנה?',
        time: '14:21',
        buttons: [
          { id: 'client_contractor', title: 'קבלן' },
          { id: 'client_private', title: 'לקוח פרטי' }
        ]
      }
    ]
  },
  {
    title: 'סוג עבודה',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.', value: 'להתחיל הזמנה', choiceId: 'start_order', source: 'button', time: '14:21' },
      {
        type: 'bot_buttons',
        text: 'מי מבצע את ההזמנה?',
        time: '14:21',
        buttons: [
          { id: 'client_contractor', title: 'קבלן' },
          { id: 'client_private', title: 'לקוח פרטי' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מי מבצע את ההזמנה?', value: 'קבלן', choiceId: 'client_contractor', source: 'button', time: '14:22' },
    ]
  },
  {
    title: 'רשימת חומרים',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.', value: 'להתחיל הזמנה', choiceId: 'start_order', source: 'button', time: '14:21' },
      {
        type: 'bot_buttons',
        text: 'מי מבצע את ההזמנה?',
        time: '14:21',
        buttons: [
          { id: 'client_contractor', title: 'קבלן' },
          { id: 'client_private', title: 'לקוח פרטי' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מי מבצע את ההזמנה?', value: 'קבלן', choiceId: 'client_contractor', source: 'button', time: '14:22' },
      { type: 'bot_text', text: 'כתוב לי בבקשה את רשימת החומרים והכמויות\n(אפשר חופשי, בשורות)', time: '14:23' },
      { type: 'user_text', text: 'סיליקון ניטרלי Soudal - 20 יח׳\nחול ים - 3 קוב\nחצץ 4-8 - 2 קוב\nמלט אפור - 40 שק\nבלוקים 20 - 120 יח׳\nרשת טיח - 10 גלילים', time: '14:24' }
    ]
  },
  {
    title: 'אפשרויות משלוח',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.', value: 'להתחיל הזמנה', choiceId: 'start_order', source: 'button', time: '14:21' },
      {
        type: 'bot_buttons',
        text: 'מי מבצע את ההזמנה?',
        time: '14:21',
        buttons: [
          { id: 'client_contractor', title: 'קבלן' },
          { id: 'client_private', title: 'לקוח פרטי' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מי מבצע את ההזמנה?', value: 'קבלן', choiceId: 'client_contractor', source: 'button', time: '14:22' },
      { type: 'bot_text', text: 'כתוב לי בבקשה את רשימת החומרים והכמויות\n(אפשר חופשי, בשורות)', time: '14:23' },
      { type: 'user_text', text: 'סיליקון ניטרלי Soudal - 20 יח׳\nחול ים - 3 קוב\nחצץ 4-8 - 2 קוב\nמלט אפור - 40 שק\nבלוקים 20 - 120 יח׳\nרשת טיח - 10 גלילים', time: '14:24' },
      {
        type: 'bot_buttons',
        text: 'איך תרצה לקבל את החומרים?',
        time: '14:25',
        buttons: [
          { id: 'delivery_pickup', title: 'איסוף עצמי' },
          { id: 'delivery_site', title: 'משלוח לאתר' }
        ]
      }
    ]
  },
  {
    title: 'פרטי משלוח',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.', value: 'להתחיל הזמנה', choiceId: 'start_order', source: 'button', time: '14:21' },
      {
        type: 'bot_buttons',
        text: 'מי מבצע את ההזמנה?',
        time: '14:21',
        buttons: [
          { id: 'client_contractor', title: 'קבלן' },
          { id: 'client_private', title: 'לקוח פרטי' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מי מבצע את ההזמנה?', value: 'קבלן', choiceId: 'client_contractor', source: 'button', time: '14:22' },
      { type: 'bot_text', text: 'כתוב לי בבקשה את רשימת החומרים והכמויות\n(אפשר חופשי, בשורות)', time: '14:23' },
      { type: 'user_text', text: 'סיליקון ניטרלי Soudal - 20 יח׳\nחול ים - 3 קוב\nחצץ 4-8 - 2 קוב\nמלט אפור - 40 שק\nבלוקים 20 - 120 יח׳\nרשת טיח - 10 גלילים', time: '14:24' },
      {
        type: 'bot_buttons',
        text: 'איך תרצה לקבל את החומרים?',
        time: '14:25',
        buttons: [
          { id: 'delivery_pickup', title: 'איסוף עצמי' },
          { id: 'delivery_site', title: 'משלוח לאתר' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'איך תרצה לקבל את החומרים?', value: 'משלוח לאתר', choiceId: 'delivery_site', source: 'button', time: '14:26' },
      { type: 'bot_text', text: 'לאיזו כתובת לשלוח ומתי זה צריך להגיע?', time: '14:26' },
      { type: 'user_text', text: 'אתר בנייה - אזור תעשייה חולון\nצריך מחר עד 09:00', time: '14:27' }
    ]
  },
  {
    title: 'סיכום ומעבר לנציג',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.', value: 'להתחיל הזמנה', choiceId: 'start_order', source: 'button', time: '14:21' },
      {
        type: 'bot_buttons',
        text: 'מי מבצע את ההזמנה?',
        time: '14:21',
        buttons: [
          { id: 'client_contractor', title: 'קבלן' },
          { id: 'client_private', title: 'לקוח פרטי' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מי מבצע את ההזמנה?', value: 'קבלן', choiceId: 'client_contractor', source: 'button', time: '14:22' },
      { type: 'bot_text', text: 'כתוב לי בבקשה את רשימת החומרים והכמויות\n(אפשר חופשי, בשורות)', time: '14:23' },
      { type: 'user_text', text: 'סיליקון ניטרלי Soudal - 20 יח׳\nחול ים - 3 קוב\nחצץ 4-8 - 2 קוב\nמלט אפור - 40 שק\nבלוקים 20 - 120 יח׳\nרשת טיח - 10 גלילים', time: '14:24' },
      {
        type: 'bot_buttons',
        text: 'איך תרצה לקבל את החומרים?',
        time: '14:25',
        buttons: [
          { id: 'delivery_pickup', title: 'איסוף עצמי' },
          { id: 'delivery_site', title: 'משלוח לאתר' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'איך תרצה לקבל את החומרים?', value: 'משלוח לאתר', choiceId: 'delivery_site', source: 'button', time: '14:26' },
      { type: 'bot_text', text: 'לאיזו כתובת לשלוח ומתי זה צריך להגיע?', time: '14:26' },
      { type: 'user_text', text: 'אתר בנייה - אזור תעשייה חולון\nצריך מחר עד 09:00', time: '14:27' },
      { type: 'bot_text', text: 'סיכום ההזמנה 👇\n• סיליקון ניטרלי Soudal - 20 יח׳\n• חול ים - 3 קוב\n• חצץ 4-8 - 2 קוב\n• מלט אפור - 40 שק\n• בלוקים 20 - 120 יח׳\n• רשת טיח - 10 גלילים\n• משלוח - חולון\n• דחיפות: מחר עד 09:00\n\nמעביר לנציג לאישור ושליחה.', time: '14:28' }
    ]
  },
  {
    title: 'נציג אנושי מאשר ושולח',
    messages: [
      { type: 'user_text', text: 'שלום, צריך להזמין חומרים לאתר', time: '14:20' },
      {
        type: 'bot_buttons',
        text: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.',
        time: '14:20',
        buttons: [
          { id: 'start_order', title: 'להתחיל הזמנה' },
          { id: 'talk_agent', title: 'לדבר עם נציג' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מעולה 👍\nנבנה הזמנה מסודרת כדי שנוכל לטפל בה מהר.', value: 'להתחיל הזמנה', choiceId: 'start_order', source: 'button', time: '14:21' },
      {
        type: 'bot_buttons',
        text: 'מי מבצע את ההזמנה?',
        time: '14:21',
        buttons: [
          { id: 'client_contractor', title: 'קבלן' },
          { id: 'client_private', title: 'לקוח פרטי' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'מי מבצע את ההזמנה?', value: 'קבלן', choiceId: 'client_contractor', source: 'button', time: '14:22' },
      { type: 'bot_text', text: 'כתוב לי בבקשה את רשימת החומרים והכמויות\n(אפשר חופשי, בשורות)', time: '14:23' },
      { type: 'user_text', text: 'סיליקון ניטרלי Soudal - 20 יח׳\nחול ים - 3 קוב\nחצץ 4-8 - 2 קוב\nמלט אפור - 40 שק\nבלוקים 20 - 120 יח׳\nרשת טיח - 10 גלילים', time: '14:24' },
      {
        type: 'bot_buttons',
        text: 'איך תרצה לקבל את החומרים?',
        time: '14:25',
        buttons: [
          { id: 'delivery_pickup', title: 'איסוף עצמי' },
          { id: 'delivery_site', title: 'משלוח לאתר' }
        ]
      },
      { type: 'user_reply_selection', replyToText: 'איך תרצה לקבל את החומרים?', value: 'משלוח לאתר', choiceId: 'delivery_site', source: 'button', time: '14:26' },
      { type: 'bot_text', text: 'לאיזו כתובת לשלוח ומתי זה צריך להגיע?', time: '14:26' },
      { type: 'user_text', text: 'אתר בנייה - אזור תעשייה חולון\nצריך מחר עד 09:00', time: '14:27' },
      { type: 'bot_text', text: 'סיכום ההזמנה 👇\n• סיליקון ניטרלי Soudal - 20 יח׳\n• חול ים - 3 קוב\n• חצץ 4-8 - 2 קוב\n• מלט אפור - 40 שק\n• בלוקים 20 - 120 יח׳\n• רשת טיח - 10 גלילים\n• משלוח - חולון\n• דחיפות: מחר עד 09:00\n\nמעביר לנציג לאישור ושליחה.', time: '14:28' },
      { type: 'bot_text', text: 'היי, קיבלתי את ההזמנה 👍\nבודק זמינות ומחירים וחוזר אליך עם הצעה מסודרת.', time: '14:29' }
    ]
  }
],
  appointmentScheduling: [
    {
      title: 'כניסה - בקשה לקבוע תור',
      messages: [
        {
          type: 'user_text',
          text: 'היי, רוצה לקבוע תור',
          time: '09:15'
        },
        {
          type: 'bot_buttons',
          text: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          time: '09:15',
          buttons: [
            { id: 'schedule_appointment', title: 'לקביעת תור' },
            { id: 'modify_cancel', title: 'שינוי / ביטול תור' }
          ]
        }
      ]
    },
    {
      title: 'סוג התור',
      messages: [
        {
          type: 'user_text',
          text: 'היי, רוצה לקבוע תור',
          time: '09:15'
        },
        {
          type: 'bot_buttons',
          text: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          time: '09:15',
          buttons: [
            { id: 'schedule_appointment', title: 'לקביעת תור' },
            { id: 'modify_cancel', title: 'שינוי / ביטול תור' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          value: 'לקביעת תור',
          choiceId: 'schedule_appointment',
          source: 'button',
          time: '09:16'
        },
        {
          type: 'bot_buttons',
          text: 'לאיזה סוג תור?',
          time: '09:16',
          buttons: [
            { id: 'appointment_initial', title: 'בדיקה ראשונית' },
            { id: 'appointment_followup', title: 'ביקורת' },
            { id: 'appointment_treatment', title: 'טיפול' },
            { id: 'appointment_consultation', title: 'ייעוץ' }
          ]
        }
      ]
    },
    {
      title: 'העדפת רופא/ה',
      messages: [
        {
          type: 'user_text',
          text: 'היי, רוצה לקבוע תור',
          time: '09:15'
        },
        {
          type: 'bot_buttons',
          text: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          time: '09:15',
          buttons: [
            { id: 'schedule_appointment', title: 'לקביעת תור' },
            { id: 'modify_cancel', title: 'שינוי / ביטול תור' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          value: 'לקביעת תור',
          choiceId: 'schedule_appointment',
          source: 'button',
          time: '09:16'
        },
        {
          type: 'bot_buttons',
          text: 'לאיזה סוג תור?',
          time: '09:16',
          buttons: [
            { id: 'appointment_initial', title: 'בדיקה ראשונית' },
            { id: 'appointment_followup', title: 'ביקורת' },
            { id: 'appointment_treatment', title: 'טיפול' },
            { id: 'appointment_consultation', title: 'ייעוץ' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'לאיזה סוג תור?',
          value: 'בדיקה ראשונית',
          choiceId: 'appointment_initial',
          source: 'button',
          time: '09:17'
        },
        {
          type: 'bot_buttons',
          text: 'יש העדפה לרופא/ה?',
          time: '09:17',
          buttons: [
            { id: 'prefer_doctor_yes', title: 'כן' },
            { id: 'prefer_doctor_no', title: 'לא משנה' }
          ]
        }
      ]
    },
    {
      title: 'בחירת תאריך',
      messages: [
        {
          type: 'user_text',
          text: 'היי, רוצה לקבוע תור',
          time: '09:15'
        },
        {
          type: 'bot_buttons',
          text: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          time: '09:15',
          buttons: [
            { id: 'schedule_appointment', title: 'לקביעת תור' },
            { id: 'modify_cancel', title: 'שינוי / ביטול תור' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          value: 'לקביעת תור',
          choiceId: 'schedule_appointment',
          source: 'button',
          time: '09:16'
        },
        {
          type: 'bot_buttons',
          text: 'לאיזה סוג תור?',
          time: '09:16',
          buttons: [
            { id: 'appointment_initial', title: 'בדיקה ראשונית' },
            { id: 'appointment_followup', title: 'ביקורת' },
            { id: 'appointment_treatment', title: 'טיפול' },
            { id: 'appointment_consultation', title: 'ייעוץ' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'לאיזה סוג תור?',
          value: 'בדיקה ראשונית',
          choiceId: 'appointment_initial',
          source: 'button',
          time: '09:17'
        },
        {
          type: 'bot_buttons',
          text: 'יש העדפה לרופא/ה?',
          time: '09:17',
          buttons: [
            { id: 'prefer_doctor_yes', title: 'כן' },
            { id: 'prefer_doctor_no', title: 'לא משנה' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'יש העדפה לרופא/ה?',
          value: 'לא משנה',
          choiceId: 'prefer_doctor_no',
          source: 'button',
          time: '09:18'
        },
        {
          type: 'bot_buttons',
          text: 'מתי נוח לך?',
          time: '09:18',
          buttons: [
            { id: 'date_today', title: 'היום' },
            { id: 'date_tomorrow', title: 'מחר' },
            { id: 'date_this_week', title: 'השבוע' }
          ]
        }
      ]
    },
    {
      title: 'בחירת שעה',
      messages: [
        {
          type: 'user_text',
          text: 'היי, רוצה לקבוע תור',
          time: '09:15'
        },
        {
          type: 'bot_buttons',
          text: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          time: '09:15',
          buttons: [
            { id: 'schedule_appointment', title: 'לקביעת תור' },
            { id: 'modify_cancel', title: 'שינוי / ביטול תור' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          value: 'לקביעת תור',
          choiceId: 'schedule_appointment',
          source: 'button',
          time: '09:16'
        },
        {
          type: 'bot_buttons',
          text: 'לאיזה סוג תור?',
          time: '09:16',
          buttons: [
            { id: 'appointment_initial', title: 'בדיקה ראשונית' },
            { id: 'appointment_followup', title: 'ביקורת' },
            { id: 'appointment_treatment', title: 'טיפול' },
            { id: 'appointment_consultation', title: 'ייעוץ' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'לאיזה סוג תור?',
          value: 'בדיקה ראשונית',
          choiceId: 'appointment_initial',
          source: 'button',
          time: '09:17'
        },
        {
          type: 'bot_buttons',
          text: 'יש העדפה לרופא/ה?',
          time: '09:17',
          buttons: [
            { id: 'prefer_doctor_yes', title: 'כן' },
            { id: 'prefer_doctor_no', title: 'לא משנה' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'יש העדפה לרופא/ה?',
          value: 'לא משנה',
          choiceId: 'prefer_doctor_no',
          source: 'button',
          time: '09:18'
        },
        {
          type: 'bot_buttons',
          text: 'מתי נוח לך?',
          time: '09:18',
          buttons: [
            { id: 'date_today', title: 'היום' },
            { id: 'date_tomorrow', title: 'מחר' },
            { id: 'date_this_week', title: 'השבוע' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'מתי נוח לך?',
          value: 'מחר',
          choiceId: 'date_tomorrow',
          source: 'button',
          time: '09:19'
        },
        {
          type: 'bot_buttons',
          text: 'אלו הזמינויות פנויות:',
          time: '09:19',
          buttons: [
            { id: 'time_0930', title: '09:30' },
            { id: 'time_1100', title: '11:00' },
            { id: 'time_1630', title: '16:30' }
          ]
        }
      ]
    },
    {
      title: 'פרטי המטופל',
      messages: [
        {
          type: 'user_text',
          text: 'היי, רוצה לקבוע תור',
          time: '09:15'
        },
        {
          type: 'bot_buttons',
          text: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          time: '09:15',
          buttons: [
            { id: 'schedule_appointment', title: 'לקביעת תור' },
            { id: 'modify_cancel', title: 'שינוי / ביטול תור' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          value: 'לקביעת תור',
          choiceId: 'schedule_appointment',
          source: 'button',
          time: '09:16'
        },
        {
          type: 'bot_buttons',
          text: 'לאיזה סוג תור?',
          time: '09:16',
          buttons: [
            { id: 'appointment_initial', title: 'בדיקה ראשונית' },
            { id: 'appointment_followup', title: 'ביקורת' },
            { id: 'appointment_treatment', title: 'טיפול' },
            { id: 'appointment_consultation', title: 'ייעוץ' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'לאיזה סוג תור?',
          value: 'בדיקה ראשונית',
          choiceId: 'appointment_initial',
          source: 'button',
          time: '09:17'
        },
        {
          type: 'bot_buttons',
          text: 'יש העדפה לרופא/ה?',
          time: '09:17',
          buttons: [
            { id: 'prefer_doctor_yes', title: 'כן' },
            { id: 'prefer_doctor_no', title: 'לא משנה' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'יש העדפה לרופא/ה?',
          value: 'לא משנה',
          choiceId: 'prefer_doctor_no',
          source: 'button',
          time: '09:18'
        },
        {
          type: 'bot_buttons',
          text: 'מתי נוח לך?',
          time: '09:18',
          buttons: [
            { id: 'date_today', title: 'היום' },
            { id: 'date_tomorrow', title: 'מחר' },
            { id: 'date_this_week', title: 'השבוע' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'מתי נוח לך?',
          value: 'מחר',
          choiceId: 'date_tomorrow',
          source: 'button',
          time: '09:19'
        },
        {
          type: 'bot_buttons',
          text: 'אלו הזמינויות פנויות:',
          time: '09:19',
          buttons: [
            { id: 'time_0930', title: '09:30' },
            { id: 'time_1100', title: '11:00' },
            { id: 'time_1630', title: '16:30' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'אלו הזמינויות פנויות:',
          value: '11:00',
          choiceId: 'time_1100',
          source: 'button',
          time: '09:20'
        },
        {
          type: 'bot_text',
          text: 'כדי לסגור את התור—\nשם מלא וטלפון ליצירת קשר',
          time: '09:20'
        },
        {
          type: 'user_text',
          text: 'דנה לוי, 054-1234567',
          time: '09:21'
        }
      ]
    },
    {
      title: 'אישור התור - זרימה מלאה',
      messages: [
        {
          type: 'user_text',
          text: 'היי, רוצה לקבוע תור',
          time: '09:15'
        },
        {
          type: 'bot_buttons',
          text: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          time: '09:15',
          buttons: [
            { id: 'schedule_appointment', title: 'לקביעת תור' },
            { id: 'modify_cancel', title: 'שינוי / ביטול תור' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'בשמחה 🙂\nכדי לקבוע תור בצורה נוחה ומהירה,\nאשאל כמה שאלות קצרות.',
          value: 'לקביעת תור',
          choiceId: 'schedule_appointment',
          source: 'button',
          time: '09:16'
        },
        {
          type: 'bot_buttons',
          text: 'לאיזה סוג תור?',
          time: '09:16',
          buttons: [
            { id: 'appointment_initial', title: 'בדיקה ראשונית' },
            { id: 'appointment_followup', title: 'ביקורת' },
            { id: 'appointment_treatment', title: 'טיפול' },
            { id: 'appointment_consultation', title: 'ייעוץ' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'לאיזה סוג תור?',
          value: 'בדיקה ראשונית',
          choiceId: 'appointment_initial',
          source: 'button',
          time: '09:17'
        },
        {
          type: 'bot_buttons',
          text: 'יש העדפה לרופא/ה?',
          time: '09:17',
          buttons: [
            { id: 'prefer_doctor_yes', title: 'כן' },
            { id: 'prefer_doctor_no', title: 'לא משנה' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'יש העדפה לרופא/ה?',
          value: 'לא משנה',
          choiceId: 'prefer_doctor_no',
          source: 'button',
          time: '09:18'
        },
        {
          type: 'bot_buttons',
          text: 'מתי נוח לך?',
          time: '09:18',
          buttons: [
            { id: 'date_today', title: 'היום' },
            { id: 'date_tomorrow', title: 'מחר' },
            { id: 'date_this_week', title: 'השבוע' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'מתי נוח לך?',
          value: 'מחר',
          choiceId: 'date_tomorrow',
          source: 'button',
          time: '09:19'
        },
        {
          type: 'bot_buttons',
          text: 'אלו הזמינויות פנויות:',
          time: '09:19',
          buttons: [
            { id: 'time_0930', title: '09:30' },
            { id: 'time_1100', title: '11:00' },
            { id: 'time_1630', title: '16:30' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'אלו הזמינויות פנויות:',
          value: '11:00',
          choiceId: 'time_1100',
          source: 'button',
          time: '09:20'
        },
        {
          type: 'bot_text',
          text: 'כדי לסגור את התור—\nשם מלא וטלפון ליצירת קשר',
          time: '09:20'
        },
        {
          type: 'user_text',
          text: 'דנה לוי, 054-1234567',
          time: '09:21'
        },
        {
          type: 'bot_text',
          text: 'התור נקבע ✅\n📅 יום: מחר\n🕒 שעה: 11:00\n\nאשלח תזכורת לפני התור.',
          time: '09:21'
        }
      ]
    }
  ],
  leadCapture: [
    {
      title: 'כניסה - משקיע נדל״ן פונה',
      messages: [
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
        }
      ]
    },
    {
      title: 'סינון ראשוני - סוג השקעה',
      messages: [
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
        }
      ]
    },
    {
      title: 'איסוף פרטים - תקציב ואזור',
      messages: [
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
        }
      ]
    },
    {
      title: 'הערכת מוכנות - זמן ומיקום בתהליך',
      messages: [
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
        }
      ]
    },
    {
      title: 'מעבר לנציג - זרימה מלאה',
      messages: [
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
  followUps: [
    {
      title: 'מעקב לאחר שיחה',
      messages: [
        {
          type: 'bot_buttons',
          text: 'היי 👋\nתודה על השיחה קודם.\nאם תרצה להתקדם או שיש שאלה — אני כאן.',
          time: '16:30',
          buttons: [
            { id: 'continue_yes', title: 'כן, אשמח להמשיך' },
            { id: 'continue_later', title: 'אחזור בהמשך' },
            { id: 'continue_not_relevant', title: 'לא רלוונטי כרגע' }
          ]
        }
      ]
    },
    {
      title: 'תזכורת עדינה',
      messages: [
        {
          type: 'bot_buttons',
          text: 'היי, מזכיר בעדינות 🙂\nרציתי לוודא שההודעה הקודמת לא התפספסה.',
          time: '10:00',
          buttons: [
            { id: 'reminder_relevant', title: 'כן, רלוונטי' },
            { id: 'reminder_not_now', title: 'לא כרגע' }
          ]
        }
      ]
    },
    {
      title: 'התקשרות מחדש',
      messages: [
        {
          type: 'bot_buttons',
          text: 'היי, מזכיר בעדינות 🙂\nרציתי לוודא שההודעה הקודמת לא התפספסה.',
          time: '10:00',
          buttons: [
            { id: 'reminder_relevant', title: 'כן, רלוונטי' },
            { id: 'reminder_not_now', title: 'לא כרגע' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'היי, מזכיר בעדינות 🙂\nרציתי לוודא שההודעה הקודמת לא התפספסה.',
          value: 'כן, רלוונטי',
          choiceId: 'reminder_relevant',
          source: 'button',
          time: '10:01'
        },
        {
          type: 'bot_buttons',
          text: 'מעולה 👍\nאיך תרצה להמשיך?',
          time: '10:01',
          buttons: [
            { id: 'next_step_call', title: 'שיחה קצרה' },
            { id: 'next_step_quote', title: 'הצעת מחיר' },
            { id: 'next_step_question', title: 'רק שאלה' }
          ]
        }
      ]
    },
    {
      title: 'מעבר לנציג אנושי',
      messages: [
        {
          type: 'bot_buttons',
          text: 'מעולה 👍\nאיך תרצה להמשיך?',
          time: '10:01',
          buttons: [
            { id: 'next_step_call', title: 'שיחה קצרה' },
            { id: 'next_step_quote', title: 'הצעת מחיר' },
            { id: 'next_step_question', title: 'רק שאלה' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'מעולה 👍\nאיך תרצה להמשיך?',
          value: 'שיחה קצרה',
          choiceId: 'next_step_call',
          source: 'button',
          time: '10:02'
        },
        {
          type: 'bot_text',
          text: 'מצוין.\nמעביר לנציג שיחזור אליך בהקדם.',
          time: '10:02'
        },
        {
          type: 'bot_text',
          text: 'היי, קיבלתי את הפנייה שלך.\nנוח לדבר עכשיו או שאחזור בזמן אחר?',
          time: '10:15'
        }
      ]
    },
    {
      title: 'בקשת משוב',
      messages: [
        {
          type: 'bot_buttons',
          text: 'נשמח לשמוע 🙂\nאיך הייתה החוויה שלך איתנו?',
          time: '16:00',
          buttons: [
            { id: 'feedback_great', title: 'מעולה' },
            { id: 'feedback_ok', title: 'בסדר' },
            { id: 'feedback_not_good', title: 'פחות טוב' }
          ]
        }
      ]
    },
    {
      title: 'טיפול במשוב שלילי',
      messages: [
        {
          type: 'bot_buttons',
          text: 'נשמח לשמוע 🙂\nאיך הייתה החוויה שלך איתנו?',
          time: '16:00',
          buttons: [
            { id: 'feedback_great', title: 'מעולה' },
            { id: 'feedback_ok', title: 'בסדר' },
            { id: 'feedback_not_good', title: 'פחות טוב' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'נשמח לשמוע 🙂\nאיך הייתה החוויה שלך איתנו?',
          value: 'פחות טוב',
          choiceId: 'feedback_not_good',
          source: 'button',
          time: '16:01'
        },
        {
          type: 'bot_buttons',
          text: 'תודה על הכנות.\nרוצה שאעביר לנציג כדי שנשתפר?',
          time: '16:01',
          buttons: [
            { id: 'escalate_human', title: 'כן, נציג אנושי' }
          ]
        }
      ]
    },
    {
      title: 'נקודת מגע לטווח ארוך',
      messages: [
        {
          type: 'bot_buttons',
          text: 'היי,\nעבר קצת זמן מאז שדיברנו.\nרצינו לבדוק אם זה רלוונטי שוב.',
          time: '11:00',
          buttons: [
            { id: 'reengage_yes', title: 'כן' },
            { id: 'reengage_not_now', title: 'לא כרגע' },
            { id: 'reengage_remove', title: 'להסיר אותי' }
          ]
        }
      ]
    }
  ],
  invoices: [
    {
      title: 'שליחת חשבונית',
      messages: [
        {
          type: 'bot_buttons',
          text: 'היי,\nשלחנו לך חשבונית מסודרת 👇',
          time: '14:30',
          buttons: [
            { id: 'view_invoice', title: 'צפייה בחשבונית' },
            { id: 'pay_now', title: 'תשלום עכשיו' },
            { id: 'question_invoice', title: 'שאלה לגבי החשבונית' }
          ]
        }
      ]
    },
    {
      title: 'קישור תשלום',
      messages: [
        {
          type: 'bot_buttons',
          text: 'היי,\nשלחנו לך חשבונית מסודרת 👇',
          time: '14:30',
          buttons: [
            { id: 'view_invoice', title: 'צפייה בחשבונית' },
            { id: 'pay_now', title: 'תשלום עכשיו' },
            { id: 'question_invoice', title: 'שאלה לגבי החשבונית' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'היי,\nשלחנו לך חשבונית מסודרת 👇',
          value: 'תשלום עכשיו',
          choiceId: 'pay_now',
          source: 'button',
          time: '14:31'
        },
        {
          type: 'bot_link',
          text: 'מצוין.\nאפשר לשלם בצורה מאובטחת כאן:',
          time: '14:31',
          linkPreview: {
            url: 'https://payment.example.com/invoice/12345',
            title: 'עמוד תשלום מאובטח',
            description: 'תשלום מאובטח באמצעות כרטיס אשראי או העברה בנקאית',
            image: 'https://payment.example.com/secure-payment-icon.png'
          },
          buttons: [
            { id: 'payment_completed', title: 'ביצעתי תשלום' }
          ]
        }
      ]
    },
    {
      title: 'אישור תשלום',
      messages: [
        {
          type: 'bot_buttons',
          text: 'היי,\nשלחנו לך חשבונית מסודרת 👇',
          time: '14:30',
          buttons: [
            { id: 'view_invoice', title: 'צפייה בחשבונית' },
            { id: 'pay_now', title: 'תשלום עכשיו' },
            { id: 'question_invoice', title: 'שאלה לגבי החשבונית' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'היי,\nשלחנו לך חשבונית מסודרת 👇',
          value: 'תשלום עכשיו',
          choiceId: 'pay_now',
          source: 'button',
          time: '14:31'
        },
        {
          type: 'bot_link',
          text: 'מצוין.\nאפשר לשלם בצורה מאובטחת כאן:',
          time: '14:31',
          linkPreview: {
            url: 'https://payment.example.com/invoice/12345',
            title: 'עמוד תשלום מאובטח',
            description: 'תשלום מאובטח באמצעות כרטיס אשראי או העברה בנקאית',
            image: 'https://payment.example.com/secure-payment-icon.png'
          },
          buttons: [
            { id: 'payment_completed', title: 'ביצעתי תשלום' }
          ]
        },
        {
          type: 'user_reply_selection',
          replyToText: 'מצוין.\nאפשר לשלם בצורה מאובטחת כאן:',
          value: 'ביצעתי תשלום',
          choiceId: 'payment_completed',
          source: 'button',
          time: '15:00'
        },
        {
          type: 'bot_text',
          text: 'התשלום התקבל ✅\nתודה רבה!',
          time: '15:00'
        },
        {
          type: 'bot_buttons',
          text: 'אם תרצה—\nאוכל לשלוח קבלה או לעזור במשהו נוסף.',
          time: '15:00',
          buttons: [
            { id: 'send_receipt', title: 'שליחת קבלה' },
            { id: 'human_agent', title: 'נציג אנושי' }
          ]
        }
      ]
    },
  ],
};

