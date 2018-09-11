import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';
import { LoadingType } from './loading-type';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
    progress$: Observable<LoadingType>

    constructor(private loadingService: LoadingService) {}

    ngOnInit(): void {
        this.progress$ = this.loadingService.getLoading()
    }
}