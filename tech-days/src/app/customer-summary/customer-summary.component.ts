import { Component, OnInit } from '@angular/core';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent implements OnInit {

  workQuote:WorkQuote;

  title = 'HttpRequest';
  quoteNo = "H458131342";
  url = "/assets/underwriting.json"
  constructor(private http:HttpClient){
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      console.log(data)
      this.workQuote = <WorkQuote>(data);
    });
    
  }

  ngOnInit(): void {
  }
}
