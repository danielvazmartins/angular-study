import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-total-requests',
    templateUrl: './card-total-requests.component.html',
    styleUrls: ['./card-total-requests.component.scss']
})
export class CardTotalRequestsComponent {
    @Input() chartData
}