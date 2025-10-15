// import type { Request, Response } from "express";

// // const handlePrismaError = (err: any) => {
// //   switch (err.code) {
// //     case 'P2002':
// //       // handling duplicate key errors
// //       return new AppError(`Duplicate field value: ${err.meta.target}`, 400);
// //     case 'P2014':
// //       // handling invalid id errors
// //       return new AppError(`Invalid ID: ${err.meta.target}`, 400);
// //     case 'P2003':
// //       // handling invalid data errors
// //       return new AppError(`Invalid input data: ${err.meta.target}`, 400);
// //     default:
// //       // handling all other errors
// //       return new AppError(`Something went wrong: ${err.message}`, 500);
// //   }
// // };

// const sendErrorDev = (err: any, req: Request, res: Response) => {
//   if (req.originalUrl.startsWith("/api")) {
//     res.status(err.statusCode).json({
//       status: err.status,
//       error: err,
//       message: err.message,
//       stack: err.stack,
//     });
//   }
// };

// const sendErrorProd = (err: any, req: Request, res: Response) => {
//   if (req.originalUrl.startsWith("/api")) {
//     // it is from AppError class but I want to ensure it is a cliemt side error
//     if (err.isOperational) {
//       return res
//         .status(err.statusCode)
//         .json({ status: err.status, message: err.message });
//     }

//     //programming errors dont leak details
//     // console.error("ERROR 💥", err);

//     return res.status(500).json({
//       status: " error",
//       message: "somethin went wrong, please try again later",
//     });
//   }
//   // Ensure a return value for all code paths
//   return;
// };

// const globalErrorHandler = (err: any, req: Request, res: Response) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "error";
//   console.log(err);
//   if (process.env.NODE_ENV === "development") {
//     sendErrorDev(err, req, res);
//   } else if (process.env.NODE_ENV === "production") {
//     // let error = { ...err };
//     // error.message = err.message;
//     // if (err instanceof Prisma.PrismaClientKnownRequestError) {
//     //   console.log('handledPrismaError');
//     //   error = handlePrismaError(err);
//     // }
//     sendErrorProd(err, req, res);
//   }
// };

// export default globalErrorHandler;

import { NextFunction, Response, Request } from "express";
import AppError from "../utils/appError.js";
import { sendError } from "../utils/response.js";

const globalErrorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("GLOBAL ERROR HANDLER TRIGGERED");
  console.error("💥 Error:", err);

  // Ensure we always have an AppError shape
  if (err instanceof AppError) {
    return sendError(res, err.message, err, err.statusCode);
  }

  // Fallback for unknown or unexpected errors
  return sendError(
    res,
    "Internal Server Error",
    process.env.NODE_ENV === "development" ? err : undefined,
    500
  );
};

export default globalErrorHandler;
