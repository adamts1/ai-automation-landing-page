# Quick Start Guide

## 🚀 Get Started in 2 Minutes

### Step 1: Start Backend Server
Open a terminal and run:
```bash
cd "/Users/adamtsityat/Documents/AI Automation - landing Page/backend"
npm run dev
```

You should see:
```
🚀 Server is running on http://localhost:5000
📧 Contact endpoint: http://localhost:5000/contact
💚 Health check: http://localhost:5000/health
```

### Step 2: Start Frontend
Open a NEW terminal and run:
```bash
cd "/Users/adamtsityat/Documents/AI Automation - landing Page/frontend"
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 3: Open Your Browser
Navigate to: **http://localhost:5173**

---

## ✨ Features to Explore

### 1. **Responsive Design**
- Try resizing your browser window
- Test on mobile devices (use browser dev tools)
- Check tablet breakpoints (768px - 1024px)

### 2. **Smooth Animations**
- Scroll through the page to see section animations
- Hover over service cards
- Watch the hero section's animated gradient

### 3. **Interactive Header**
- Scroll down to see the sticky header change
- Click navigation links for smooth scrolling
- Try the mobile menu (on small screens)

### 4. **Contact Form**
- Fill out the form at the bottom
- Submit and check the backend terminal for logs
- Click the floating WhatsApp button (bottom-right)

---

## 🎨 Customization Tips

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Your brand color
    600: '#0284c7',
  },
}
```

### Update Content
All content is in `frontend/src/components/`:
- `Hero.tsx` - Main headline and CTA
- `Services.tsx` - Service offerings
- `About.tsx` - Company information
- `Contact.tsx` - Contact form and info

### Change WhatsApp Number
Edit `frontend/src/components/Contact.tsx`:
```typescript
href="https://wa.me/YOUR_NUMBER_HERE"
```

---

## 🧪 Testing Checklist

- [✓] Backend server running on port 5000
- [✓] Frontend running on port 5173
- [✓] All sections visible and animated
- [✓] Navigation links work smoothly
- [✓] Contact form submits successfully
- [✓] Mobile menu works
- [✓] Header becomes sticky on scroll
- [✓] Responsive on mobile, tablet, desktop
- [✓] WhatsApp button is clickable

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 or 5173 is busy:

**Backend:**
```bash
PORT=5001 npm run dev
```
Then update the API URL in `frontend/src/components/Contact.tsx`

**Frontend:**
The Vite dev server will automatically use the next available port.

### CORS Errors
Make sure both servers are running. The backend is configured to allow all origins in development.

### Dependencies Not Found
Run in both directories:
```bash
npm install
```

---

## 📦 Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
```
Output will be in `frontend/dist/`

### Build Backend
```bash
cd backend
npm run build
npm start
```

### Deploy Options
- **Vercel/Netlify**: Frontend static files
- **Heroku/Railway**: Backend API
- **AWS/DigitalOcean**: Full-stack hosting

---

## 📚 Next Steps

1. Add a database (MongoDB/PostgreSQL) for contact form submissions
2. Implement email notifications using SendGrid or NodeMailer
3. Add Google Analytics for tracking
4. Implement a CMS for easy content updates
5. Add more interactive features (chatbot, booking system)
6. Set up CI/CD pipeline
7. Add unit and integration tests

---

## 💡 Need Help?

Check the main [README.md](./README.md) for detailed documentation.

Enjoy building! 🎉

