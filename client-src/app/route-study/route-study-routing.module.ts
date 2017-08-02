import { RouteStudyComponent } from './route-study.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RSHomeModule } from './rshome/rshome.module';
import { ProductModule } from './product/product.module';

export function loadRSHomeModule() { return RSHomeModule; }
export function loadProductModule() { return ProductModule; }

export const routes: Routes = [
  { path:'route-study',
    // outlet: 'product',
    component:RouteStudyComponent,
    children:[
        { path: 'rshome', 
          // loadChildren: loadRSHomeModule
         loadChildren: './rshome/rshome.module#RSHomeModule' 
        },
        { path: 'product', 
          // loadChildren: loadProductModule
          loadChildren: './product/product.module#ProductModule' 
        },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RouteStudyRoutingModule {}