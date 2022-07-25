import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListToExcelComponent } from './Components/list-to-excel/list-to-excel.component';
import { GroupstudentService } from './services/groupstudent.service';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [AppComponent, ListToExcelComponent],
  imports: [BrowserModule, AppRoutingModule, ToastModule,BrowserAnimationsModule],
  providers: [GroupstudentService],
  bootstrap: [AppComponent],
})
export class AppModule { }
