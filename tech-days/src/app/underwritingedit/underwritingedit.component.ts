import { Component, OnInit } from '@angular/core';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { pipe } from 'rxjs';
import { DataMenu } from '../shared/models/data.menu.model';


@Component({
  selector: 'app-underwritingedit',
  templateUrl: './underwritingedit.component.html',
  styleUrls: ['./underwritingedit.component.css']
})
export class UnderwritingeditComponent implements OnInit {
  workQuote:WorkQuote;

  title = 'HttpRequest';
  quoteNo = "";
  url = "/assets/underwriting.json"
  show: boolean = false;
  quoteList:Array<DataMenu>; 

  constructor(private http:HttpClient,private _router: Router,public restApi: RestApiService){

    let role = localStorage.getItem("typeId");
    this.quoteNo=localStorage.getItem("quoteno");
    if(role=="2"){
      this.show=true;
    }
  //   this.restApi.getQuote("1",this.quoteNo).subscribe((data: {}) => {
  //     console.log(data)
  //    this.workQuote =<WorkQuote> data;
  //    localStorage.setItem("email",this.workQuote.email);
  //    localStorage.setItem("dob",this.workQuote.dateofbirth);
  //  })

   this.restApi.getQuotes("1").subscribe((data: {}) => {
    console.log(data)
    this.quoteList= <DataMenu[]> data;
    if(this.quoteList.length>0){
      localStorage.setItem("quoteno",this.quoteList[0].value);
      this.quoteNo = localStorage.getItem("quoteno");

      this.restApi.getQuote("1",this.quoteNo).subscribe((data: {}) => {
        console.log(data)
       this.workQuote =<WorkQuote> data;
       localStorage.setItem("email",this.workQuote.email);
       localStorage.setItem("dob",this.workQuote.dateofbirth);
     })
  
    }else{
      alert('No data found');
    }
 })

  }

  ngOnInit(): void {
  }

  navigateDaashboard(){
    
    //this.workQuote.type="2";
    console.log(this.workQuote)
      this.restApi.updateQuote(this.workQuote).subscribe((data: {}) => {
        console.log(data)
       let quote = <WorkQuote>data;
        
       //this._router.navigate(['/app-complex-quote']);
       localStorage.setItem("child","0");


    
  

      this.restApi.getQuotes("2").subscribe((data: {}) => {
      
        let child =localStorage.getItem("child");
         let quoteLists= <DataMenu[]> data;
         console.log(quoteLists)

        if(quoteLists.length>0){
          localStorage.setItem("quoteno",quoteLists[0].value);
          this.quoteNo = localStorage.getItem("quoteno");
          if(quoteLists[0].icon == "2"){
            this._router.navigate(['/app-complex-quote']);
          }else if(quoteLists[0].value == "3"){
            this._router.navigate(['/app-complex-quote-new']);
          }
          
        }
     })
  
      
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

}

finalRequest(){
  
}
}
