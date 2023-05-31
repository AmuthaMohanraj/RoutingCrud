import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Iemployee } from '../app.component';
import { STRING_TYPE } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  data:Iemployee[]=[];

  constructor(public sObj:ServiceService,public router:Router){
  }

  ngOnInit(): void {
    this.getEmployeeDetails()
  }

  getEmployeeDetails(){
    this.sObj.getEmployeeDetails().subscribe((data:any)=>{
      this.data=data;
  })

}


getAboutEmployeeDetails(id:string){
  console.log('routerId',id);
 this.router.navigate(['aboutemployee',id])
}

}

