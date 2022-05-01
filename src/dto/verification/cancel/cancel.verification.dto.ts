import { VerificationDto } from '../verification.dto';
export interface CancelVerificationDto extends VerificationDto {
  readonly cancelReason: string;
}