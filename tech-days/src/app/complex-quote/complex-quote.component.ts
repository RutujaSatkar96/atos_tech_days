import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-complex-quote',
  templateUrl: './complex-quote.component.html',
  styleUrls: ['./complex-quote.component.css']
})
export class ComplexQuoteComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { 
    localStorage.setItem("typeId","2");
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogComponent)
}
}
