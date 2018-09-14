import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';
import { ToolBoxComponent } from './tool-box/tool-box.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ThumbItemComponent } from './tool-box/thumb-item/thumb-item.component';
import { DropBoxComponent } from './content-area/drop-box/drop-box.component';
import { GraphBoxComponent } from './content-area/graph-box/graph-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBoxComponent,
    ContentAreaComponent,
    ThumbItemComponent,
    DropBoxComponent,
    GraphBoxComponent
  ],
  imports: [
    BrowserModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
