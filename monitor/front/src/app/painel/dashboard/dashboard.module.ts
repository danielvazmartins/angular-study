import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PanelFilterComponent } from './panel-filter/panel-filter.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularMaterialModule } from '../../angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GraphTotalRequests } from './graph-total-requests/graph-total-requests.component';
import { TableRequestsComponent } from './table-requests/table-requests.component';
import { CardTotalRequestsComponent } from './card-total-requests/card-total-requests.component';

@NgModule({
    declarations: [
        DashboardComponent,
        PanelFilterComponent,
        GraphTotalRequests,
        TableRequestsComponent,
        CardTotalRequestsComponent
    ],
    imports: [
        AngularMaterialModule,
        NgxChartsModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class DashboardModule {}