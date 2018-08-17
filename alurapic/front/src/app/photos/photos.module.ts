import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PhotoService } from "./photo/photo.service";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    declarations: [
    ],
    imports: [
        PhotoListModule,
        PhotoModule,
        PhotoFormModule
    ],
    providers: [
    ]
})
export class PhotosModule {

}