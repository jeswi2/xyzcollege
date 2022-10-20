import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewfaculty().subscribe(
      (data)=>{
        this.facultyData=data
      }
    )
  }
  deletefaculty=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deletefaculty(data).subscribe(
      (response)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
  }





  facultyData:any=[]

  ngOnInit(): void {
  }

}
