import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideopickerRoutingModule } from './videopicker-routing.module';
import { VideopickerComponent } from './videopicker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VideopickerRoutingModule
  ],
  declarations: [ VideopickerComponent, DashboardComponent, ProdutosComponent ]
})
export class VideopickerModule { }
