import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-total-requests',
    templateUrl: './card-total-requests.component.html'
})
export class CardTotalRequestsComponent {
    @Input() chartData
}