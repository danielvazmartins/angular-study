import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { VideopickerModule } from './videopicker/videopicker.module';
import { VideopickerRoutingModule } from './videopicker/videopicker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    VideopickerModule
  ],
  declarations: [ClientComponent, PainelComponent, ProdutosComponent]
})
export class ClientModule { }
