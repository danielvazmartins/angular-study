import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PhotoService } from "./photo.service";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        PhotoService
    ]
})
export class PhotosModule {

}