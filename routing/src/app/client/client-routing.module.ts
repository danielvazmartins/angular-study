import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { VideopickerComponent } from './videopicker/videopicker.component';
import { videoPickerRoutes } from './videopicker/videopicker-routes';
import { TinderComponent } from './tinder/tinder.component';
import { tinderRoutes } from './tinder/tinder-routes';

const clientRoutes: Routes = [
  { path: '', component: ClientComponent,
    children: [
      { path: '', redirectTo: 'videopicker', pathMatch: 'full' },
      { path: 'videopicker', component: VideopickerComponent, children: videoPickerRoutes },
      { path: 'tinder', component: TinderComponent, children: tinderRoutes }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(clientRoutes)
  ],
  exports: [ RouterModule ]
})
export class ClientRoutingModule { }
