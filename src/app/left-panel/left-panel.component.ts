import { Component, OnInit } from '@angular/core';
import { Student } from '../model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
  onSubmit() {
    this.router.navigate(['/student/add']);
  }
}
