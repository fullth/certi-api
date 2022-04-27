import { Service } from "typedi";
import { Request, Response } from 'express';

@Service()
export class ReviewController {
  constructor() {}

  public create = async (req: Request, res: Response) => {
    res.send();
  }
}