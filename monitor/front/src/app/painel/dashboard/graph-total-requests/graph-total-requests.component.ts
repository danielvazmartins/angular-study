import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-graph-total-requests',
    templateUrl: './graph-total-requests.component.html',
    styleUrls: ['./graph-total-requests.component.scss']
})
export class GraphTotalRequests {

    @Input() chartData
}