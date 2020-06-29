import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ZelrosResponse } from '../shared/models/zelros/zelrosresponse.model';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Dialog3Component } from '../dialog3/dialog3.component';
import { ReportsComponent } from '../reports/reports.component';

@Component({
  selector: 'app-complex-quote-new',
  templateUrl: './complex-quote-new.component.html',
  styleUrls: ['./complex-quote-new.component.css']
})
export class ComplexQuoteNewComponent implements OnInit {

  id: number;

  zelrosResponse: ZelrosResponse;
  quoteNo = "H458131342";
  
  url1 = "/assets/under_zelros_flow_two.json";
  url2 = "/assets/under_zelros_flow_three.json";
  urlId : number =1;

  show: boolean =true;
  
  constructor(private route: ActivatedRoute, public dialog: MatDialog,private http:HttpClient) { 
    localStorage.setItem("typeId","2");
    localStorage.setItem("quote","3");

    this.quoteNo=localStorage.getItem("quoteno");
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

openZelrosSummary(){
  this.dialog.open(ReportsComponent, {position: {top: '10%', left: '30%', bottom: '10%'}})

}
}
