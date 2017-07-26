import { RouteStudyComponent } from './route-study.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'route-study',
    // outlet: 'product',
    component:RouteStudyComponent,
    children:[
        { path: 'rshome', 
         loadChildren: './rshome/rshome.module#RSHomeModule' },
        { path: 'product', 
          loadChildren: './product/product.module#ProductModule' },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RouteStudyRoutingModule {}

// ,
//   { path: '**', redirectTo: '', pathMatch: 'full' },