import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentService } from "../../student.service";
import { Student } from "../../model";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-edit",
  templateUrl: "../student-form.html"
})
export class EditComponent implements OnInit {
  studentForm: FormGroup;
  student: Student;
  editMode = true;
  streams;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.streams = this.studentService.getStreams();

    this.student = this.studentService.getStudent(
      this.route.snapshot.params.id
    );
    this.studentForm = this.formBuilder.group({
      name: this.student.name,
      dob: this.student.dob,
      score: this.student.score,
      stream: this.student.stream
    });
  }
  onSubmit() {
    this.studentService.updateStudent(
      this.route.snapshot.params.id,
      this.studentForm.value
    );
    this.studentForm.reset();
    this.router.navigate(["/dashboard"]);
  }
}
