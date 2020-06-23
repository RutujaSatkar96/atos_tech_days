import { Component, OnInit } from '@angular/core';
import { WorkQuote } from '../shared/models/work-quote.model';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

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
  constructor(private http:HttpClient,private _router: Router){

    let role = localStorage.getItem("typeId");
    if(role=="2"){
      this.show=true;
    }

   
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      console.log(data)
      this.workQuote = <WorkQuote>(data);
    });
    
  }

  ngOnInit(): void {
  }

  navigateDaashboard(){
    this._router.navigate(['/app-standard-quote']);
}
emailRequest(){
  this._router.navigate(['/app-complex-quote']);
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
