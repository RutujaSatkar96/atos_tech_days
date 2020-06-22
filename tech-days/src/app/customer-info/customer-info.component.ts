import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'
import { CustomerInfo } from '../shared/models/customerinfo.model';
import { BasicInfo } from '../shared/models/basic-info.model';
import { Exterior } from '../shared/models/exterior.model';
import { Interior } from '../shared/models/interior.model';

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
    this.customerinfo.name=this.customerinfo.firstname+' '+this.customerinfo.lastname;
    this.customerinfo.address=this.customerinfo.street+' '+this.customerinfo.unit+' '+this.customerinfo.city+' '
                              this.customerinfo.state+' '+this.customerinfo.zip;

    this.workQuote.customerinfo= this.customerinfo;
    this.workQuote.basicinfo= this.basicinfo;
    this.workQuote.exterior= this.exterior;
    this.workQuote.interior= this.interior;

      console.log(this.workQuote)
      this._router.navigate(['app-customer-summary-edit']);

      //  let response = this.http.post(this.workQuoteurl,this.workQuote);
      // response.toPromise().then(data => {
      //   console.log(data)
      //   this.workQuote = <WorkQuote>(data);
      //   this._router.navigate(['app-customer-summary-edit']);
      // });
  }


  workQuote=new WorkQuote();
  customerinfo=new CustomerInfo();
  basicinfo=new BasicInfo();
  exterior=new Exterior();
  interior=new Interior();

   title = 'HttpRequest';
  quoteNo = "H458131342";

  workQuoteurl = "http://localhost:8080/customerInfo"
  url = "/assets/underwriting.json"

  constructor(private http:HttpClient, private _router: Router){
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      
      this.workQuote = <WorkQuote>(data);
     
    });
    
  }  

  navigateToPropertyInfo(){
    if(this.customerinfo.firstname == undefined || this.customerinfo.lastname == undefined || this.customerinfo.street == undefined || this.customerinfo.unit == undefined){
      alert('Please enter all fields.')
    }
    else{
      //this._router.navigate(['/app-property-info']);

    }
  }

  show(){
    alert('info'+ this.customerinfo.firstname+this.customerinfo.lastname+this.customerinfo.street+this.customerinfo.unit+this.customerinfo.city+this.customerinfo.state);

  }
}
