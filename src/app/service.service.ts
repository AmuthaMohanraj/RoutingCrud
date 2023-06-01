import { Injectable,OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { BoundElementProperty } from '@angular/compiler';
import {Icreatecompany,Icreateemployee,Icompany, Iemployee, Ideletemployee } from './app.component';
import { Idelelecompany } from './app.component';
import { __makeTemplateObject } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit{

  url=''
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.getCompanyDetails();
  }

// getCompanylist
  getCompanyDetails(){
    this.url='http://localhost:3000/company'
    return this.http.get(this.url)
  }

  // getAboutCompany
  getCompanyById(id:string){
    this.url='http://localhost:3000/getCompanyById/'
    return this.http.get(this.url+id)
  }

  //createCompanyList
  createCompanyList(body:Icompany){
    this.url='http://localhost:3000/createCompanyList'
    return this.http.post(this.url,body)
  }

//updateCompanyList
  updateCompanyList(body:Icreatecompany){
    this.url='http://localhost:3000/updateCompanyList'
    return this.http.put(this.url,body)
  }

  // deleteCompanyList
  deleteCompany(body:Idelelecompany){
    this.url='http://localhost:3000/deleteCompanyList'
    return this.http.put(this.url,body)
  }

//employeeData 
  getEmployeeDetails(){
    this.url='http://localhost:3000/employee';
    return this.http.get(this.url)
  }
 
  // employeeById
  getEmployeeById(id:number){
    this.url='http://localhost:3000/getEmployeeById/'
    return this.http.get(this.url+id)
  }

  // createEmployeeList
  createEmployeeList(body: Iemployee) {
    this.url = 'http://localhost:3000/createEmployeeList';
    return this.http.post(this.url, body);
  }
  
  updateEmployeeList(body:Iemployee){
    this.url='http://localhost:3000/updateEmployeeList'
    return this.http.put(this.url,body)
  }

  deleteEmployeeList(body:Ideletemployee){
    this.url='http://localhost:3000/deleteEmployeeList'
    return this.http.put(this.url,body)
  }
  
}
