import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}
  editMode = true;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    // this.studentForm.setValue({
    //   name: this.editedItem.name,
    //   amount: this.editedItem.amount
    // });
  }
}
