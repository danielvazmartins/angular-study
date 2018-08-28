import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public months:string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  public chartOne = {
    results: this.genData(),
    showLegend: true,
    showXAxisLabel: true,
    xAxisLabel: 'Mês',
    showYAxisLabel: true,
    yAxisLabel: 'Quantidade'
  }  

  ngOnInit(): void {
  }

  genData() {
    return this.months.map(month => {
      return {
        name: month,
        value: Math.floor(Math.random() * 100 + 1)
      }
    })
  }
}