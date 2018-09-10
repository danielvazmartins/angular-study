import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolve } from './photos/photo-list/photo-list.resolve';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';

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
    },{ 
        path: 'p/add', 
        component: PhotoFormComponent,
        canActivate: [AuthGuard]
    },{
        path: 'p/:photoId',
        component: PhotoDetailComponent
    },{ 
        path: 'not-found', 
        component: NotFoundComponent 
    },{ 
        path: '**', 
        redirectTo: 'not-found'
    }
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