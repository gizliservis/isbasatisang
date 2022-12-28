import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './compaments/product/product.component';
import {StudentEkleComponent} from './compaments/student-ekle/student-ekle.component';
import { StudentComponent } from './compaments/student/student.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:StudentComponent},
  //{path:"products",component:ProductComponent},
 // {path:"products/:Tanimi",component:ProductComponent},
  {path:"student",component:StudentComponent},
  {path:"student/add",component:StudentEkleComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
