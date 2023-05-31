import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Icompany} from '../app.component';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  data:Icompany[]=[]
 constructor(public sObj:ServiceService,private activeroute:ActivatedRoute){}

  ngOnInit(): void {
    let id:string=this.activeroute.snapshot.params['id']
    console.log("selected Id activateroute",id);
      this.sObj.getCompanyById(id).subscribe((data:any)=>{
         this.data=data;
      })
  }
  
}
