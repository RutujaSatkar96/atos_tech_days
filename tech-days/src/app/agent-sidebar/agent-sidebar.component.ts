import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { DataMenu } from "../shared/models/data.menu.model";


@Component({
  selector: 'app-agent-sidebar',
  templateUrl: './agent-sidebar.component.html',
  styleUrls: ['./agent-sidebar.component.css']
})
export class AgentSidebarComponent implements OnInit {

  title = 'HttpRequest';
  quoteNo = "H458131342";
  url = "/assets/underwriting.json"
  show: boolean = false;
  children:Array<DataMenu>; 
  constructor(private _router: Router,public restApi: RestApiService) {

    let role = localStorage.getItem("typeId");
    if(role=="1"){
      this.show=true;
    }

    this.quoteNo=localStorage.getItem("quoteno");
   
   
    this.restApi.getQuotes("1").subscribe((data: {}) => {
      
      this.children= <DataMenu[]> data;
      console.log(this.children);
      let val={
        label:"MyWork List",
        collapse:true,
        icon:"worklist_icn",
        children:this.children
      }
      this.accordianData[1] = val;
     
    })

   }
  accordianData=[
   {
     label:"Agency Dashboard",
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
     label:"Agency Reports",
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
 }

 onAccodianChildClick(data,childindex,parentindex)
 {

  console.log(data)
  console.log(parentindex)
  console.log(childindex)
  if(parentindex == 1){
    console.log(parentindex)

    localStorage.setItem("quoteno",data)
    this._router.navigate(['app-agent-review']);
  }

  
 }
}

