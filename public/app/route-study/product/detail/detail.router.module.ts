import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent }       from './detail.component';

const routes: Routes = [
  { path: 'item',component: DetailComponent,
    outlet: 'detail',  loadChildren: './item/item.module#ItemModule' },
  { path: '',  component: DetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DetailRouterModule {
  constructor(){
    console.log('inside DetailRouterModule');
  }
}