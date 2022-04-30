import { Inject, Service } from "typedi";
import { ReviewRepository } from '../../db/repository/review/review';
import { CreateReviewDTO } from '../../dto/review/create.review.dto';

@Service()
export class ReviewService {
  constructor(@Inject() private readonly reviewRepository: ReviewRepository) {}

  public create = async (data: CreateReviewDTO) => {
    this.reviewRepository.create(data);
  }
}