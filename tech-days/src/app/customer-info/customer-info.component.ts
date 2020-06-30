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
  min = new Date();
  maxDate = new Date().setDate(new Date().getDate() - 30);
  max = new Date(this.maxDate);
  customerForm: FormGroup;

  workQuote = new WorkQuote();

   title = 'HttpRequest';
  quoteNo = "H458131342";

  url = "/assets/underwriting.json"

  constructor(private fb: FormBuilder,public restApi: RestApiService, private http:HttpClient, private _router: Router){
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      
    //  this.workQuote = <WorkQuote>(data);
     
    });

    this.workQuote.yearbuilt = 2018;
    this.workQuote.area = "1000 sqft";
    //this.workQuote.exteriortype = "Stucco Frame";
    this.workQuote.roofstyle = "Flat";
    this.workQuote.foundationtype = "Piers";
    // this.workQuote.al ="Installed"
    // this.workQuote.firesprinklers ="Installed"
    // this.workQuote.emergencybackupgenerator ="Installed"
    // this.workQuote.firealarm ="Installed"

    this.workQuote.noofstories = 2;


    
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
    this.workQuote.name=this.workQuote.firstname+' '+this.workQuote.lastname;
    this.workQuote.address=this.workQuote.street+' '+this.workQuote.unitnumber+' '+this.workQuote.city+' '
                              this.workQuote.state+''+this.workQuote.country+' '+this.workQuote.zipcode;

  

      console.log(this.workQuote)
     // this._router.navigate(['app-customer-summary-edit']);

     if(this.workQuote.yearbuilt == undefined || this.workQuote.purchasedate == undefined || this.workQuote.noofstories == undefined
      || this.workQuote.foundationtype == undefined || this.workQuote.walltype== undefined || this.workQuote.roofstyle == undefined
      || this.workQuote.area == undefined || this.workQuote.typeofgarage == undefined || this.workQuote.swimmingpool == undefined
      || this.workQuote.firehydrant == undefined || this.workQuote.pastpropertyclaimsorlosses == undefined){
       alert('Please enter mandatory fields.')
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
   
    if(this.workQuote.firstname == undefined || this.workQuote.lastname == undefined  
      || this.workQuote.street == undefined || this.workQuote.city == undefined 
      || this.workQuote.state == undefined || this.workQuote.zipcode == undefined || this.workQuote.effectivedate == undefined
      || this.workQuote.propertyinsurance == undefined || this.workQuote.runningbusinessfromhome == undefined || this.workQuote.criminalconvictions == undefined
      || this.workQuote.smokerstatus == undefined || this.workQuote.pets == undefined || this.workQuote.policycancelled == undefined){
      alert('Please enter mandatory fields.');
    }
    else{
      (<HTMLElement>document.querySelectorAll('.mat-tab-label')[1]).click();

    }

    
  }

  navigateToCustomerInfo(){
    (<HTMLElement>document.querySelectorAll('.mat-tab-label')[0]).click();
  }

  show(){
    alert('info'+ this.workQuote.firstname+this.workQuote.lastname+this.workQuote.street+this.workQuote.unitnumber+this.workQuote.city+this.workQuote.state);

  }

  calculateDate(){
    var millisecondsbtw1970 = Date.parse(this.workQuote.dateofbirth);
    //Date.parse(this.customerinfo.dateofbirth);
    var millisecondbtwnow1970 = Date.now();
    var ageInMiliSeconds = millisecondbtwnow1970 - millisecondsbtw1970;
    var milliseconds = ageInMiliSeconds;
    var year = 1000*60*60*24*365;
    var years = Math.round(milliseconds/year)
      
    this.workQuote.age = years;
   
  
  }
}
