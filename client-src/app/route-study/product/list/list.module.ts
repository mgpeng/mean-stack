import { NgModule }      from '@angular/core';

import { ListRouterModule } from './list.router.module';
import { ListComponent }         from './list.component';

@NgModule({
  imports: [
    ListRouterModule
  ],
  declarations: [ListComponent],
  providers: [ ]
})
export class ListModule { }