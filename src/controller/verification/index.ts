import { Inject, Service } from "typedi";
import { Request, Response, NextFunction } from 'express';
import { VerificationService } from '../../service/verification/index';
import { VerificationDto } from '../../dto/verification/verification.dto';
import { CancelVerificationDto } from '../../dto/verification/cancel/cancel.verification.dto';
import { HttpException } from '../../exceptions/httpException';

@Service()
export class VerificationController {
  constructor (@Inject() private readonly verificationService: VerificationService) {};

  public verify = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const data: VerificationDto = req.body;
      const result = await this.verificationService.verify(data);
      
      res.status(200).send(result);
    } catch {
      next(new HttpException(400, "Something is wrong"));
    }
  }

  public cancelVerify = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const data: CancelVerificationDto = req.body;
      const result = await this.verificationService.cancelVerify(data);
      
      res.status(200).send(result);
    } catch {
      next(new HttpException(400, "Something is wrong"));
    }
  }
}