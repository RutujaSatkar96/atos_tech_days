import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { ZelrosResponse } from '../shared/models/zelros/zelrosresponse.model';

@Component({
  selector: 'app-agent-review',
  templateUrl: './agent-review.component.html',
  styleUrls: ['./agent-review.component.css']
})
export class AgentReviewComponent implements OnInit {

  zelrosResponse: ZelrosResponse;
  quoteNo = "H458131342";
  url = "/assets/admin_zerlos_flow_one.json";
  
  constructor(public dialog: MatDialog,private http:HttpClient) { 
    localStorage.setItem("typeId","1");
    this.quoteNo=localStorage.getItem("quoteno");
    let response = this.http.get(this.url);
    response.toPromise().then(data => {
      console.log(data)
      this.zelrosResponse = <ZelrosResponse>(data);
    });

  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogComponent)
}

}
