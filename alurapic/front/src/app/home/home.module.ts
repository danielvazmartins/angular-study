import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorMessageModule } from '../shared/components/errormessage/errormessage.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SignUpComponent } from './signup/signup.component';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [
        HomeComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ErrorMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        // Importa esse serviço aqui porque está sem o "providedIn 'root'""
        SignUpService
    ]
})
export class HomeModule {

}