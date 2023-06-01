import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Icreateemployee, Iemployee } from '../app.component';
import { STRING_TYPE } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  data:Iemployee[]=[];

  payRollBody:Iemployee={
    employee_id:0,
    first_name:'',
    last_name:'',
    email:'',
    phone_number:'',
    hire_date:'',
    job_title:'',
    department:'',
    salary:0,
    manager_id:0
  }
  

  constructor(public sObj:ServiceService,public router:Router){
  }

  ngOnInit(): void {
    this.getEmployeeDetails()
  }

//getAllEmployeesList 
  getEmployeeDetails(){
    this.sObj.getEmployeeDetails().subscribe((data:any)=>{
      this.data=data;
  })
 }

 //getEmployeeById
getAboutEmployeeDetails(id:number){
  console.log('routerId',id);
 this.router.navigate(['aboutemployee',id])
 }

//  editEmployeeList
 editEmployee(id:number){
  this.sObj.getEmployeeById(id).subscribe((data:any)=>{
  this.data=data

  this.payRollBody={
    employee_id:data[0].employee_id,
    first_name:data[0].first_name,
    last_name:data[0].last_name,
    email:data[0].email,
    phone_number:data[0].phone_number,
    hire_date:data[0].hire_date,
    job_title:data[0].job_title,
    department:data[0].department,
    salary:data[0].salary,
    manager_id:data[0].manager_id,
  }
  
  })
 }

// createEmployee
createEmployeeList(){
   this.sObj.createEmployeeList(this.payRollBody).subscribe()
   console.log(this.payRollBody)
   this.getEmployeeDetails()
  }

}

