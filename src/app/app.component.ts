import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'routingPractice';
}


// get
export interface Icompany{
  company_id:number
  company_name:string,
  industry:string,
  address:string,
  city:string,
  state_province:string,
  country:string,
  phone_number:string,
  email:string,
  website:string,
  ceo_owner:string,
  year_founded:number,
  revenue:number,
  employee_count:number,
  description:string
  }
  
  // get
  export interface Iemployee{
    employee_id:string,
    first_name:string,
    last_name:string,
    email:string,
    phone_number:string,
    hire_date:string,
    job_title:string,
    department:string,
    salary:number,
    manager_id:number
  }

// create

export interface Icreatecompany{
  company_name:string,
  industry:string,
  address:string,
  city:string,
  state_province:string,
  country:string,
  phone_number:string,
  email:string,
  website:string,
  ceo_owner:string,
  year_founded:number,
  revenue:number,
  employee_count:number,
  description:string
  }

  // create
  export interface Icreateemployee{
    first_name:string,
    last_name:string,
    email:string,
    phone_number:string,
    hire_date:string,
    job_title:string,
    department:string,
    salary:number,
    manager_id:number
  }

  // deleteemployee
  export interface Idelelecompany{
    company_id:number
  }

// deleteemployee
  export interface Ideletemployee{
    employee_id:number
  }

