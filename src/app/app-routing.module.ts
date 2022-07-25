import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListToExcelComponent} from "./Components/list-to-excel/list-to-excel.component";

const routes: Routes = [
  {path : "", component:ListToExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
