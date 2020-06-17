import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToCustomerInfo(){
      this._router.navigate(['app-customer-info']);
  }

}
