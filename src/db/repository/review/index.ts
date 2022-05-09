import { Service } from "typedi";
import { connection as db } from "../../mysql.db.connection";
import { CreateReviewDTO } from "../../../dto/review";

@Service()
export class ReviewRepository {
  
  public create = async (data: CreateReviewDTO): Promise<object> => {
    try {
      const [ rows ] = await db.promise().query(`SELECT ID FROM VERIFICATION WHERE ID = (?) AND TEACHER_ID = (?)`, [data.verificationId, data.teacherId]);
      if(!rows) throw new Error("해당 ID의 선생님 검증 정보가 존재하지 않습니다.");
      try {
        const [ rows ] = await db.promise().query(`INSERT INTO REVIEW (VERIFICATION_ID, SCORE, REVIEW_CONTENTS) VALUES (?, ?, ?)`, [data.verificationId, data.score, data.review]);
        return rows;
      } catch (err: any) {
        console.error(err);
        throw Error(err);
      }
    } catch (err: any) {
      throw Error(err);
    }
  }
}