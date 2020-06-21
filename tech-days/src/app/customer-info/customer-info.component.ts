import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  // constructor(private _router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("typeId","1");
  }

  navigateToUnderwriter(){
      this._router.navigate(['app-customer-summary-edit']);
  }


  workQuote:WorkQuote;

   private firstname: string;
   private lastname: string;
   private effectivedate:string;
   private address: string;
   private phone:string;
   private homebuiltin:number;
   private area:string;
   private email:string;
   private dateofbirth:string;
   private pastpropertyclaimsorlosses:string;
   private maritalstatus:string;
   private runningbusinessfromhome:number;
   private smokerstatus :string;
   private criminalconvictions:string;

  title = 'HttpRequest';
  quoteNo = "H458131342";
  url = "/assets/underwriting.json"
  constructor(private http:HttpClient, private _router: Router){
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      console.log(data)
      this.workQuote = <WorkQuote>(data);
    });
    
  }  
}
