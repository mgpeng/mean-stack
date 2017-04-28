import { NgModule }      from '@angular/core';

import { ProductRouterModule } from './product.router.module';
import { ProductComponent }         from './product.component';
import { TestService } from './test.service';

@NgModule({
  imports: [
    ProductRouterModule
  ],
  declarations: [ProductComponent],
  providers: [TestService]
})
export class ProductModule { }