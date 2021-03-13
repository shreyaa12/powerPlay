import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayTableComponent} from './display-table/display-table.component'

const routes: Routes = [
  {path: '', redirectTo: 'table' , pathMatch: 'full'},
  {path: 'table', component: DisplayTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
