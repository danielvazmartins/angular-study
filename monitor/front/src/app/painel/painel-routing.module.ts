import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../shared/services/auth/auth.guard';
import { C1Component } from './c1/c1.component';

const routes: Routes = [
    { 
        path: '', 
        component: PainelComponent,
        canActivate: [AuthGuard], 
        children: [
            { path: '', component: DashboardComponent },
            { path: 'c1', component: C1Component }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PainelRoutingModule {}