import { Router } from "express";
import { Container } from "typedi";
import { ReviewController } from '../controller/review/index';

const router = Router();
const reviewController = Container.get(ReviewController);

router.route('/')
  .post(reviewController.create);

export default router;