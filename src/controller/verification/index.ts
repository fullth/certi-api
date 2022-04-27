import { Service } from "typedi";
import { Request, Response } from 'express';

@Service()
export class VerificationController {
  public verify = async (req: Request, res: Response) => {
    res.send();
  }

  public cancelVerify = async (req: Request, res: Response) => {
    res.send();
  }
}