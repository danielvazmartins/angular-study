import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-requests',
    templateUrl: './table-requests.component.html'
})
export class TableRequestsComponent {
    @Input() public tableData
}