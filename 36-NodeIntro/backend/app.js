import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Salam");
});

let { students } = JSON.parse(fs.readFileSync("db.json"));

// GET Metodu

app.get("/api/students", (req, res) => {
  try {
    res.status(200).send({ message: "Success", data: students });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

app.get("/api/students/:id", (req, res) => {
  try {
    const { id } = req.params;

    const findStudents = students.find((student) => student.id === id);

    if (!findStudents) {
      return res.status(404).send({ message: "Student Not Found" });
    }

    res.status(200).send({ message: "Success", data: findStudents });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// POST Metodu

app.post("/api/students", (req, res) => {
  try {
    const newStudent = req.body;

    if (!newStudent.name && newStudent.age) {
      return res.send({ message: "Bad Request" });
    }
    students.push({ id: uuidv4(), ...newStudent });

    fs.writeFileSync("db.json", JSON.stringify({ students }));

    res.status(201).send({ message: "Student Create", data: newStudent });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// DELETE Metodu

app.delete("/api/students/:id", (req, res) => {
  let { id } = req.params;

  try {
    let studentIndex = students.findIndex((student) => student.id == id);

    if (studentIndex == -1) {
      res.status(404).send({ message: "Student Not Found" });
    }

    students.splice(studentIndex, 1);

    fs.writeFileSync("db.json", JSON.stringify({ students }));

    res.status(200).send({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// PUT Metodu

app.put("/api/students/:id", (req, res) => {
  let { id } = req.params;
  try {
    let updatedStudent = req.body;

    let studentIndex = students.findIndex((student) => student.id == id);

    if (studentIndex == -1) {
      res.status(404).send({ message: "Student Not Found" });
    }

    students[studentIndex] = {id, ...updatedStudent}
    fs.writeFileSync("db.json", JSON.stringify({students}))
    res.status(200).send({message:"Student Updated", data:updatedStudent})

  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// PATCH Metodu

app.patch("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    let studentIndex = students.findIndex((student) => student.id === id);

    if (studentIndex === -1) {
      return res.status(404).send({ message: "Student Not Found" });
    }

    const updatedStudent = { ...students[studentIndex], ...updates };

    students[studentIndex] = updatedStudent;

    fs.writeFileSync("db.json", JSON.stringify({ students }));

    res.status(200).send({ message: "Student Patched", data: updatedStudent });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});


app.listen(port, () => {
  console.log(`Server is Runnig from ${`http://localhost:${port}`}`);
});
