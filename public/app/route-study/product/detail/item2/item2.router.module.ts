import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Item2Component }         from './item2.component';

const routes: Routes = [
  { path: '', outlet: 'product', component: Item2Component }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class Item2RouterModule {}