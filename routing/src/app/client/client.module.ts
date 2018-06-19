import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { VideopickerModule } from './videopicker/videopicker.module';
import { TinderModule } from './tinder/tinder.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    VideopickerModule,
    TinderModule
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
