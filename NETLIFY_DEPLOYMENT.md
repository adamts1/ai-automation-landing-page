# 🚀 Netlify Deployment Guide

## Quick Fix for "Page Not Found" Error

I've already created the necessary files:
- ✅ `frontend/public/_redirects` - Handles all routes
- ✅ `netlify.toml` - Netlify configuration

## 🎯 Deploy to Netlify (2 Methods)

### Method 1: Drag & Drop (Fastest)

1. **Build your app locally:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Drag & Drop:**
   - Go to https://app.netlify.com/drop
   - Drag the `frontend/dist` folder onto the page
   - Done! ✅

### Method 2: GitHub Integration (Recommended)

#### Step 1: Push to GitHub

```bash
# If not already in a git repo
git add .
git commit -m "Add Netlify configuration and EmailJS integration"
git push origin main
```

#### Step 2: Deploy on Netlify

1. Go to https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize
4. Select your repository
5. Configure build settings:

```
Base directory: frontend
Build command: npm run build
Publish directory: frontend/dist
```

6. Click **"Deploy site"**

## 🔧 Build Settings in Netlify Dashboard

If you need to update settings later:

1. Go to **Site settings** → **Build & deploy**
2. Set these values:

| Setting | Value |
|---------|-------|
| Base directory | `frontend` |
| Build command | `npm run build` |
| Publish directory | `frontend/dist` |
| Node version | 18 or higher |

## 🌍 Environment Variables (For EmailJS)

If you want to use environment variables for EmailJS (more secure):

1. In Netlify Dashboard: **Site settings** → **Environment variables**
2. Add these variables:

```
VITE_EMAILJS_PUBLIC_KEY = 8WUpHfYP9_IBLCf4M
VITE_EMAILJS_SERVICE_ID = service_hj77wbm
VITE_EMAILJS_TEMPLATE_ID = your_template_id_here
```

3. Update `frontend/src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8WUpHfYP9_IBLCf4M',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_hj77wbm',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
};
```

4. Redeploy your site

## 🐛 Troubleshooting

### Problem: "Page not found" error
**Solution:** The `_redirects` file is already created. Make sure it's in `frontend/public/_redirects`

### Problem: Build fails
**Solutions:**
- Check Node version (should be 18+)
- Run `npm install` in the frontend folder
- Check build logs in Netlify dashboard

### Problem: Blank page after deployment
**Solutions:**
- Check browser console for errors
- Verify `dist` folder is being published
- Check if all assets are loading correctly

### Problem: EmailJS not working in production
**Solutions:**
- Verify EmailJS credentials are correct
- Check that your domain is allowed in EmailJS dashboard
- Add your Netlify domain to EmailJS allowed domains

## 📱 Custom Domain (Optional)

1. In Netlify: **Domain settings** → **Add custom domain**
2. Follow instructions to update DNS records
3. Netlify provides free HTTPS automatically!

## 🔄 Automatic Deployments

With GitHub integration:
- ✅ Push to `main` branch → Auto-deploy
- ✅ Pull requests → Deploy previews
- ✅ Rollback to previous deployments anytime

## ✅ Deployment Checklist

Before deploying, make sure:

- [x] `netlify.toml` exists in project root
- [x] `_redirects` exists in `frontend/public/`
- [ ] EmailJS Template ID is set in `frontend/src/config/emailjs.ts`
- [ ] All changes are committed to git
- [ ] App builds successfully locally (`npm run build`)
- [ ] No console errors in production build

## 🎉 After Deployment

1. Test your contact form on the live site
2. Check that toast notifications work
3. Test both English and Hebrew languages
4. Test on mobile devices
5. Submit a test message via the contact form

## 📊 Netlify Features You Get Free

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Continuous deployment
- ✅ Deploy previews
- ✅ Instant rollbacks
- ✅ Form handling (if needed)
- ✅ 100GB bandwidth/month

## 🆘 Need Help?

If you're still seeing "Page not found":

1. Check the Netlify deploy logs for errors
2. Verify the `_redirects` file was included in the build
3. Try a hard refresh (Ctrl+F5 or Cmd+Shift+R)
4. Check Netlify functions tab for any errors

---

**Your site will be live at:** `https://[your-site-name].netlify.app`

You can customize the site name in Netlify's **Site settings** → **Change site name**

