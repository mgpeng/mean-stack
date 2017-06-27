import { Component } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'my-product-detail',
  template: `
    <div>The route is "product/detail".</div>
    <div style="background:green">
    <router-outlet name="detail"></router-outlet>
    </div>
  `
})
export class DetailComponent {constructor(){
    console.log('inside DetailComponent');
  }}

  // 