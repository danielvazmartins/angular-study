import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, PainelComponent, ClientesComponent]
})
export class AdminModule { }
