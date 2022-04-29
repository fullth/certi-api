import { Inject, Service } from "typedi";
import { TeacherRepository } from '../../db/repository/teacher/teacher';
import { CreateTeacherDTO } from '../../dto/teacher/create.teacher.dto';

@Service()
export class TeacherService {
  constructor(@Inject() private readonly teacherRepository: TeacherRepository) {}

  public create = async (data: CreateTeacherDTO) => {return await this.teacherRepository.create(data);}
  public getAll = async () => { return this.teacherRepository.getAll(); } 
}