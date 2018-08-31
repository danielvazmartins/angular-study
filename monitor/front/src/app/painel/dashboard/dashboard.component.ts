import { Component, OnInit } from '@angular/core';
import { periodsMock } from '../../shared/mocks/periods.mock';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SearchService } from '../../shared/services/search/search.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    
    public filterForm: FormGroup
    public chartData = {
        results: [],
        label: ''
    }
    public tableData = { 
        results: [],
        displayedColumns: ['dateTime', 'success', 'error_with_impact', 'error_without_impact']
    }
    public periods: string[] = periodsMock

    constructor(
        private formBuilder: FormBuilder,
        private searchService: SearchService
    ) {}

    ngOnInit(): void {
        // Formulario do filtro
        this.filterForm = this.formBuilder.group({
            dateStart: ['', Validators.required],
            timeStart: ['', Validators.required],
            dateEnd: ['', Validators.required],
            timeEnd: ['', Validators.required]
        })

        //this.updateSearch()
    }

    updateSearch() {
        // Periodo da busca
        let startDateTime = this.addMinutes(
            this.filterForm.get('dateStart').value._d,
            this.filterForm.get('timeStart').value * 15)
        let endDateTime = this.addMinutes(
            this.filterForm.get('dateEnd').value._d,
            this.filterForm.get('timeEnd').value * 15)

        // Requisições totais
        this.searchService.searchTotalRequestsByPeriod(startDateTime, endDateTime)
        .subscribe(response => {
            this.chartData.results = response['requests']
            this.chartData.label = "Total de requisições"
        })

        // Requisições por hora
        this.searchService.searchTotalRequestsByHour(startDateTime, endDateTime)
        .subscribe(response => {
            this.tableData.results = response['requests']
            console.log(response)
        })
    }

    addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
    }
}