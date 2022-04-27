import { Router } from "express";
import verificationRouter from "./verification";
import TeacherRouter from "./teacher";
import ReviewRouter from "./review";

const router = Router();

router.use('/teacher', TeacherRouter);
router.use('/verification', verificationRouter);
router.use('/review', ReviewRouter);

export default router;