#!/bin/bash

# Deployment Readiness Check Script
# Run this before deploying to Netlify

echo "🔍 Checking deployment readiness..."
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: frontend directory not found"
    echo "   Please run this script from the project root"
    exit 1
fi

# Check for netlify.toml
if [ -f "netlify.toml" ]; then
    echo "✅ netlify.toml found"
else
    echo "❌ netlify.toml not found"
fi

# Check for _redirects
if [ -f "frontend/public/_redirects" ]; then
    echo "✅ _redirects file found"
else
    echo "❌ _redirects file not found"
fi

# Check EmailJS config
if grep -q "YOUR_TEMPLATE_ID" "frontend/src/config/emailjs.ts"; then
    echo "⚠️  Warning: EmailJS TEMPLATE_ID not configured"
    echo "   Update frontend/src/config/emailjs.ts before deploying"
else
    echo "✅ EmailJS configuration looks good"
fi

# Check if dependencies are installed
if [ -d "frontend/node_modules" ]; then
    echo "✅ Node modules installed"
else
    echo "⚠️  Warning: node_modules not found"
    echo "   Run: cd frontend && npm install"
fi

echo ""
echo "🏗️  Testing build..."
cd frontend
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo "📦 Build output is in: frontend/dist"
    echo ""
    echo "🚀 Ready to deploy to Netlify!"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://app.netlify.com/drop"
    echo "2. Drag the 'frontend/dist' folder"
    echo "3. Done!"
else
    echo ""
    echo "❌ Build failed"
    echo "   Fix the errors above before deploying"
    exit 1
fi

