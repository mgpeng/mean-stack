import { Component } from '@angular/core';
import { TestService } from '../../test.service';
@Component({
  moduleId: module.id,
  selector: 'my-product-detail-item2',
  template: `
    <div>The route is "product/detail/item2".</div>
  `
})
export class Item2Component {
  constructor(private _ts:TestService){
   console.log('In item2');
    _ts;
  }
}