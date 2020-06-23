import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Dialog3Component } from '../dialog3/dialog3.component';
import { ZelrosResponse } from '../shared/models/zelros/zelrosresponse.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complex-quote',
  templateUrl: './complex-quote.component.html',
  styleUrls: ['./complex-quote.component.css']
})
export class ComplexQuoteComponent implements OnInit {
  id: number;

  zelrosResponse: ZelrosResponse;
  quoteNo = "H458131342";
  
  url1 = "/assets/under_zelros_flow_two.json";
  url2 = "/assets/under_zelros_flow_three.json";
  urlId : number =1;

  show: boolean =true;
  
  constructor(private route: ActivatedRoute, public dialog: MatDialog,private http:HttpClient) { 
    localStorage.setItem("typeId","2");

    if(this.urlId == 1){
      let response = this.http.get(this.url1);
      response.toPromise().then(data => {
      console.log(data)
      this.zelrosResponse = <ZelrosResponse>(data);
      this.show =true;
    });
    }
    else if(this.urlId == 2){
      let response = this.http.get(this.url2);
      response.toPromise().then(data => {
      console.log(data)
      this.zelrosResponse = <ZelrosResponse>(data);
      this.show =false;
    });
    }
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(Dialog2Component)
}

openDialog3() {
  this.dialog.open(Dialog3Component)
}
}
