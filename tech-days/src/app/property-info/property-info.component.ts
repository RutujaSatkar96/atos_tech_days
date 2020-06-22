import { Component, OnInit } from '@angular/core';
import { WorkQuote } from '../shared/models/work-quote.model';
import { CustomerInfo } from '../shared/models/customerinfo.model';
import { BasicInfo } from '../shared/models/basic-info.model';
import { Exterior } from '../shared/models/exterior.model';
import { Interior } from '../shared/models/interior.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {

  constructor(private _router: Router) { }

  workQuote=new WorkQuote();
  customerinfo=new CustomerInfo();
  basicinfo=new BasicInfo();
  exterior=new Exterior();
  interior=new Interior();

  ngOnInit(): void {
  }

  

  title = 'HttpRequest';
  quoteNo = "H458131342";

  workQuoteurl = "http://localhost:8080/customerInfo"
  url = "/assets/underwriting.json"
  navigateToUnderwriter(){
    this.basicinfo.yearbuilt = this.basicinfo.yearbuilt;
    this.basicinfo.purchasedate = this.basicinfo.purchasedate;
    this.customerinfo.area = this.customerinfo.area;
    this.exterior.buildingmaterial = this.exterior.buildingmaterial;
    this.exterior.roofshape= this.exterior.roofshape;
    this.exterior.swimmingpool = this.exterior.swimmingpool;
    this.basicinfo.primaryresidence = this.basicinfo.primaryresidence;
    this.interior.kitchencountertops = this.interior.kitchencountertops;
    this.interior.foundationtype = this.interior.foundationtype;
    this.exterior.buildingmaterial = this.exterior.buildingmaterial;
    this.exterior.typeofgarage = this.exterior.typeofgarage;
    this.basicinfo.noofstories = this.basicinfo.noofstories;

    this.workQuote.customerinfo= this.customerinfo;
    this.workQuote.basicinfo= this.basicinfo;
    this.workQuote.exterior= this.exterior;
    this.workQuote.interior= this.interior;

    if(this.basicinfo.yearbuilt == undefined|| this.basicinfo.purchasedate  == undefined ){
      alert('Please fill all details')
    }
    else{
      this._router.navigate(['app-customer-summary-edit']);

    }

  }

  show(){
    alert('data'+ this.basicinfo.yearbuilt + this.basicinfo.purchasedate + this.customerinfo.area + this.exterior.buildingmaterial+ this.exterior.roofshape
    + this.exterior.swimmingpool + this.basicinfo.primaryresidence+ this.interior.kitchencountertops +this.interior.kitchencountertops
    + this.interior.foundationtype + this.exterior.buildingmaterial + this.exterior.typeofgarage +this.basicinfo.noofstories);
  }
}
