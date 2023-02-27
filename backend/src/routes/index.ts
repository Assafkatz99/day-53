import express from "express";
import studentsRoutes from "./students.routes/students.routes"

const router = express.Router();

router.use("/api/students/", studentsRoutes);

export default router;