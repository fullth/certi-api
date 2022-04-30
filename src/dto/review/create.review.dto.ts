export interface CreateReviewDTO {
  readonly certificationId: number;
  readonly teacherId: number;
  readonly score: number;
  readonly review: string;
  readonly passYn: boolean;
}