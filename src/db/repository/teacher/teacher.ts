import { Service } from "typedi";
import { connection as db } from "../../mysql.db.connection";

@Service()
export class TeacherRepository {

  public async getAll() {
    try {
      const result = await db.promise().query(`SELECT * FROM TEACHER WHERE VERIFICATION_CNT <= 5 AND OVERDUE = FALSE AND PASS_CNT >= 3`);
      return result[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

}