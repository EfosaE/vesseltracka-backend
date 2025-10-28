import { sendSuccess } from "../utils/response";
import * as firstTimerService from "./firstTimer.service";
import { Request, Response } from "express";
import { firstTimerInsertSchema } from "./firstTimer.validation";
import { catchAsync } from "../utils/catchAsync";

export async function getFirstTimers(_req: Request, res: Response) {
  const firstTimers = await firstTimerService.findAll();
  sendSuccess(res, "First Timers retrieved successfully", firstTimers);
}

export const createFirstTimer = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const parsedRequest = firstTimerInsertSchema.parse(req.body);
    console.log(parsedRequest);
    const firstTimer = await firstTimerService.create(parsedRequest);
    res.status(201).json(firstTimer);
  }
);
