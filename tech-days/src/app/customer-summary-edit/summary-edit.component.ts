import { Component, OnInit } from '@angular/core';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-edit',
  templateUrl: './summary-edit.component.html',
  styleUrls: ['./summary-edit.component.css']
})
export class SummaryEditComponent implements OnInit {

 
  workQuote:WorkQuote;

  title = 'HttpRequest';
  quoteNo = "H458131342";
  url = "/assets/underwriting.json"
  constructor(private http:HttpClient, private _router: Router){
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
     // console.log(data)
    //  this.workQuote = <WorkQuote>(data);
    });
    
  }

  navigateToUnderwriter(){
    this._router.navigate(['app-agent-review']);
  }

  ngOnInit(): void {
  }
}


