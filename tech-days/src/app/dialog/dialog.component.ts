import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  email = "";
  dob = ""

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.email = localStorage.getItem("email");
    this.dob = localStorage.getItem("dob");

   }

  ngOnInit(): void {
  }

}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}