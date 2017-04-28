import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RSHomeComponent }         from './rshome.component';

const routes: Routes = [
  { path: 'route-study',  component: RSHomeComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RSHomeRouterModule {}