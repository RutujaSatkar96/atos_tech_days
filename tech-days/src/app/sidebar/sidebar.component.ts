import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  accordianData=[
   {
     label:"DashBoard",
     collapse:false,
     icon:"dashboard_icn"
   },
   {
     label:"MyWork List",
     collapse:true,
     icon:"worklist_icn",
     children:[
      {
       value:"H458131342",
       icon:"fa fa-cubes"
      },
      {
       value:"H526525490",
       icon:"fa fa-eyedropper"
      },
      {
       value:"H120807569",
       icon:"fa fa-eyedropper"
      },
      {
       value:"H985673142",
       icon:"fa fa-eyedropper"
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
     label:"Zelros Summary",
     collapse:false,
     icon:"summary_icn"
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
   let accordianStauts=this.accordianData[index]['collapse'];
   this.accordianData.forEach(function(data,index){
     data.collapse=false;
   });
   this.accordianData[index]['collapse']=!accordianStauts;
 }
}
