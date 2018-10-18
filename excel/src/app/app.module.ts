import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExcelService } from './excel-service';
import { ExcelStyleService } from './excel-style-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      ExcelService,
      ExcelStyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
