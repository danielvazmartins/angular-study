import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolve } from './photos/photo-list/photo-list.resolve';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

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
        },
        data: {
            title: 'Photos'
        }
    },{ 
        path: 'p/add', 
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Adicionar'
        }
    },{
        path: 'p/:photoId',
        component: PhotoDetailComponent,
        data: {
            title: 'Detalhe da foto'
        }
    },{ 
        path: 'not-found', 
        component: NotFoundComponent,
        data: {
            title: 'Not Found'
        }
    },{ 
        path: 'error', 
        component: GlobalErrorComponent,
        data: {
            title: 'Error'
        }
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