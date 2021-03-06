import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideopickerComponent } from './videopicker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ VideopickerComponent, DashboardComponent, ProdutosComponent ]
})
export class VideopickerModule { }
