import { Response } from "express";

interface SuccessResponse<T = unknown> {
  status: "success";
  message: string;
  data?: T;
}

interface ErrorResponse<E = unknown> {
  status: "error";
  message: string;
  error?: E;
}

export function successResponse<T>(
  res: Response,
  message = "Success",
  data?: T,
  statusCode = 200
): Response<SuccessResponse<T>> {
  return res.status(statusCode).json({
    status: "success",
    message,
    ...(data && { data }),
  });
}

export function errorResponse<E>(
  res: Response,
  message = "An error occurred",
  statusCode = 500,
  error?: E
): Response<ErrorResponse<E>> {
  return res.status(statusCode).json({
    status: "error",
    message,
    ...(error && { error }),
  });
}
