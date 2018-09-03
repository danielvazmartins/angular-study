import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FilterValues } from '../filter.class';
import { periodsMock } from '../../../shared/mocks/periods.mock';

@Component({
    selector: 'app-panel-filter',
    templateUrl: './panel-filter.component.html',
    styleUrls: ['./panel-filter.component.scss']
})
export class PanelFilterComponent implements OnInit {
    @Input() filterValues: FilterValues
    @Output() changeFilter: EventEmitter<FilterValues> = new EventEmitter<FilterValues>()

    public filterForm: FormGroup
    public periods: string[] = periodsMock

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        // Formulario do filtro
        this.filterForm = this.formBuilder.group({
            dateStart: [this.filterValues.dateStart, Validators.required],
            timeStart: [this.filterValues.timeStart, Validators.required],
            dateEnd: [this.filterValues.dateEnd, Validators.required],
            timeEnd: [this.filterValues.timeEnd, Validators.required]
        })
    }

    updateSearch() {
        this.changeFilter.emit(this.filterForm.getRawValue() as FilterValues)
    }
}