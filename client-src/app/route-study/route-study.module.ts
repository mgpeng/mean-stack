import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteStudyRoutingModule } from './route-study-routing.module';
import { RouteStudyComponent }         from './route-study.component';
// import { RSHomeModule } from './rshome/rshome.module';
// import { ProductModule } from './product/product.module';
// import { DetailModule } from './product/detail/detail.module';
// import { ListModule } from './product/list/list.module';
// import { ItemModule } from './product/detail/item/item.module';
// import { Item2Module } from  './product/detail/item2/item2.module';

@NgModule({
  imports: [
    BrowserModule,
    // RSHomeModule,
    // ProductModule,
    // DetailModule,
    // ListModule,
    // ItemModule,
    // Item2Module
    RouteStudyRoutingModule,
  ],
  declarations: [
    RouteStudyComponent,
  ],
  providers: [ ]
})
export class RouteStudyModule { }