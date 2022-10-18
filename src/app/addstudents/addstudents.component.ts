import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {

  constructor() { }

name=""
rollno=""
admno=""
college=""
department=""
blood=""
dob=""
pa_name=""
pa_email=""
g_name=""
g_address=""

status:boolean=false

readValues=()=>{
  let data={
    "name":this.name,
    "rollno":this.rollno,
    "admno":this.admno,
    "college":this.college,
    "department":this.department,
    "blood":this.blood,
    "dob":this.dob,
    "pa_name":this.pa_name,
    "pa_email":this.pa_email,
    "g_name":this.g_name,
    "g_address":this.g_address
    
  }
  console.log(data)
  this.name=""
  this.rollno=""
  this.admno=""
  this.college=""
  this.department=""
  this.blood=""
  this.dob=""
  this.pa_name=""
  this.pa_email=""
  this.g_name=""
  this.g_address=""
  this.status=true

}




  ngOnInit(): void {
  }

}
