import { NgModule }      from '@angular/core';

import { ItemRouterModule } from './item.router.module';
import { ItemComponent }         from './item.component';

@NgModule({
  imports: [
    ItemRouterModule
  ],
  declarations: [ItemComponent],
  providers: [ ]
})
export class ItemModule {
  constructor(){
    console.log('inside ItemModule');
  }
 }