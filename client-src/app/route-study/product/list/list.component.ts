import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  // moduleId: module.id,
  selector: 'my-product-list',
  template: `
    <div>The route is "product/list".</div>
  `
})
export class ListComponent {
  constructor(private _ts:TestService){
    _ts;
  }
}