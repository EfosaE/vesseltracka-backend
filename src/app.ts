import express from "express";
import AppError from "./utils/appError";
import globalErrorHandler from "./middlewares/errorHandler";
import firstTimerRoutes from "./firstTimers/firstTimer.route";
import { sendSuccess } from "./utils/response";



const app = express();

app.use(express.json());

// Routes
app.get("/", (_, res) => {
  res.redirect("/api/v1");
});

// ✅ /api/v1 route
app.get("/api/v1", (_, res) => {
  sendSuccess(res, "Welcome to VesselTracka API v1.0 🚀", null);
});

// app.use("/users", userRoutes);
app.use("/api/v1/first-timers", firstTimerRoutes);

app.use((req, _res, next) => {
  next(new AppError(`The path ${req.method} request to ${req.originalUrl} was not found`, 404));
});

// Global error handler (should be after routes)
app.use(globalErrorHandler);

export default app;
