import { NgModule } from '@angular/core';
import { PainelComponent } from './painel.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { PainelRoutingModule } from './painel-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { C1Component } from './c1/c1.component';
import { LogoSvgModule } from '../shared/components/logo-svg/logo-svg.module';
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../shared/services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [
        PainelComponent,
        SidenavComponent,
        C1Component
    ],
    imports: [
        RouterModule,
        PainelRoutingModule,
        LogoSvgModule,
        HttpClientModule,
        DashboardModule,
        AngularMaterialModule
    ],
    providers: [
        SearchService
    ]
})
export class PainelModule {}