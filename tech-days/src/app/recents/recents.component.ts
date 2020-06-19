import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {

  constructor() {
    localStorage.setItem("typeId","1");
   }

  ngOnInit(): void {
  }

}
