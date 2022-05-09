export interface CreateReviewDTO {
  readonly verificationId: number;
  readonly teacherId: number;
  readonly score: number;
  readonly review: string;
  readonly passYn: boolean;
}