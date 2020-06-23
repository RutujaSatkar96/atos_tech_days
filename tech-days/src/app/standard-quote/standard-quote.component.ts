import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { ZelrosResponse } from '../shared/models/zelros/zelrosresponse.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-standard-quote',
  templateUrl: './standard-quote.component.html',
  styleUrls: ['./standard-quote.component.css']
})
export class StandardQuoteComponent implements OnInit {
  id: number;
  zelrosResponse: ZelrosResponse;
  quoteNo = "H458131342";
  url = "/assets/under_zerlos_flow_one.json";
  
  constructor(private route: ActivatedRoute,public dialog: MatDialog, private http:HttpClient) { 
    localStorage.setItem("typeId","2");

    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      console.log(data)
      this.zelrosResponse = <ZelrosResponse>(data);
    });
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(Dialog1Component)
}
}
