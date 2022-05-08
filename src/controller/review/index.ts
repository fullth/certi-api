import { Inject, Service } from "typedi";
import { NextFunction, Request, Response } from 'express';
import { ReviewService } from '../../service/review/index';
import { CreateReviewDTO } from '../../dto/review/index';
import { HttpException } from '../../exceptions/httpException';

@Service()
export class ReviewController {
  constructor(@Inject() private readonly reviewService: ReviewService) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const data: CreateReviewDTO = req.body;
    const result = this.reviewService.create(data);

    if(!result) {
      next(new HttpException(400, "Something is wrong"));
    }
    
    res.status(200).send(result);
  }
}