import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent} from './company/company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
{
path:'company',component:CompanyComponent
},
{
 path:'employee',component:EmployeeComponent
},
{
  path:'aboutcompany/:id',component:CompanyDetailsComponent
},
{
  path:'aboutemployee/:id',component:EmployeeDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
