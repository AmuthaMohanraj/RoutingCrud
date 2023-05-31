import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Iemployee } from '../app.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

 data:Iemployee[]=[];
constructor(private sObj:ServiceService,public activeRoute:ActivatedRoute)
{

}


  ngOnInit(): void {
   let id:string|null=this.activeRoute.snapshot.paramMap.get('id')
   console.log(id);
  this.sObj.getEmployeeById(id).subscribe((data:any)=>{
    this.data=data;
  })
  }

  
}
