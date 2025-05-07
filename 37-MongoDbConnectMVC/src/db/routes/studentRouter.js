import express from "express"
import { addStudent, deleteStudent, getStudentById, getStudents, updateStudent } from "../controllers/studentController.js"

const studentRouter = express.Router()

studentRouter.post("/", addStudent) 
studentRouter.get("/", getStudents)
studentRouter.get("/:id", getStudentById)
studentRouter.delete("/:id", deleteStudent)
studentRouter.put("/:id", updateStudent)

export default studentRouter