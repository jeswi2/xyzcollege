import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetcData()
  }

fetcData=()=>{
  this.myapi.viewStudent().subscribe(
    (data)=>{
      this.studentData=data
    }
  )
  
}




studentData:any=[]

  ngOnInit(): void {
  }

}
