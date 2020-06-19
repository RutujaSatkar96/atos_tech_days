import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnderwritingComponent } from './underwriting/underwriting.component';
import { ZelrosComponent } from './zelros/zelros.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewDocumentsComponent } from './view-documents/view-documents.component';
import { ViewZelrosSummaryComponent } from './view-zelros-summary/view-zelros-summary.component';
import { SurveysComponent } from './surveys/surveys.component';
import { RecentsComponent } from './recents/recents.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-quote', pathMatch: 'full'},
  { path: 'app-quote', component: QuoteComponent },
  {path: 'app-customer-info', component: CustomerInfoComponent},
  {path : 'app-customer-summary' , component: CustomerSummaryComponent},
  { path: 'dashboard', component: DashboardComponent,
   children:[
     { path: '', component: UnderwritingComponent},
     { path: 'underwriting', component: UnderwritingComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'submissions', component: SubmissionsComponent},
     { path: 'reports', component: ReportsComponent},
     { path: 'viewdocuments', component: ViewDocumentsComponent},
     { path: 'viewzelrossummary', component: ViewZelrosSummaryComponent},
     { path: 'surveys', component: SurveysComponent},
     { path: 'recents', component: RecentsComponent},
     { path: '**', component: UnderwritingComponent}
   ] },
   { path: 'underwriting', component: UnderwritingComponent,children:[
    { path: '', component: SidebarComponent}]},
   { path: '**', component: QuoteComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
