import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoggingComponent } from './logging/logging.component';

const routes: Routes = [  
  {  
    path: 'logging',  
    component: LoggingComponent  
  }
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoggingRoutingModule { }
