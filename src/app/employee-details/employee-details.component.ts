import { Component, OnInit, importProvidersFrom } from '@angular/core';
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
  let id: number = Number(this.activeRoute.snapshot.paramMap.get('id'));
   console.log(id);
  this.sObj.getEmployeeById(id).subscribe((data:any)=>{
    this.data=data;
  })
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  } 
  
}
