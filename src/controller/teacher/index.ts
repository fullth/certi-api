import { Inject, Service } from "typedi";
import { Request, Response } from 'express';
import { TeacherService } from '../../service/teacher/index';

@Service()
export class TeacherController {
  constructor(@Inject() private readonly teacherService: TeacherService) {}

  public create = async (req: Request, res: Response) => {
    res.send();
  }

  public getAll = async (req: Request, res: Response) => {
    res.send(await this.teacherService.getAll());
  }
}