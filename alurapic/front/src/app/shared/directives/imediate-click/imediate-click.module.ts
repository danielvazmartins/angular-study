import { NgModule } from '@angular/core';
import { ImediateClickDirective } from './imediate-click.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ImediateClickDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ImediateClickDirective
    ]
})
export class ImediateClickModule {

}