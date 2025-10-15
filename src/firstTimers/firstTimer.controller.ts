
import { sendSuccess } from "../utils/response";
import * as firstTimerService from "./firstTimer.service";
import { Request, Response } from "express";

export async function getFirstTimers(_req: Request, res: Response) {
  const firstTimers = await firstTimerService.findAll();
  sendSuccess(res, "First Timers retrieved successfully", firstTimers);
}

// export async function createFirstTimer(req: Request, res: Response) {
//   const firstTimer = await firstTimerService.create(req.body);
//   res.status(201).json(firstTimer);
// }
