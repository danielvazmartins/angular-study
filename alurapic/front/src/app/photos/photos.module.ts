import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PhotoService } from "./photo/photo.service";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoDetailModule } from './photo-detail/photo-detail.module';

@NgModule({
    declarations: [
    ],
    imports: [
        PhotoListModule,
        PhotoModule,
        PhotoFormModule,
        PhotoDetailModule
    ],
    providers: [
    ]
})
export class PhotosModule {

}