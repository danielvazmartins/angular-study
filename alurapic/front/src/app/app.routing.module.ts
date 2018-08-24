import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolve } from './photos/photo-list/photo-list.resolve';

const routes:Routes = [
    { 
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },{
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },{ 
        path: 'user/:userName', 
        component: PhotoListComponent, 
        resolve: {
            photos: PhotoListResolve
        } 
    },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
] 

@NgModule({
    imports: [
        RouterModule.forRoot(routes) // Usa url history API por default
        //RouterModule.forRoot(routes, { useHash: true}) // Usa # no formato da Url
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}