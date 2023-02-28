// import path from "path";
// import * as fs from "fs";

// const file_path = path.join(
//   "C:",
//   "Users",
//   "Assaf Katz",
//   "Desktop",
//   "Moveo full-stack course",
//   "day-53",
//   "day-53",
//   "data.json"
// );

// export const getStudents = () => {
//   const students = JSON.parse(fs.readFileSync(file_path, "utf-8"));
//   return students;
// };

// export const createStudents = (student: any) => {
//   const students = JSON.parse(fs.readFileSync(file_path, "utf-8"));
//   students.push(student);
//   fs.writeFileSync(file_path, JSON.stringify(students, null, 2), "utf-8");
//   return students;
// };
// export const deleteStudents = (student_id: any) => {
//   const students = JSON.parse(fs.readFileSync(file_path, "utf-8"));

//   const index = students.findIndex((item: any) => item.id === student_id);
//   if (index !== -1) {
//     students.splice(index, 1);
//   }

//   fs.writeFileSync(file_path, JSON.stringify(students, null, 2), "utf-8");
//   return students;
// };

// export const updateStudents = (student: any) => {
//   const students = JSON.parse(fs.readFileSync(file_path, "utf-8"));
//   const index = students.findIndex((item: any) => item.id === student.id);
//   if (index !== -1) {
//     students.splice(index, 1, {
//       id: student.id,
//       student_name: student.student_name !== "" ? student.student_name : students[index].student_name,
//       age: student.age !== "" ? student.age : students[index].age,
//       city: student.city !== "" ? student.city : students[index].city,
//     });
//   }
//   fs.writeFileSync(file_path, JSON.stringify(students, null, 2), "utf-8");
//   return students;
// };
import path from "path";
import * as fs from "fs";

const file_path = path.join(
  "C:",
  "Users",
  "Assaf Katz",
  "Desktop",
  "Moveo full-stack course",
  "day-53",
  "day-53",
  "data.json"
);

export const getStudents = () => {
  const studentsJson = JSON.parse(fs.readFileSync(file_path, "utf-8"));
  const students = studentsJson.students;
  return students;
// return studentsJson;};
}
export const createStudents = (student: any) => {
  const studentsJson = JSON.parse(fs.readFileSync(file_path, "utf-8"));
  const students = studentsJson.students;
  students.push(student);
  fs.writeFileSync(file_path, JSON.stringify(studentsJson, null, 2), "utf-8");
  return students;
// return studentsJson;
};

export const deleteStudents = (student_id: any) => {
  const studentsJson = JSON.parse(fs.readFileSync(file_path, "utf-8"));
  const students = studentsJson.students;

  const index = students.findIndex((item: any) => item.id === student_id);
  if (index !== -1) {
    students.splice(index, 1);
  }

  fs.writeFileSync(file_path, JSON.stringify(studentsJson, null, 2), "utf-8");
  return students;
// return studentsJson;
};

export const updateStudents = (student: any) => {
  const studentsJson = JSON.parse(fs.readFileSync(file_path, "utf-8"));
  const students = studentsJson.students;
  const index = students.findIndex((item: any) => item.id === student.id);
  if (index !== -1) {
    students.splice(index, 1, {
      id: student.id,
      student_name: student.student_name !== "" ? student.student_name : students[index].student_name,
      age: student.age !== "" ? student.age : students[index].age,
      city: student.city !== "" ? student.city : students[index].city,
    });
  }
  fs.writeFileSync(file_path, JSON.stringify(studentsJson, null, 2), "utf-8");
  return students;
//   return studentsJson;
};
