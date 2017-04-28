import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  template:`
            <a routerLink="route-study">Route study</a>
            <a routerLink="home">Home</a>
             <a routerLink="authentication">Authentication</a>
            <router-outlet></router-outlet>
  `
})
export class AppComponent { 
  name = 'Angular'; 
  constructor( private router: Router) {
    console.log("cp1");
  }
}


//  <h1>Hello {{name}}</h1>
//             <a routerLink="/home">Home</a>
//             <a routerLink="/authentication">Authentication</a>