import { Router } from "express";
import { Container } from "typedi";
import { VerificationController } from '../controller/verification/index';

const router = Router();
const verificationController = Container.get(VerificationController);

router.route('/')
  .post(verificationController.verify) 
  .patch(verificationController.cancelVerify);


export default router;