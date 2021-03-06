/**
 * Created by sagar on 3/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IssueComponent} from "./issue.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {AmexioDashboardModule} from "amexio-ng-extensions/dashboard";

const routes: Routes = [
  { path: '', component: IssueComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
    AmexioDashboardModule
  ],
  exports: [RouterModule],
  declarations : [
    IssueComponent
  ],
  providers : []
})
export class IssueModule { }
