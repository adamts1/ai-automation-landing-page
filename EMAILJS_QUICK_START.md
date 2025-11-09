# 🚀 EmailJS Quick Start

Get your contact form working in 5 minutes!

## Quick Setup Checklist

### ☐ Step 1: Get Your Credentials (5 minutes)

Visit your [EmailJS Dashboard](https://dashboard.emailjs.com/) and collect:

1. **Public Key**: Account → General → Copy Public Key
2. **Service ID**: Email Services → Copy your service ID (or create new service)
3. **Template ID**: Email Templates → Create new template → Copy template ID

### ☐ Step 2: Configure Template

In your EmailJS template, use these variables:

**Subject line:**
```
New Contact from {{from_name}}
```

**Email body:**
```
You received a new message from your landing page!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

**Important:** Set "Reply To" field to `{{from_email}}`

### ☐ Step 3: Update Configuration

Edit: `frontend/src/config/emailjs.ts`

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'paste_your_public_key_here',
  SERVICE_ID: 'paste_your_service_id_here',
  TEMPLATE_ID: 'paste_your_template_id_here',
};
```

### ☐ Step 4: Test It!

```bash
cd frontend
npm run dev
```

Visit your contact form and send a test message!

---

## 📧 Example Values

Your credentials will look something like this:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'xYz12ABcDefGH3',           // ~13-15 characters
  SERVICE_ID: 'service_abc1234',          // starts with 'service_'
  TEMPLATE_ID: 'template_xyz5678',        // starts with 'template_'
};
```

---

## ✅ Success!

Once configured:
- ✨ Contact form sends emails directly
- 📬 You receive emails instantly
- 🚫 No backend server needed
- 💰 Free up to 200 emails/month

---

## 🆘 Need Help?

**Can't find your credentials?**
1. Public Key: https://dashboard.emailjs.com/admin/account
2. Service ID: https://dashboard.emailjs.com/admin
3. Template ID: https://dashboard.emailjs.com/admin/templates

**Email not arriving?**
- Check spam folder
- Verify service is connected (green status)
- Test with the "Send Test Email" button in EmailJS

**Still stuck?**
Read the detailed guide: `EMAILJS_SETUP.md`

