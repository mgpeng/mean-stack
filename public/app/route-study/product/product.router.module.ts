import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent }         from './product.component';

const routes: Routes = [
  { path: 'list', component:ProductComponent, 'loadChildren': './app/route-study/product/list/list.module#ListModule' },
  { path: 'detail',  component: ProductComponent, 'loadChildren': './app/route-study/product/detail/detail.module#DetailModule' },
  { path: 'detail/item2',  component: ProductComponent, 'loadChildren': './app/route-study/product/detail/item2/item2.module#Item2Module' },
  { path: '',  component: ProductComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductRouterModule {}