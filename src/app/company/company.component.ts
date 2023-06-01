import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Icompany,Idelelecompany} from '../app.component';
import { Router } from '@angular/router';
import { BoundElementProperty } from '@angular/compiler';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

data:Icompany[]=[];
uid:Idelelecompany={company_id:0}


constructor(public sObj:ServiceService, public router:Router){}

  ngOnInit(): void {
    this.sObj.getCompanyDetails().subscribe((data:any)=>{
      this.data=data; 
    })
  }
  
  getAboutCompanyDetails(id:number){
    this.router.navigate(['aboutcompany',id])
    console.log("selected Id company details",id);
  }

  deleteCompanyList(id:number){
    this.uid={company_id:id}
    this.sObj.deleteCompany(this.uid).subscribe()
    console.log(this.uid,'deleteUserId')
    this.ngOnInit()
    }

  }

