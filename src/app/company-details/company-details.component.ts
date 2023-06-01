import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Icompany} from '../app.component';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  data: Icompany[] = []

  payrollBody: Icompany = {
    company_id:0,  //it declard for only edit pupose it's not using create data
    company_name: '',
    industry: '',
    address: '',
    city: '',
    state_province: '',
    country: '',
    phone_number: '',
    email: '',
    website: '',
    ceo_owner: '',
    year_founded: 0,
    revenue: 0,
    employee_count: 0,
    description: ''
  }

  constructor(public sObj: ServiceService, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.activeroute.snapshot.params['id']
    console.log("selected Id activateroute", id);

    this.sObj.getCompanyById(id).subscribe((data:any) => {
      this.data = data;
      console.log(this.data);
    
      // this.payrollBody = {
      //   company_id:data[0].company_id,
      //   company_name: data[0].company_name,
      //   industry: data[0].industry,
      //   address: data[0].address,
      //   city: data[0].city,
      //   state_province: data[0].state_province,
      //   country: data[0].country,
      //   phone_number: data[0].phone_number,
      //   email: data[0].email,
      //   website: data[0].website,
      //   ceo_owner: data[0].ceo_owner,
      //   year_founded: data[0].year_founded,
      //   revenue: data[0].revenue,
      //   employee_count: data[0].employee_count,
      //   description: data[0].description
      // };
    
      console.log(this.payrollBody, 'payrollvalue');
    });
    
  }

  createItemsCompany() {
    this.sObj.createCompanyList(this.payrollBody).subscribe()
    console.log(this.payrollBody);
  }

  updateCompanyItem(){
    this.sObj.updateCompanyList(this.payrollBody).subscribe()
  }

}
