import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent }         from './product.component';

import { DetailModule } from './detail/detail.module';
import { ListModule } from './list/list.module';
import { ItemModule } from './detail/item/item.module';
import { Item2Module } from './detail/item2/item2.module';

// export function loadDetailModule() { return DetailModule; }
// export function loadListModule() { return ListModule; }
// export function loadItem2Module() { return Item2Module; }

const routes: Routes = [
  { path: 'list',
    component: ProductComponent,
    // outlet:'product', 
    loadChildren: './list/list.module#ListModule' },
  { path: 'detail', 
    component: ProductComponent,
    // outlet:'detail', 
    loadChildren: './detail/detail.module#DetailModule' },
  { path: 'item',  
    // component: ProductComponent,
    // outlet:'detail', 
    loadChildren: './detail/item/item.module#ItemModule' },
  { path: 'item2',  
    // component: ProductComponent,
    // outlet:'detail', 
    loadChildren: './detail/item2/item2.module#Item2Module' },
  { path: '',  component: ProductComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductRouterModule {}