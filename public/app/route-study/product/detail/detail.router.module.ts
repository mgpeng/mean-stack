import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent }       from './detail.component';

const routes: Routes = [
  { path: 'item',outlet:'product',component: DetailComponent,
       'loadChildren': './app/route-study/product/detail/item/item.module#ItemModule' },
  { path: '', outlet: 'product', component: DetailComponent }
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