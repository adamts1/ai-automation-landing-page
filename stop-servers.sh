#!/bin/bash

echo "🛑 Stopping AI Automation Agency servers..."
echo ""

# Stop backend (port 5000)
BACKEND_PID=$(lsof -ti:5000)
if [ ! -z "$BACKEND_PID" ]; then
    kill -9 $BACKEND_PID 2>/dev/null
    echo "✅ Backend server stopped (port 5000)"
else
    echo "ℹ️  Backend server not running"
fi

# Stop frontend (port 5173)
FRONTEND_PID=$(lsof -ti:5173)
if [ ! -z "$FRONTEND_PID" ]; then
    kill -9 $FRONTEND_PID 2>/dev/null
    echo "✅ Frontend server stopped (port 5173)"
else
    echo "ℹ️  Frontend server not running"
fi

echo ""
echo "✨ All servers stopped!"

