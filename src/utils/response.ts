import { Response } from "express";

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  message: string;
  data?: T;
  meta?: Record<string, any>;
  timestamp?: string;
}

export interface ApiErrorResponse<E = unknown> {
  success: false;
  message: string;
  error?: E;
  timestamp?: string;
}

export function sendSuccess<T>(
  res: Response,
  message = "Request successful",
  data?: T,
  meta?: Record<string, any>,
  statusCode = 200
): Response<ApiSuccessResponse<T>> {
  return res.status(statusCode).json({
    success: true,
    message,
    ...(data && { data }),
    ...(meta && { meta }),
    timestamp: new Date().toISOString(),
  });
}

export function sendError<E>(
  res: Response,
  message = "An unexpected error occurred",
  error?: E,
  statusCode = 500
): Response<ApiErrorResponse<E>> {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(error && { error }),
    timestamp: new Date().toISOString(),
  });
}
