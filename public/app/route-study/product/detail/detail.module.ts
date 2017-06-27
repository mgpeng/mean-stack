import { NgModule }      from '@angular/core';

import { DetailRouterModule } from './detail.router.module';
import { DetailComponent }    from './detail.component';


@NgModule({
  imports: [
    DetailRouterModule
  ],
  declarations: [DetailComponent],
  providers: []
})
export class DetailModule { constructor(){
    console.log('inside DetailModule');
  }}