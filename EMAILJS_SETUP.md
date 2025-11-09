# EmailJS Setup Guide

This guide will help you configure EmailJS to receive emails from your contact form.

## Step 1: Get Your EmailJS Credentials

### 1.1 Get Your Public Key
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin/account)
2. Sign in to your account
3. Navigate to **Account** → **General**
4. Copy your **Public Key** (also called User ID)

### 1.2 Create/Configure Email Service
1. Go to [Email Services](https://dashboard.emailjs.com/admin)
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection wizard
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### 1.3 Create Email Template
1. Go to [Email Templates](https://dashboard.emailjs.com/admin/templates)
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your AI Automation landing page contact form.
```

4. The template should include these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   - `{{to_name}}` - Your team name (optional)

5. Set the **Reply To** field to: `{{from_email}}`
6. Save the template and copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 2: Configure Your Application

Open the file: `frontend/src/config/emailjs.ts`

Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key',
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id',
};
```

## Step 3: Test Your Contact Form

1. Start your development server:
   ```bash
   cd frontend
   npm run dev
   ```

2. Navigate to the contact section on your landing page
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox for the message

## Important Notes

### Security
- The Public Key is safe to expose in client-side code
- Never commit sensitive API keys to version control
- For production, consider using environment variables

### Rate Limiting
- EmailJS free tier allows **200 emails/month**
- Emails are limited to **5KB** in size
- Consider upgrading for higher limits

### Using Environment Variables (Optional)

For better security in production, you can use environment variables:

1. Create a `.env` file in the `frontend` directory:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

2. Update `frontend/src/config/emailjs.ts`:
   ```typescript
   export const EMAILJS_CONFIG = {
     PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
     SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
     TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
   };
   ```

3. Add `.env` to your `.gitignore` file

## Troubleshooting

### Common Issues

**Issue: "Failed to send email" error**
- Check that all credentials are correct
- Verify your EmailJS service is connected and active
- Check browser console for specific error messages

**Issue: Email not received**
- Check your spam/junk folder
- Verify the template's "To Email" field is set correctly
- Ensure your EmailJS account is active

**Issue: CORS errors**
- EmailJS handles CORS automatically, but ensure you're using the correct domain
- Add your domain to the allowed list in EmailJS dashboard under Security settings

### Getting Help
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

## What Changed in Your Code

The contact form now:
- ✅ Uses EmailJS to send emails directly from the browser
- ✅ No longer requires a backend server
- ✅ Provides the same user experience
- ✅ Includes proper error handling and loading states

The old backend endpoint at `http://localhost:5000/contact` is no longer needed for the contact form.

