import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
    imports: [MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
    exports: [MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule]
})

export class AngularMaterialModule { }