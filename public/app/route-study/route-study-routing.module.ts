import { RouteStudyComponent } from './route-study.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'route-study',component:RouteStudyComponent},
  { path: 'rshome', loadChildren: './app/route-study/rshome.module#RSHomeModule' },
  { path: 'product', loadChildren: './app/route-study/product/product.module#ProductModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RouteStudyRoutingModule {}