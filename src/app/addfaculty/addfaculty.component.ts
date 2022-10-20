import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  department=""
  designation=""
  dob=""
  qualification=""
  address=""
  number=""
  doj=""

  status:boolean=false

  readValues=()=>{
    let data={
      "name":this.name,
  "department":this.department,
  "designation":this.designation,
  "dob":this.dob,
  "qualification":this.qualification,
  "address":this.address,
  "number":this.number,
  "doj":this.doj

    }
console.log(data)
this.myapi.addfaculty(data).subscribe(
  (response)=>{
    console.log(response)
    alert("success")
    this.name=""
this.department=""
  this.designation=""
  this.dob=""
  this.qualification=""
  this.address=""
  this.number=""
  this.doj=""
  this.status=true
  }
)
 }



  ngOnInit(): void {
  }

}
