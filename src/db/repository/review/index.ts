import { Service } from "typedi";
import { connection as db } from "../../mysql.db.connection";
import { CreateReviewDTO } from "../../../dto/review/create.review.dto";

@Service()
export class ReviewRepository {
  
  public create = async (data: CreateReviewDTO) => {
    try {
      await db.beginTransaction((err) => { 
        db.rollback; throw err; 
      });
      const [ rows ] = await db.promise().query(`INSERT INTO REVIEW (VERIFICATION_ID) VALUES (?)`);
      await db.end((err) => { throw err; });
      return rows;
    } catch (err: any) {
      console.error(err);
      throw Error(err);
    }
  }
}