import { Component, OnInit, Input } from "@angular/core";
import { StudentService } from "../../student.service";
import { Student } from "../../model";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add",
  templateUrl: "../student-form.html"
})
export class AddComponent implements OnInit {
  studentForm: FormGroup;
  editMode = true;
  streams;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.streams = this.studentService.getStreams();

    this.studentForm = this.formBuilder.group({
      name: new FormControl(null),
      dob: new FormControl(null),
      score: new FormControl(null),
      stream: new FormControl(null)
    });
  }
  onSubmit() {
    this.studentService.addStudent(
      new Student(
        this.studentForm.value.name,
        this.studentForm.value.dob,
        this.studentForm.value.score,
        this.studentForm.value.stream
      )
    );
    this.studentForm.reset();
    this.router.navigate(["/dashboard"]);
  }
}
