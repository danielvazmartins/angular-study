import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PainelComponent } from './painel/painel.component';
import { ClientesComponent } from './clientes/clientes.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, 
    children: [
      { path: 'painel', component: PainelComponent },
      { path: 'clientes', component: ClientesComponent }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
