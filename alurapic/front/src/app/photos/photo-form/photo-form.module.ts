import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageModule } from '../../shared/components/errormessage/errormessage.module';
import { PhotoModule } from '../photo/photo.module';
import { ImediateClickModule } from '../../shared/directives/imediate-click/imediate-click.module';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ErrorMessageModule,
        PhotoModule,
        ImediateClickModule
    ]
})
export class PhotoFormModule {

}