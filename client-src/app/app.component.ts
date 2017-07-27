import { Component } from '@angular/core';
import { Router } from '@angular/router';

import '../style.scss';

@Component({
  selector: 'app',
  template:`
            <div> I changed back something</div>
            <a routerLink="route-study" class="strong">Route study</a>
            <a routerLink="home" class="strong">Home</a>
            <a routerLink="authentication" class="strong">Authentication</a>
            <a routerLink="chat" class="strong">Chat</a>
            <div class="highlight">
               <router-outlet></router-outlet>
            </div>
  `,
  styleUrls:['./app.component.scss']
})
export class AppComponent { 
  name = 'Angular'; 
  constructor( private router: Router ) {  //
    console.log("cp1");
  }
}

