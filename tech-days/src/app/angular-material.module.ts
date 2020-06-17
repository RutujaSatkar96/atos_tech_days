import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

@NgModule({
    imports: [MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
    exports: [MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule]
})

export class AngularMaterialModule { }