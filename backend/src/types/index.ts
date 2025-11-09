// Request body types
export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

// Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  fields?: Partial<T>;
}

export interface ContactSuccessResponse {
  name: string;
  email: string;
}

export interface HealthCheckResponse {
  status: 'OK' | 'ERROR';
  timestamp: string;
}

export interface ErrorResponse {
  error: string;
  fields?: any;
}

// Validation types
export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}

