import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from "ng2-charts"

// declare var Chart : any;
// let myChart = new Chart(new CanvasRenderingContext2D());

import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';

  @NgModule({
  // A component must belong to an NgModule in order for it to be usable by
  // another component or application. To specify that a component is a member
  // of an NgModule, you should list it in the declarations field of that NgModule.
  declarations: [AppComponent, AppComponent2],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppComponent2]
})

export class AppModule {
}
