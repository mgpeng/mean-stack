import { NgModule }      from '@angular/core';

import { Item2RouterModule } from './item2.router.module';
import { Item2Component }         from './item2.component';

@NgModule({
  imports: [
    Item2RouterModule
  ],
  declarations: [Item2Component],
  providers: [ ]
})
export class Item2Module { }