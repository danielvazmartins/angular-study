import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-requests',
    templateUrl: './table-requests.component.html',
    styleUrls: ['./table-requests.component.scss']
})
export class TableRequestsComponent {
    @Input() public tableData
}