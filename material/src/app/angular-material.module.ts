import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule, MatIconModule
  ],
  exports: [
    MatToolbarModule, MatIconModule
  ]
})
export class AngularMaterialModule { }
