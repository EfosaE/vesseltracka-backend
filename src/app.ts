import express from "express";
import AppError from "./utils/appError";
import globalErrorHandler from "./middlewares/errorHandler";
import { successResponse } from "./utils/response";
// import db from "./drizzle/db";


const app = express();

app.use(express.json());

// Routes
app.get("/", (_, res) => {
  res.redirect("/api/v1");
});

// ✅ /api/v1 route
app.get("/api/v1", (_, res) => {
  successResponse(res, "Welcome to VesselTracka API v1.0 🚀", null, 200);
});



app.use((req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

// Global error handler (should be after routes)
app.use(globalErrorHandler);

export default app;
