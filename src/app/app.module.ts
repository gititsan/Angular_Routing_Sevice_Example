import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoggingRoutingModule } from './logging-routing.module';
import { LoggingComponent } from './logging/logging.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimulatorComponent } from './simulator/simulator.component';
import { SimilatorRoutingModule } from './similator-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoggingComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RegistrationRoutingModule,
    LoggingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SimilatorRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
