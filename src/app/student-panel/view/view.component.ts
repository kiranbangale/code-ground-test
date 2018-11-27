import { Component, OnInit } from "@angular/core";
import { Student } from "../../model";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentService } from "../../student.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  student: Student;
  streams;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.streams = this.studentService.getStreams();

    this.student = this.studentService.getStudent(
      this.route.snapshot.params.id
    );
  }
}
