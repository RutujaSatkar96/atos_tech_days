import { Component, OnInit } from '@angular/core';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-summary-edit',
  templateUrl: './summary-edit.component.html',
  styleUrls: ['./summary-edit.component.css']
})
export class SummaryEditComponent implements OnInit {

 
  workQuote:WorkQuote;

  title = 'HttpRequest';
  quoteNo = "H458131342";
  url = "http://localhost:8080/getQuoteDetails?type=1&quoteNo=H124052941"
  typeID = "1";
  constructor(private http:HttpClient, private _router: Router,public restApi: RestApiService){
  
    this.quoteNo=localStorage.getItem("quoteno");
    this.typeID = localStorage.getItem("typeId");
   
    this.restApi.getQuote(this.typeID,this.quoteNo).subscribe((data: {}) => {
      console.log(data)
     this.workQuote =<WorkQuote> data;
     this.workQuote.quoteno = this.quoteNo;
   })
  }

  navigateToUnderwriter(){
    
    this.restApi.updateQuote(this.workQuote).subscribe((data: {}) => {
      console.log(data)
     let quote = <WorkQuote>data;
      
        this._router.navigate(['app-agent-review']);

    
    })
  }

  ngOnInit(): void {
     
  }
}


