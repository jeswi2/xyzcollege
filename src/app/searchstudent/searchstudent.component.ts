import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }


inputvalue=""


  readValues=()=>{
    let data={
      "name":this.inputvalue,
      "admno":this.inputvalue
      
    }
    console.log(data)
    this.myapi.searchstudent(data).subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}
