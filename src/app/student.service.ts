import { Injectable } from '@angular/core';
import { Student } from './model';

@Injectable()
export class StudentService {
  // studentSelected = new EventEmitter<Student>();

  private students: Student[] = [
    new Student('ABC', new Date(), 10, 1),
    new Student('PQR', new Date(), 10, 1)
  ];
  constructor() {}
  getStudents() {
    return this.students.slice();
  }
  getStudent(index: number) {
    return this.students[index];
  }
  addStudent(student: Student) {
    this.students.push(student);
  }
  updateStudent(index: number, updatedStudent: Student) {
    this.students[index] = updatedStudent;
  }
  getStreams() {
    return [
      { id: 0, name: 'CSE' },
      { id: 1, name: 'IT' },
      { id: 2, name: 'ENTC' }
    ];
  }
}
