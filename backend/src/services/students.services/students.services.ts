
let students :any = [
    { "id": 1, "student_name": "stu 1", "age": 32, "city": "city" },
    { "id": 2, "student_name": "stu 2", "age": 43, "city": "city" },
    { "id": 3, "student_name": "stu 3", "age": 55, "city": "city" },
    { "id": 4, "student_name": "stu 4", "age": 11, "city": "city" }
  ]


export const getStudents = () => {  
    return students;
};
   
export const createStudents = (student: any) => {
    students.push(student)
    return students;
};
   