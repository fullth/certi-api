import { Inject, Service } from "typedi";
import { VerificationRepository } from '../../db/repository/verification/verification';
import { CreateVerificationDto } from '../../dto/verification/create.verification.dto';
import { VerificationValidator } from './validator';
import { CancelVerificationDto } from '../../dto/verification/cancel.verification.dto';

@Service()
export class VerificationService {
  constructor(
    @Inject() private readonly verificationRepository: VerificationRepository,
    @Inject() private readonly verificationValidator: VerificationValidator
  ) {}

  public verify = async (data: CreateVerificationDto) => {
    const result = await this.verificationValidator.isValidate(data);
    return result;
  };

  public cancelVerify = async (data: CancelVerificationDto) => {
    return await this.verificationRepository.cancelVerify(data);
  };
}