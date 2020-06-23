// src/app/shared/models/user.model.ts

import {BasicInfo} from "./basic-info.model";
import {Exterior} from "./exterior.model";
import {Interior} from "./interior.model";
import {CustomerInfo} from "./customerinfo.model";
import{Coverages} from "./coverages.model"
import{DiscountsAndSurcharges} from "./discounts-and-surcharges.model"
import{Deductibles} from "./deductibles.model"


export class WorkQuote {
  basicinfo: BasicInfo;
  exterior:Exterior;
  interior:Interior;
  customerinfo:CustomerInfo;
  coverages:Coverages;
  discountsandsurcharges:DiscountsAndSurcharges;
  deductibles:Deductibles;
  totalpremium:string;
  extrapremium:string;
  finalpremium:string;
  statusid:number;
  quoteno:string;
}