import { Router } from "express";
import { getFirstTimers } from "./firstTimer.controller";
// import { getUsers, createUser } from "./user.controller";

const router = Router();

router.get("/", getFirstTimers);
// router.post("/", createFirstTimer);

export default router;
