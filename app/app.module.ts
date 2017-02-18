import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ChartsModule } from 'ng2-charts';

if (!ChartsModule) {
  console.log("OH NO ChartsModule not defined!")
}

import { Tabs } from './tabs.component';
import { Tab } from './tab.component';

import { LineChartDemoComponent } from './charts/line-chart-demo';
import { BarChartDemoComponent } from './charts/bar-chart-demo';
import { DoughnutChartDemoComponent } from './charts/doughnut-chart-demo';
import { PieChartDemoComponent } from './charts/pie-chart-demo';
import { PolarAreaChartDemoComponent } from './charts/polar-area-chart-demo';
import { RadarChartDemoComponent } from './charts/radar-chart-demo';
import { BaseChartDemoComponent } from './charts/base-chart-demo';

// declare var Chart : any;
// let myChart = new Chart(new CanvasRenderingContext2D());

import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';

@NgModule({
  // A component must belong to an NgModule in order for it to be usable by
  // another component or application. To specify that a component is a member
  // of an NgModule, you should list it in the declarations field of that NgModule.
  declarations: [
     AppComponent,
     AppComponent2,
     LineChartDemoComponent,
     BarChartDemoComponent,
     DoughnutChartDemoComponent,
     PieChartDemoComponent,
     PolarAreaChartDemoComponent,
     RadarChartDemoComponent,
     BaseChartDemoComponent,
     Tabs,
     Tab
   ],
  // Specifies a list of modules whose exported directives/pipes should be
  // available to templates in this module. This can also contain ModuleWithProviders.
  imports: [
    BrowserModule,
    FormsModule,
    Ng2BootstrapModule,
    ChartsModule
  ], // ONLY MODULES GO HERE
  // Defines the set of injectable objects that are available in the injector of this module.
  providers: [],
  // Defines the components that should be bootstrapped when this module is
  // bootstrapped. The components listed here will automatically be added to entryComponents.
  bootstrap: [AppComponent, AppComponent2]
})

export class AppModule {
}
