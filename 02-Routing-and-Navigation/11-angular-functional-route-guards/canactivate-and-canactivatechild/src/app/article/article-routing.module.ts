import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article.list.component';
import { ArticleEditComponent } from './article-list/edit/article.edit.component';
import { AuthGuardService } from '../authentication/services/auth-guard.service';

const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: 'list',
        component: ArticleListComponent,
        canActivateChild: [
          (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
            inject(AuthGuardService).canActivateChild(route, state)
        ],
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
