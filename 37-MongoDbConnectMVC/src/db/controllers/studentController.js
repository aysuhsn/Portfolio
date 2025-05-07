import student from "../models/studentModel.js";

export const addStudent = async (req, res) => {
  try {
    let newUser = new student(req.body);

    await newUser.save()

    return res.status(201).send("Student create success", newUser);
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

export const getStudents = async(req, res)=>{
    try {
        let students = await student.find()
        res.status(200).send(students)
    } catch (error) {
        return res.status(500).send("Server error");
    }
}

export const getStudentById = async(req, res)=>{
    const {id} = req.params

    try {
        let findStudent = await student.findById(id)
        
        if (!findStudent) {
            res.status(404).send("Student not found")
        }
        res.status(200).send(findStudent)
    } catch (error) {
        return res.status(500).send("Server error");
    }
}

export const deleteStudent = async(req, res)=>{
    let {id} = req.params

    try {
        let deletedStudent = await student.findByIdAndDelete(id)

        if (!deletedStudent) {
            res.status(400).send("Student not deleted")
        }
        res.status(200).send("Student deleted succes")
    } catch (error) {
        return res.status(500).send("Server error");
    }
}

export const updateStudent = async(req, res)=>{
    let {id} = req.params

    try {
        let newStudent = req.body
        let updatedStudent = await student.findByIdAndUpdate(id, newStudent)

        if (!updatedStudent) {
            res.status(400).send("Student not updated")
        }

        res.status(200).send({message:"Student update success", newStudent})
    } catch (error) {
        return res.status(500).send("Server error");
    }
}