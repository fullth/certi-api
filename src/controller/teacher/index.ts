import { Inject, Service } from "typedi";
import { NextFunction, Request, Response } from 'express';
import { TeacherService } from '../../service/teacher/index';
import { CreateTeacherDTO } from '../../dto/teacher/create.teacher.dto';
import { HttpException } from "../../exceptions/httpException";

@Service()
export class TeacherController {
  constructor(@Inject() private readonly teacherService: TeacherService) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const data: CreateTeacherDTO = req.body;
    
    try {
      res.status(200).send(await this.teacherService.create(data));
    } catch (err) {
      next(new HttpException(400, "Something is wrong"));
    }
  }

  public getAll = async (req: Request, res: Response) => { 
    res.send(await this.teacherService.getAll()); 
  }
}