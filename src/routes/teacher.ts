import { Router } from "express";
import { Container } from "typedi";
import { TeacherController } from '../controller/teacher/index';

const router = Router();
const teacherController = Container.get(TeacherController);

router.route('/')
  .get(teacherController.getAll) 
  .post(teacherController.create);

export default router;