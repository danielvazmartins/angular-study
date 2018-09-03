import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule, 
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule, 
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
