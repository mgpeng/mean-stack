import { Component,Injector } from '@angular/core';
import { Router } from '@angular/router';

import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'create',
  templateUrl: 'app/articles/create/create.component.html'
})
export class CreateComponent {
  article: any = {};
  errorMessage: string='';

  constructor(private _router:Router,private _injector:Injector,
              private _articlesService: ArticlesService
              ) {
          debugger;
          console.log('cp2 inside CreateComponent');
          console.log(_injector);
        }

  create() {
    this._articlesService
        .create(this.article)
        .subscribe(createdArticle => this._router.navigate(['/articles', createdArticle._id]),
                  error =>  this.errorMessage = error);
  }
}