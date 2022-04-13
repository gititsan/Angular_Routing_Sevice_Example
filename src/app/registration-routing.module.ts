import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [  
  {  
    path: 'registration',  
    component: RegistrationComponent  
  }
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/*
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
}) */
export class RegistrationRoutingModule { }
