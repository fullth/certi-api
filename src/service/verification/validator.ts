import { Service, Inject } from 'typedi';
import { VerificationRepository } from '../../db/repository/verification/verification';
import { CreateVerificationDto } from '../../dto/verification/create.verification.dto';

@Service()
export class VerificationValidator {
  constructor(@Inject() private readonly verificationRepository: VerificationRepository) {};

  public isValidate = async (data: CreateVerificationDto): Promise<boolean> => {
    try {
      try {
        const check = await this.verificationRepository.checkVerification(data);

        if(await check[0].VERIFICATION_CNT > 5) { throw Error("검증 횟수가 5회를 초과하였습니다."); }
        if(await check[0].PASS_CNT > 3) { throw Error("이미 3번 이상 통과되었습니다."); }
        if(await check[0].OVERDUE) { throw Error("기한이 만료되었습니다."); }
        if(await check[0].VERIFICATION_YN) { throw Error("이미 검증 완료된 선생님 입니다."); }

        return true;
      } catch (err) {
        throw err;
      }
    } catch (err: any) {
      throw Error(err);
    }
  }
}