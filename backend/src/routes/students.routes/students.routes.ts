import express, {Request, Response} from "express";
import { createStudents, getStudents } from "../../services/students.services/students.services";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
 const students = await getStudents();
 res.send(JSON.stringify(students));
});

router.post("/", async (req: Request, res: Response) => {
 const student_creation = await createStudents(req.body);
 res.send(student_creation);
});

export default router;
