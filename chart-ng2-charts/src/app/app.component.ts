import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public months:string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  public chartTypes:string[] = ['line','bar','horizontalBar','pie','doughnut','polarArea','radar']
  public chartType:string = this.chartTypes[0]

  public chartOne = {
    data: [
      10,20,30,40,50,60,70,80,90,100,110,120
    ],
    labels: this.months
  }

  public chartTwo = {
    data: [
      { data: [10,20,30,40,50,60,70,80,90,100,110,120], label: 'Data 1' }
      { data: [5,10,15,20,25,30,35,40,45,50,55,60], label: 'Data 2' }
    ],
    labels: this.months
  }
}
