import { Component, OnInit } from '@angular/core';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { ReportsComponent } from '../reports/reports.component';
import { ViewZelrosSummaryComponent } from '../view-zelros-summary/view-zelros-summary.component';
import { MatDialog } from '@angular/material/dialog';
import { Dialog3Component } from '../dialog3/dialog3.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { ClaimDialogComponent } from '../claim-dialog/claim-dialog.component';


@Component({
  selector: 'app-underwriting',
  templateUrl: './underwriting.component.html',
  styleUrls: ['./underwriting.component.css']
})
export class UnderwritingComponent implements OnInit {

  workQuote:WorkQuote;

  title = 'HttpRequest';
  quoteNo = "H458131342";
  url = "/assets/underwriting.json"
  show: boolean = false;
  constructor(private http:HttpClient,private _router: Router,public restApi: RestApiService,public dialog: MatDialog){
  
    
    let role = localStorage.getItem("typeId");
    if(role=="1"){
      this.show=true;
    }

    this.quoteNo=localStorage.getItem("quoteno");
   
    this.restApi.getQuote("1",this.quoteNo).subscribe((data: {}) => {
      console.log(data)
     this.workQuote =<WorkQuote> data;
   })

  
    
  }

  ngOnInit(): void {
  }

  navigateDaashboard(){

    this.restApi.updateQuote(this.workQuote).subscribe((data: {}) => {
      console.log(data)
     let quote = <WorkQuote>data;
      
     //this._router.navigate(['/app-standard-quote']);

    
    })
    
}
emailRequest(){
  //this._router.navigate(['/app-complex-quote']);
}
bindRequest(){

}

rejectRequest(){

}

propertyRequest(){

  if(localStorage.get("quote")=="3"){
//Complex new
  }else if(localStorage.get("quote")=="2"){
    //complex
  }else{
//standard
  }

  this.dialog.open(Dialog2Component)
}

finalRequest(){

  if(localStorage.get("quote")=="3"){
    //Complex new
      }else if(localStorage.get("quote")=="2"){
        //complex
      }else{
    //standard
      }
  this.dialog.open(ReportsComponent, {position: {top: '10%', left: '30%', bottom: '10%'}})
}


openDialog2() {
  this.dialog.open(Dialog2Component)
}

openClaimDialog(){
  this.dialog.open(ClaimDialogComponent);
}
}
