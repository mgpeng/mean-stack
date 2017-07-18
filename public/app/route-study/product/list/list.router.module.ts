import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }         from './list.component';

const routes: Routes = [
  { path: '',
    outlet: 'product', 
    component: ListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ListRouterModule {}