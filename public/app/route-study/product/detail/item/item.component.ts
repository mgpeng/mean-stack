import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-product-detail-item',
  template: `
    <div>The route is "product/detail/item".</div>
  `
})
export class ItemComponent {
  constructor(){
    console.log('inside item component');
  }
}