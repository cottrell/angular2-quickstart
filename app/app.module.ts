import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from "ng2-charts"

// declare var Chart : any;
// let myChart = new Chart(new CanvasRenderingContext2D());

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
