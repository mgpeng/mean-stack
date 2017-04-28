import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'route-study',
  template: `
    <nav>
      <a routerLink="/rshome" routerLinkActive="active">rshome</a>
      <a routerLink="/product" routerLinkActive="active">product</a>
      <a routerLink="/product/list" routerLinkActive="active">product/list</a>
      <a routerLink="/product/detail" routerLinkActive="active">product/detail</a>
      <a routerLink="/product/detail/item" routerLinkActive="active">product/detail/item</a>
      <a routerLink="/product/detail/item2" routerLinkActive="active">product/detail/item2</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class RouteStudyComponent { }