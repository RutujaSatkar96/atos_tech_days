import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnderwritingComponent } from './underwriting/underwriting.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';
import { ZelrosComponent } from './zelros/zelros.component';
import { RecentsComponent } from './recents/recents.component';
import { DialogComponent } from './dialog/dialog.component';
import { ComplexQuoteComponent } from './complex-quote/complex-quote.component';
import { AgentReviewComponent } from './agent-review/agent-review.component';
import { StandardQuoteComponent } from './standard-quote/standard-quote.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { UnderwritingeditComponent } from './underwritingedit/underwritingedit.component';
import { SummaryEditComponent } from './customer-summary-edit/summary-edit.component';
import { Dialog3Component } from './dialog3/dialog3.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AgentSidebarComponent } from './agent-sidebar/agent-sidebar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReportsComponent } from './reports/reports.component';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClaimDialogComponent } from './claim-dialog/claim-dialog.component';
import { ComplexQuoteNewComponent } from './complex-quote-new/complex-quote-new.component';

imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule
  ]

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DashboardComponent,
    SidebarComponent,
    AgentSidebarComponent,
    CustomerInfoComponent,
    UnderwritingComponent,
    CustomerSummaryComponent,
    ZelrosComponent,
    RecentsComponent,
    DialogComponent,
    ComplexQuoteComponent,
    AgentReviewComponent,
    StandardQuoteComponent,
    Dialog1Component,
    Dialog2Component,
    UnderwritingeditComponent,
    SummaryEditComponent,
    Dialog3Component,
    ReportsComponent,
    ClaimDialogComponent,
    ComplexQuoteNewComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
