import { Injectable } from "@angular/core";
import { Student } from "./model";

@Injectable()
export class StudentService {
  private students: Student[] = [
    new Student("ABC", new Date(), 10, 1),
    new Student("PQR", new Date(), 10, 2)
  ];
  constructor() {}
  getStudents() {
    return this.students.slice();
  }
  getStudent(name: string) {
    return this.students[this.students.findIndex(item => item.name === name)];
  }
  addStudent(student: Student) {
    this.students.push(student);
  }
  updateStudent(name: string, updatedStudent: Student) {
    this.students[
      this.students.findIndex(item => item.name === name)
    ] = updatedStudent;
  }
  getStreams() {
    return [
      { id: 0, name: "CSE" },
      { id: 1, name: "IT" },
      { id: 2, name: "ENTC" }
    ];
  }
}
