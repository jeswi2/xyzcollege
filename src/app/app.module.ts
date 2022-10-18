import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';


const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"addstudent",component:AddstudentsComponent
  },
  {
    path:"viewst",component:ViewstudentsComponent
  },
  {
    path:"addfaculty",component:AddfacultyComponent
  },
  {
    path:"viewfa",component:ViewfacultyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    HomeComponent,
    AddstudentsComponent,
    ViewstudentsComponent,
    AddfacultyComponent,
    ViewfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
