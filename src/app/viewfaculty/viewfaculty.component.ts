import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor() { }






  facultyData:any=[{name:"karthik",department:"cs",designation:"proffessor",dob:"04-10-2001",qualification:"mca",address:"ernakulam",doj:"04-12-2022"},
  {name:"Roni",department:"civil",designation:"proffessor",dob:"02-01-2002",qualification:"mtech",address:"idukki",doj:"14-07-2023"},
  {name:"akhil",department:"mechanical",designation:"teacher",dob:"01-09-2000",qualification:"mtech",address:"trissur",doj:"02-06-2023"}
  ]

  ngOnInit(): void {
  }

}
