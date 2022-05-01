import { Inject, Service } from "typedi";
import { connection as db } from "../../mysql.db.connection";
import { VerificationDto } from '../../../dto/verification/verification.dto';
import { CancelVerificationDto } from '../../../dto/verification/cancel/cancel.verification.dto';
import { VerificationInfo } from '../../../interface/verification/index';

@Service()
export class VerificationRepository {

  constructor (
    // @Inject() db: DbFactory
  ) { }

  public verify = async (data: VerificationDto) => {
    try {
      const [ rows ] = await db.promise().query(`INSERT INTO TEACHERS (STORE) VALUES (?)`, [data.verificationId, data.teacherId]);
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public checkVerification = async (data: VerificationDto): Promise<VerificationInfo[]> => {
    try {
      const rows = await db.promise().execute(`
        SELECT A.* FROM TEACHERS AS A INNER JOIN VERIFICATION AS B ON A.ID = B.TEACHER_ID WHERE A.ID = ? AND B.TEACHER_ID = ?;
      `, [data.teacherId, data.verificationId]);
      if(!rows[0]) return [];
      else return rows; // error
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public cancelVerify = async (data: CancelVerificationDto) => {
    try {
      const [ rows ] = await db.promise().query(
        "UPDATE TEACHERS as A, VERIFICATION as B SET A.VERIFICATION_CNT = A.VERIFICATION_CNT - 1, A.VERIFICATION_YN = FALSE, B.CANCEL_REASON = ? WHERE A.ID = ? AND B.ID = ?", [data.cancelReason, data.teacherId, data.verificationId]);
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}