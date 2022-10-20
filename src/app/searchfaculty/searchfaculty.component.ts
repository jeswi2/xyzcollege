import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchfaculty',
  templateUrl: './searchfaculty.component.html',
  styleUrls: ['./searchfaculty.component.css']
})
export class SearchfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }

name=""


  readValues=()=>{
    let data={
      "name":this.name
    }
console.log(data)
this.myapi.searchfaculty(data).subscribe(
  (response)=>{
    this.data=response
    this.name=""
  }
)
  }

  data:any=[]

  ngOnInit(): void {
  }

}
