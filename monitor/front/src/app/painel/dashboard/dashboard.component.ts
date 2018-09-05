import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/services/search/search.service';
import { FilterValues } from './filter.class';
import { interval, Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public panelFilter: FilterValues
    public chartData
    public tableData
    public reloadInterval = interval(10000)
    public lastUpdate: Date

    constructor(
        private searchService: SearchService
    ) {}

    ngOnInit(): void {
        this.panelFilter = {
            dateStart: new Date('08/29/2018'),
            timeStart: 32,
            dateEnd: new Date('08/29/2018'),
            timeEnd: 48
        }
        this.chartData = {
            results: [],
            label: 'Total de requisições'
        }
        this.tableData = { 
            results: [],
            displayedColumns: ['dateTime', 'success', 'error_with_impact', 'error_without_impact']
        }

        this.updateSearch(this.panelFilter)
    }

    addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
    }

    updateSearch($event: FilterValues) {
        // Periodo da busca
        let startDateTime = this.addMinutes($event.dateStart, $event.timeStart * 15)
        let endDateTime = this.addMinutes($event.dateEnd, $event.timeEnd * 15)

        let searchs$: Observable<any>[] = []
        searchs$.push(
            // Requisições totais
            this.searchService.searchTotalRequestsByPeriod(startDateTime, endDateTime)
            .pipe(map(response => {
                this.chartData.results = response['requests']
            }))
        )

        searchs$.push(
            // Requisições por hora
            this.searchService.searchTotalRequestsByHour(startDateTime, endDateTime)
            .pipe(map(response => {
                this.tableData.results = response['requests']
            }))
        )

        // Executa todas as buscas de uma vez
        forkJoin(...searchs$)
        .subscribe( () => {
            // Atualiza a data da última atualização
            this.lastUpdate = new Date()
        }, errors => {
            console.log(errors)
        })

    }
}