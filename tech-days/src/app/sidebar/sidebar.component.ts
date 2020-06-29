import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { DataMenu } from "../shared/models/data.menu.model";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { ReportsComponent } from '../reports/reports.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title = 'HttpRequest';
  quoteNo = "H458131342";
  url = "/assets/underwriting.json"
  show: boolean = false;
  quoteList:Array<DataMenu>; 
  constructor(private _router: Router,public restApi: RestApiService,public dialog: MatDialog) {

    let role = localStorage.getItem("typeId");
    if(role=="1"){
      this.show=true;
    }

    this.quoteNo=localStorage.getItem("quoteno");
   
    this.restApi.getQuotes("1").subscribe((data: {}) => {
      
      this.quoteList= <DataMenu[]> data;
      let val={
        label:"MyWork List",
        collapse:true,
        icon:"worklist_icn",
        children:this.quoteList
      }
      console.log(this.quoteList);
      this.accordianData.map((todo, i) => {
        if (todo.label == val.label){
           this.accordianData[i] = val;
         }
       });
   })

   }
  accordianData=[
   {
     label:"U/W DashBoard",
     collapse:false,
     icon:"dashboard_icn"
   },
   {
     label:"MyWork List",
     collapse:true,
     icon:"worklist_icn",
     children:[
      {
       value:this.quoteNo,
       icon:"fa fa-cubes"
      }
     ]
   },
   {
     label:"My Submissions",
     collapse:false,
     icon:"submissions_icn"
   },
   {
     label:"Reports",
     collapse:false,
     icon:"reports_icn",
     children:[
      {
       value:"Property Inspection Report",
       icon:"fa fa-cubes"
      },
      {
       value:"Swimming Pool Invoice",
       icon:"fa fa-eyedropper"
      }
     ]
   },
   {
     label:"View Documents",
     collapse:false,
     icon:"documents_icn"
   },
   {
     label:"My Surveys",
     collapse:false,
     icon:"surveys_icn"
   },
   {
     label:"Recents",
     collapse:false,
     icon:"recents_icn"
   }
 ]


 ngOnInit(): void {
 }
 onAccodianClick(data,index)
 {
   if(index == 1 || index ==3){
   let accordianStauts=this.accordianData[index]['collapse'];
   this.accordianData.forEach(function(data,index){
     data.collapse=false;
   });
   this.accordianData[index]['collapse']=!accordianStauts;
  }
  // else{
  //  if(index == 5){
  //   this.dialog.open(ReportsComponent, {position: {top: '10%', left: '30%', bottom: '10%'}})
  // }
  // }
 }

 onAccodianChildClick(data,childindex,parentindex)
 {

  console.log(data)
  console.log(parentindex)
  console.log(childindex)
  if(parentindex == 1){
    localStorage.setItem("quoteno",data)
    console.log(data)
    if(childindex == 1){
      this._router.navigate(['/app-complex-quote']);
    }else if(childindex == 2){
      this._router.navigate(['/app-complex-quote-new']);
    }
    else{
      this._router.navigate(['/app-standard-quote']);
    }
  }

  
 }
}
