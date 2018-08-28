import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

const routes: Routes = [
    { path: '', component: PainelComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}