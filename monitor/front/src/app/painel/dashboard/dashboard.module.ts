import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PanelFilterComponent } from './panel-filter/panel-filter.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularMaterialModule } from '../../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphTotalRequests } from './graph-total-requests/graph-total-requests.component';
import { TableRequestsComponent } from './table-requests/table-requests.component';

@NgModule({
    declarations: [
        DashboardComponent,
        PanelFilterComponent,
        GraphTotalRequests,
        TableRequestsComponent
    ],
    imports: [
        AngularMaterialModule,
        NgxChartsModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule {}