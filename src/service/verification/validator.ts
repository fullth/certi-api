import { Service, Inject } from 'typedi';
import { VerificationRepository } from '../../db/repository/verification';
import { VerificationDto } from '../../dto/verification/verification.dto';

@Service()
export class VerificationValidator {
  constructor(@Inject() private readonly verificationRepository: VerificationRepository) {};

  public isValidate = async (data: VerificationDto): Promise<boolean> => {
    try {
      const [ check ] = await this.verificationRepository.checkVerification(data);

      if(check.verificationCnt > 5) { throw Error("검증 횟수가 5회를 초과하였습니다."); }
      if(check.passCnt > 3) { throw Error("이미 3번 이상 통과되었습니다."); }
      if(check.overDue) { throw Error("기한이 만료되었습니다."); }
      if(check.verificationYn) { throw Error("이미 검증 완료된 선생님 입니다."); }
      
      return true;
    } catch (err: any) {
      throw Error(err);
    }
  }
}