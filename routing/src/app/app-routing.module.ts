import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // Lazy loading
  { path: 'admin', loadChildren: '../app/admin/admin.module#AdminModule' },
  { path: 'client', loadChildren: '../app/client/client.module#ClientModule' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule { }
