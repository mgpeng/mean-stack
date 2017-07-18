import { Component } from '@angular/core';
import { TestService } from './test.service';
@Component({
  // moduleId: module.id,
  selector: 'my-product',
  template: `
    <div>The route is "product".</div>
    <div style="background:red">
       <router-outlet></router-outlet>
    </div>
    <div style="background:blue">
       <router-outlet name="product"></router-outlet>
    </div>
  `,
  // providers:[TestService]
})
export class ProductComponent {}

 