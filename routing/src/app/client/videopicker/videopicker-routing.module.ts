import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideopickerComponent } from './videopicker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosComponent } from './produtos/produtos.component';

const videoPickerRoutes: Routes = [
  { path: 'videopicker', component: VideopickerComponent, outlet: 'produto',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'produtos', component: ProdutosComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(videoPickerRoutes)
  ],
  exports: [ RouterModule ]
})
export class VideopickerRoutingModule { }
