import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compaments/login/login.component';
import { ProductComponent } from './compaments/product/product.component';
import { StudentComponent } from './compaments/student/student.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"product",component:ProductComponent},
 // {path:"products/:Tanimi",component:ProductComponent},
  {path:"student",component:StudentComponent},
  {path:"login",component:LoginComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
