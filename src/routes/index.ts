import { Router } from "express";
import VerificationRouter from "./verification";
import TeacherRouter from "./teacher";
import ReviewRouter from "./review";

const router = Router();

router.use('/teacher', TeacherRouter);
router.use('/verification', VerificationRouter);
router.use('/review', ReviewRouter);

export default router;