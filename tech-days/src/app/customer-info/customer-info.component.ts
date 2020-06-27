import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { CustomerInfo } from '../shared/models/customerinfo.model';
import { BasicInfo } from '../shared/models/basic-info.model';
import { Exterior } from '../shared/models/exterior.model';
import { Interior } from '../shared/models/interior.model';
import { RestApiService } from "../shared/rest-api.service";
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  // constructor(private _router: Router) { }

  customerForm: FormGroup;

  workQuote = new WorkQuote();
  customerinfo=new CustomerInfo();
  basicinfo=new BasicInfo();
  exterior=new Exterior();
  interior=new Interior();

   title = 'HttpRequest';
  quoteNo = "H458131342";

  url = "/assets/underwriting.json"

  constructor(private fb: FormBuilder,public restApi: RestApiService, private http:HttpClient, private _router: Router){
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      
    //  this.workQuote = <WorkQuote>(data);
     
    });

    this.basicinfo.yearbuilt = 2018;
    this.customerinfo.area = "1000 sqft";
    this.exterior.buildingmaterial = "Stucco Frame";
    this.exterior.roofshape = "Flat";
    this.interior.foundationtype = "Piers";
    this.interior.foundationtype = "Piers";
    this.basicinfo.burglarsalarm ="Installed"
    this.basicinfo.firesprinklers ="Installed"
    this.basicinfo.emergencybackupgenerator ="Installed"
    this.basicinfo.firealarm ="Installed"

    this.basicinfo.noofstories = 2;


    
  }  


  ngOnInit(): void {
    localStorage.setItem("typeId","1");
    this.initForm();
  }


  private initForm(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(null,[Validators.required]),
      lastName: new FormControl(null,[Validators.required]),
      
    });
    

   
  }

  tabClick(tab) {
    console.log(tab);

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
     // this._router.navigate(['app-customer-summary-edit']);

     if(this.basicinfo.yearbuilt == undefined || this.basicinfo.purchasedate == undefined || this.basicinfo.noofstories == undefined
      || this.interior.foundationtype == undefined || this.exterior.buildingmaterial == undefined || this.exterior.roofshape == undefined
      || this.customerinfo.area == undefined || this.exterior.typeofgarage == undefined || this.basicinfo.primaryresidence == undefined
      || this.exterior.roofmaterial == undefined || this.interior.kitchencountertops == undefined || this.exterior.swimmingpool == undefined
      || this.basicinfo.firehydrant == undefined || this.customerinfo.pastpropertyclaimsorlosses == undefined){
       alert('Please enter all field. All fields are mandatory')
     }
     else{
      this.restApi.createQuote(this.workQuote).subscribe((data: {}) => {
        console.log(data)
        this.workQuote = <WorkQuote>(data);
        if(this.workQuote.quoteno != null){
          localStorage.setItem("quoteno",this.workQuote.quoteno)
        this._router.navigate(['app-customer-summary-edit']);
        }else{
          alert('Something went to wrong please try again later.')
        }
      })
     }
      

    
  }


  
  navigateToPropertyInfo(){
   
    if(this.customerinfo.firstname == undefined || this.customerinfo.lastname == undefined  
      || this.customerinfo.street == undefined || this.customerinfo.unit == undefined || this.customerinfo.city == undefined 
      || this.customerinfo.state == undefined || this.customerinfo.zip == undefined || this.customerinfo.effectiveDate == undefined
      || this.customerinfo.currentlyproissues == undefined || this.customerinfo.businessfromhome == undefined || this.customerinfo.criminalconvictions == undefined
      || this.customerinfo.smokerstatus == undefined || this.customerinfo.petsathome == undefined || this.customerinfo.cancelpolicy == undefined
      || this.customerinfo.nameofinsurer == undefined || this.customerinfo.cancelationyear == undefined || this.customerinfo.cancelationreason == undefined){
      alert('Please enter all field. All fields are mandatory');
    }
    else{
      (<HTMLElement>document.querySelectorAll('.mat-tab-label')[1]).click();

    }

    
  }

  navigateToCustomerInfo(){
    (<HTMLElement>document.querySelectorAll('.mat-tab-label')[0]).click();
  }

  show(){
    alert('info'+ this.customerinfo.firstname+this.customerinfo.lastname+this.customerinfo.street+this.customerinfo.unit+this.customerinfo.city+this.customerinfo.state);

  }
}
