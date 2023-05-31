import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Icompany } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

data:Icompany[]=[];
constructor(public sObj:ServiceService, public router:Router){}

  ngOnInit(): void {
    this.sObj.getCompanyDetails().subscribe((data:any)=>{
      this.data=data; 
    })
  }
  
  getAboutCompanyDetails(id:string){
    this.router.navigate(['aboutcompany',id])
    console.log("selected Id company details",id);
  }

}