import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {
  @ViewChild('f')
  studentForm: NgForm;

  streams;
  editMode = false;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.streams = this.studentService.getStreams();
  }
}
