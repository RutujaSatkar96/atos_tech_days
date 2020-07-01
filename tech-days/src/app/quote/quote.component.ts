import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  postalCode: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToCustomerInfo(){
    if(this.postalCode == undefined){
      alert('Please enter postal code')
    }
    else{
      this._router.navigate(['app-customer-info']);
    }
    
      
  }

}
