import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinderComponent } from './tinder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaComponent } from './lista/lista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TinderComponent, DashboardComponent, ListaComponent]
})
export class TinderModule { }
