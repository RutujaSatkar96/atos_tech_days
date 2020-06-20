import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-agent-review',
  templateUrl: './agent-review.component.html',
  styleUrls: ['./agent-review.component.css']
})
export class AgentReviewComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
    localStorage.setItem("typeId","1");
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogComponent)
}
}
