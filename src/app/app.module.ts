import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeInputComponent } from './add-employee-input/add-employee-input.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PureFiboPipe } from './core/pipes/pure-fibo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeInputComponent,
    EmployeeListComponent,
    PureFiboPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
