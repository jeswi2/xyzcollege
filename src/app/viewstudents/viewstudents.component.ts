import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }


studentData:any=[{name:"tom",rollno:"29",admno:"2929",college:"xyz",department:"civil",blood:"O+",dob:"03-09-2001",pa_name:"thomas",pa_email:"thomas@gmail.com",g_name:"thomas",g_address:"ernakulam"},
{name:"karthik",rollno:"30",admno:"2029",college:"xyz",department:"cs",blood:"O-",dob:"04-10-2001",pa_name:"ks",pa_email:"ks@gmail.com",g_name:"ks",g_address:"ernakulam"},
{name:"yadu",rollno:"49",admno:"2439",college:"xyz",department:"mechanical",blood:"A+",dob:"03-07-2002",pa_name:"KA",pa_email:"ka@gmail.com",g_name:"KA",g_address:"Idukki"}

]

  ngOnInit(): void {
  }

}
