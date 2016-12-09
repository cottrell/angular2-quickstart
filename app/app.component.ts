import {Component} from '@angular/core';
import {AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import {NgModel} from '@angular/forms';


// declare var Chart : any;
// let myChart = new Chart(new CanvasRenderingContext2D());

declare var jsSHA : any;

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9">
          <alert type="info">
          ng2-bootstrap hello world! Selected date is: <em *ngIf="dt">{{ getDate() | date:'fullDate'}}</em>
          <p>
            SHA-512 Hash example of including some js module
            HEX: {{hash}}
          </p>
          </alert>
        </div>
        <div class="col-md-3">
          <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
        </div>
      </div>
    </div>
    <my-app2>my-app2 loading .... </my-app2>
  `,
})
export class AppComponent {
  public dt:Date = new Date();
  private minDate:Date = null;
  private events:Array<any>;
  private tomorrow:Date;
  private afterTomorrow:Date;
  private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format = this.formats[0];
  private dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  shaObj: any;
  hash: String;
  constructor() {
    this.shaObj = new jsSHA("SHA-512", "TEXT");
    this.shaObj.update("This is a test");
    this.hash = this.shaObj.getHash("HEX");
  }
}
