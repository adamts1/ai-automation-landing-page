# AI Automation Agency - Landing Page

A modern, fully responsive business landing page for an AI Automation Agency built with React, TypeScript, TailwindCSS, Framer Motion, and Node.js.

## 🚀 Features

- **Modern Design**: Clean and professional layout with gradient accents
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Integrated with backend API
- **Sticky Header**: Navigation that adapts on scroll
- **WhatsApp Integration**: Floating contact button for instant communication

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Lucide React (Icons)

### Backend
- Node.js
- Express
- TypeScript
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
cd "/Users/adamtsityat/Documents/AI Automation - landing Page"
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

## 🚀 Running the Application

### Quick Start (Recommended)

**Start both servers with one command:**
```bash
./start-servers.sh
```

**Stop both servers:**
```bash
./stop-servers.sh
```

### Manual Start (Alternative)

1. **Start the Backend Server** (Terminal 1)
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

2. **Start the Frontend** (Terminal 2)
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173` (or the next available port)

### Production Build

1. **Build Frontend**
```bash
cd frontend
npm run build
```

2. **Build Backend**
```bash
cd backend
npm run build
npm start
```

## 📁 Project Structure

```
AI Automation - landing Page/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Technologies.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
└── backend/
    ├── src/
    │   └── server.ts
    ├── package.json
    └── tsconfig.json
```

## 🎨 Sections

1. **Hero Section**: Eye-catching animated gradient background with call-to-action
2. **Services**: Three main services showcased with icons and descriptions
3. **About Us**: Company overview with statistics and visual cards
4. **Technologies**: Display of technology stack
5. **Why Choose Us**: Key benefits and differentiators
6. **Contact**: Form with backend integration and contact information
7. **Footer**: Social links and site navigation

## 🔌 API Endpoints

### POST /contact
Submit contact form data

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### GET /health
Health check endpoint

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-11-09T12:00:00.000Z"
}
```

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Content
Update component files in `frontend/src/components/` to modify text, images, and layout.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column layout)
- **Tablet**: 768px - 1024px (2 column layout)
- **Desktop**: > 1024px (3+ column layout)

## 🔒 CORS Configuration

The backend is configured to accept requests from any origin during development. For production, update the CORS configuration in `backend/src/server.ts`:

```typescript
app.use(cors({
  origin: 'https://your-production-domain.com'
}));
```

## 📝 License

ISC

## 👥 Contact

For questions or support, visit the contact section on the website or reach out via WhatsApp.

---

Built with ❤️ by AI Automation Agency

# ai-automation-landing-page
