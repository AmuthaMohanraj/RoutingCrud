import { Injectable,OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit{

  url=''
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.getCompanyDetails();
  }


  getCompanyDetails(){
    this.url='http://localhost:3000/company'
    return this.http.get(this.url)
  }

  getCompanyById(id:string){
    this.url='http://localhost:3000/getCompanyById/'
    return this.http.get(this.url+id)
  }

  getEmployeeDetails(){
    this.url='http://localhost:3000/employee';
    return this.http.get(this.url)
  }


  getEmployeeById(id:string|null){
    this.url='http://localhost:3000/getEmployeeById/'
    return this.http.get(this.url+id)
  }

}
