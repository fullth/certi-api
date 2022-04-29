import { Inject, Service } from "typedi";
import { Request, Response } from 'express';
import { TeacherService } from '../../service/teacher/index';
import { CreateTeacherDTO } from '../../dto/teacher/create.teacher.dto';

@Service()
export class TeacherController {
  constructor(@Inject() private readonly teacherService: TeacherService) {}

  public create = async (req: Request, res: Response) => {
    const data: CreateTeacherDTO = req.body;
    try {
      res.status(200).send(await this.teacherService.create(data));
    } catch (err) {
      res.status(400).send("Unknown exception.")
    }
  }

  public getAll = async (req: Request, res: Response) => { res.send(await this.teacherService.getAll()); }
}