import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  viewStudent=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/studententry",data)
  }

  deletestudent=(data:any)=>{
    return this.http.post("http://localhost:8080/deletestudent",data)
  }

  searchstudent=(data:any)=>{
    return this.http.post("http://localhost:8080/searchstudent",data)
  }

}
