import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import type {
  ContactRequest,
  ApiResponse,
  ContactSuccessResponse,
  HealthCheckResponse,
  ErrorResponse,
} from './types';

const app = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Middleware
app.use(cors());
app.use(express.json());

// Type guard for ContactRequest
const isValidContactRequest = (body: any): body is ContactRequest => {
  return (
    typeof body === 'object' &&
    body !== null &&
    typeof body.name === 'string' &&
    body.name.trim().length > 0 &&
    typeof body.email === 'string' &&
    body.email.trim().length > 0 &&
    typeof body.message === 'string' &&
    body.message.trim().length > 0
  );
};

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Routes
app.get('/', (_req: Request, res: Response<{ message: string }>): void => {
  res.json({ message: 'AI Automation Agency API' });
});

app.post('/contact', (req: Request<{}, ApiResponse<ContactSuccessResponse> | ErrorResponse, ContactRequest>, res: Response<ApiResponse<ContactSuccessResponse> | ErrorResponse>): void => {
  // Validate request body structure
  if (!isValidContactRequest(req.body)) {
    res.status(400).json({ 
      error: 'All fields are required and must be non-empty strings',
      fields: req.body
    });
    return;
  }

  const { name, email, message } = req.body;

  // Validate email format
  if (!isValidEmail(email)) {
    res.status(400).json({
      error: 'Invalid email format',
      fields: { email }
    });
    return;
  }

  // Log the contact form submission
  console.log('=================================');
  console.log('New Contact Form Submission:');
  console.log('=================================');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Timestamp:', new Date().toISOString());
  console.log('=================================\n');

  // Send success response
  const response: ApiResponse<ContactSuccessResponse> = {
    success: true,
    message: 'Contact form submitted successfully',
    data: { name, email }
  };

  res.status(200).json(response);
});

// Health check endpoint
app.get('/health', (_req: Request, res: Response<HealthCheckResponse>): void => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response<ErrorResponse>, _next: NextFunction): void => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
  });
});

// 404 handler
app.use((_req: Request, res: Response<ErrorResponse>): void => {
  res.status(404).json({
    error: 'Route not found',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/contact`);
  console.log(`💚 Health check: http://localhost:${PORT}/health\n`);
});

