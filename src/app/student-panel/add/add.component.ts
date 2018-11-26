import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    this.studentService.addStudent(
      new Student(
        form.value.name,
        form.value.dob,
        form.value.score,
        form.value.grade
      )
    );
    // this.editMode = false;
    form.reset();
  }
}
