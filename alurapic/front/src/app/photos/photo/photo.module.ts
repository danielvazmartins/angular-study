import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { PhotoService } from './photo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PhotoComponent
    ],
    providers: [
        PhotoService
    ]
})
export class PhotoModule {

}