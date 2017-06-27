import { NgModule }      from '@angular/core';

import { RSHomeRouterModule } from './rshome.router.module';
import { RSHomeComponent }         from './rshome.component';

@NgModule({
  imports: [
    RSHomeRouterModule
  ],
  declarations: [RSHomeComponent],
  providers: [ ]
})
export class RSHomeModule { }