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
import { ComplexQuoteComponent } from './complex-quote/complex-quote.component';
import { AgentReviewComponent } from './agent-review/agent-review.component';
import { StandardQuoteComponent } from './standard-quote/standard-quote.component';
import { SummaryEditComponent } from './customer-summary-edit/summary-edit.component';
import { UnderwritingeditComponent } from './underwritingedit/underwritingedit.component';
import { PropertyInfoComponent } from './property-info/property-info.component';



const routes: Routes = [
  { path: '', redirectTo: 'app-quote', pathMatch: 'full'},
  { path: 'app-quote', component: QuoteComponent },
  {path: 'app-customer-info', component: CustomerInfoComponent},
  {path : 'app-customer-summary' , component: CustomerSummaryComponent},
  {path : 'app-customer-summary-edit' , component: SummaryEditComponent},
  {path: 'app-underwritingedit', component: UnderwritingeditComponent},
  {path: 'app-property-info', component: PropertyInfoComponent},
  { path: 'dashboard', component: DashboardComponent,
   children:[
     { path: '', component: UnderwritingeditComponent},
     { path: 'edit-underwriting', component: UnderwritingeditComponent},
     { path: 'underwriting', component: UnderwritingComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'submissions', component: SubmissionsComponent},
     { path: 'reports', component: ReportsComponent},
     { path: 'viewdocuments', component: ViewDocumentsComponent},
     { path: 'viewzelrossummary', component: ViewZelrosSummaryComponent},
     { path: 'surveys', component: SurveysComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'app-recents', component: RecentsComponent},
     { path: '**', component: UnderwritingeditComponent}
   ] },

   { path: 'app-standard-quote', component: StandardQuoteComponent,
   children:[
     { path: '', component: UnderwritingComponent},
     { path: 'underwriting', component: UnderwritingComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'submissions', component: SubmissionsComponent},
     { path: 'reports', component: ReportsComponent},
     { path: 'viewdocuments', component: ViewDocumentsComponent},
     { path: 'viewzelrossummary', component: ViewZelrosSummaryComponent},
     { path: 'surveys', component: SurveysComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'app-recents', component: RecentsComponent},
     { path: '**', component: UnderwritingComponent}
   ] },
   { path: 'app-complex-quote', component: ComplexQuoteComponent,
   children:[
     { path: '', component: UnderwritingComponent},
     { path: 'underwriting', component: UnderwritingComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'submissions', component: SubmissionsComponent},
     { path: 'reports', component: ReportsComponent},
     { path: 'viewdocuments', component: ViewDocumentsComponent},
     { path: 'viewzelrossummary', component: ViewZelrosSummaryComponent},
     { path: 'surveys', component: SurveysComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'app-recents', component: RecentsComponent},
     { path: '**', component: UnderwritingComponent}
   ] },
   { path: 'app-agent-review', component: AgentReviewComponent,
   children:[
     { path: '', component: UnderwritingComponent},
     { path: 'underwriting', component: UnderwritingComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'submissions', component: SubmissionsComponent},
     { path: 'reports', component: ReportsComponent},
     { path: 'viewdocuments', component: ViewDocumentsComponent},
     { path: 'viewzelrossummary', component: ViewZelrosSummaryComponent},
     { path: 'surveys', component: SurveysComponent},
     { path: '**', component: UnderwritingComponent}
   ] },

   { path: 'app-recents', component: RecentsComponent,
   children:[
     { path: '', component: UnderwritingComponent},
     { path: 'underwriting', component: UnderwritingComponent},
     { path: 'zelros', component: ZelrosComponent},
     { path: 'submissions', component: SubmissionsComponent},
     { path: 'reports', component: ReportsComponent},
     { path: 'viewdocuments', component: ViewDocumentsComponent},
     { path: 'viewzelrossummary', component: ViewZelrosSummaryComponent},
     { path: 'surveys', component: SurveysComponent},
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
