import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
    localStorage.setItem("typeId","2");

   }
  ngOnInit(): void {
    
  }
  ngOnDestroy() {
  }
}
