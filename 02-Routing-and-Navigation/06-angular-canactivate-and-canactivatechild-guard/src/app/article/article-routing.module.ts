import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authActivechildGuard } from '../guard/auth-activechild.guard';
import { ArticleListComponent } from './article-list/article.list.component';
import { ArticleEditComponent } from './article-list/edit/article.edit.component';
import { ArticleComponent } from './article.component';

const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: 'list',
        component: ArticleListComponent,
        canActivateChild: [authActivechildGuard],
        children: [
          {
            path: ':id',
            component: ArticleEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(articleRoutes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
