import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'list',
  templateUrl: 'app/articles/list/list.component.html'
})
export class ListComponent{
  articles: any;
  errorMessage: string;

  constructor(private _articlesService: ArticlesService) {}

  ngOnInit() {
    this._articlesService.list().subscribe(articles  => this.articles = articles);
  }
}