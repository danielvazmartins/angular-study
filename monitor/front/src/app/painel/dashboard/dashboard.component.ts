import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    
    public chartData = {
        results: [],
        label: ''
    }

    ngOnInit(): void {
        this.chartData.results = [
            {
                "name": "% Sucesso",
                "value": 869176
            },
            {
                "name": "% Erros com impacto",
                "value": 12745
            },
            {
                "name": "% Erros sem impacto",
                "value": 36240
            }
        ]
        this.chartData.label = "Total de requisições"
    }
    
}