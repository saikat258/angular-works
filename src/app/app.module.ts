import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeserviceService } from './employeeservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyfilterPipe } from './myfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyfilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [EmployeeserviceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
