import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
    declarations: [
        LoadingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoadingComponent
    ],
    providers: [
        LoadingService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true

        }
    ]
})
export class LoadingModule {

}