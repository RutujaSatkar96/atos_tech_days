import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';

@Component({
  selector: 'app-standard-quote',
  templateUrl: './standard-quote.component.html',
  styleUrls: ['./standard-quote.component.css']
})
export class StandardQuoteComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute,public dialog: MatDialog) { 
    localStorage.setItem("typeId","2");
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(Dialog1Component)
}
}
