export interface CancelVerificationDto {
  readonly teacherId: number; 
  readonly verificationId: number;
  readonly cancelReason: string;
}