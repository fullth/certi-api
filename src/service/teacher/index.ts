import { Inject, Service } from "typedi";
import { TeacherRepository } from '../../db/repository/teacher/teacher';

@Service()
export class TeacherService {
  constructor(@Inject() private readonly teacherRepository: TeacherRepository) {}

  public getAll = async () => { return await this.teacherRepository.getAll(); } 
}