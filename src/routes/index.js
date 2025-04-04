import { Router } from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";


const router = Router();

router.use("/users", userRouter);
router.use("/sessions", authRouter);

export default router;
