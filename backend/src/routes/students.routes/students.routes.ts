import express, {Request, Response} from "express";
import { createStudents, getStudents,deleteStudents, updateStudents} from "../../services/students.services/students.services";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
 const students = await getStudents();
 res.send(JSON.stringify(students));
});

router.post("/", async (req: Request, res: Response) => {
 const student_creation = await createStudents(req.body);
 res.send(student_creation);
});

router.delete("/", async (req: Request, res: Response) => {
 const delete_student = await deleteStudents(req.body.id);
 res.send(delete_student)
});
router.put("/", async (req: Request, res: Response) => {
 const update_student = await updateStudents(req.body);
 res.send(update_student)
});

export default router;
