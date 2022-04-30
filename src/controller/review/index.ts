import { Inject, Service } from "typedi";
import { Request, Response } from 'express';
import { ReviewService } from '../../service/review/index';
import { CreateReviewDTO } from '../../dto/review/create.review.dto';

@Service()
export class ReviewController {
  constructor(@Inject() private readonly reviewService: ReviewService) {}

  public create = async (req: Request, res: Response) => {
    const data: CreateReviewDTO = req.body;
    const result = this.reviewService.create(data);
    res.status(200).send(result);
  }
}