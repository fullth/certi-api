import { Service } from "typedi";
import { connection as db } from "../../mysql.db.connection";
import { CreateTeacherDTO } from '../../../dto/teacher/create.teacher.dto';

@Service()
export class TeacherRepository {

  public create = async (data: CreateTeacherDTO) => {
    try {
      const [ rows ] = await db.promise().query(`INSERT INTO TEACHERS (STORE) VALUES (?)`, [data.store]);
      return rows;
    } catch (err: any) {
      console.error(err);
      throw Error(err);
    }
  }

  public getAll = async () => {
    try {
      const [ rows ] = await db.promise().query(
        `SELECT * FROM TEACHERS WHERE VERIFICATION_CNT <= 5 AND OVERDUE = FALSE AND PASS_CNT < 3`
      );
      return rows;
    } catch (err: any) {
      console.error(err);
      throw Error(err)
    }
  }
}