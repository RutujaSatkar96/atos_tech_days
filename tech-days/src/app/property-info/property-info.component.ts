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
  navigateToUnderwriter(){
    this._router.navigate(['app-customer-summary-edit']);
  }
}
