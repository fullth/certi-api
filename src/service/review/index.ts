import { Inject, Service } from "typedi";
import { ReviewRepository } from '../../db/repository/review';
import { CreateReviewDTO } from '../../dto/review';

@Service()
export class ReviewService {
  constructor(@Inject() private readonly reviewRepository: ReviewRepository) {}

  public create = async (data: CreateReviewDTO) => {
    return this.reviewRepository.create(data);
  }
}