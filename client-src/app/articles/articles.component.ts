import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'articles',
  template:`<router-outlet></router-outlet>`
})
export class ArticlesComponent {
    constructor(private _as: ArticlesService) {
        console.log('cp2 inside ArticlesComponent');
    }
}
