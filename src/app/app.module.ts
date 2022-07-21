import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListToExcelComponent } from './list-to-excel/list-to-excel.component';
import { GroupstudentService } from './services/groupstudent.service';
@NgModule({
  declarations: [AppComponent, ListToExcelComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GroupstudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
