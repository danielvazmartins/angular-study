import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FilterValues } from '../filter.class';
import { periodsMock } from '../../../shared/mocks/periods.mock';
import { reloadIntervalMock, ReloadInterval } from '../../../shared/mocks/reload-interval.mock';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-panel-filter',
    templateUrl: './panel-filter.component.html',
    styleUrls: ['./panel-filter.component.scss']
})
export class PanelFilterComponent implements OnInit {
    @Input() filterValues: FilterValues
    @Input() lastUpdate: Date
    @Output() changeFilter: EventEmitter<FilterValues> = new EventEmitter<FilterValues>()

    public filterForm: FormGroup
    public periods: string[] = periodsMock
    public reloadIntervals: ReloadInterval[] = reloadIntervalMock
    public reloadInterval: Observable<number>
    public reloadIntervalValue: number
    public autoReload: Subscription

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        // Formulario do filtro
        this.filterForm = this.formBuilder.group({
            dateStart: [this.filterValues.dateStart, Validators.required],
            timeStart: [this.filterValues.timeStart, Validators.required],
            dateEnd: [this.filterValues.dateEnd, Validators.required],
            timeEnd: [this.filterValues.timeEnd, Validators.required]
        })

        this.reloadIntervalValue = this.reloadIntervals[3].value 
        this.changeReloadInterval(this.reloadIntervalValue)
    }

    // Chama a função do pai que atualiza os dados da tela
    updateSearch() {
        this.changeFilter.emit(this.filterForm.getRawValue() as FilterValues)
    }

    // Altera o intervalo do auto reload
    changeReloadInterval(newInterval: number) {
        this.autoReload && this.autoReload.unsubscribe()
        this.reloadInterval = interval(newInterval)
        this.autoReload = this.reloadInterval.subscribe( () => {
            this.updateSearch()
        })
    }

    stopAutoReload() {
        this.autoReload && this.autoReload.unsubscribe()
    }

    startAutoReload() {
        this.changeReloadInterval(this.reloadIntervalValue)
    }
}