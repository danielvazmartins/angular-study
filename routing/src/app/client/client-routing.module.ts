import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { VideopickerComponent } from './videopicker/videopicker.component';
import { VideopickerRoutingModule } from './videopicker/videopicker-routing.module';
import { DashboardComponent } from './videopicker/dashboard/dashboard.component';
import { videoPickerRoutes } from './videopicker/videopicker-routes';

const clientRoutes: Routes = [
  { path: 'client', component: ClientComponent,
    children: [
      { path: 'painel', component: PainelComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'videopicker', component: VideopickerComponent, children: videoPickerRoutes }
      /*{ path: 'videopicker', component: VideopickerComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'produtos', component: ProdutosComponent }
      ]}*/
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(clientRoutes)
  ],
  exports: [ RouterModule ]
})
export class ClientRoutingModule { }
