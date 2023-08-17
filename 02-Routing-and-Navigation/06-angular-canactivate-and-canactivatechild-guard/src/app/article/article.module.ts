import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleListComponent } from './article-list/article.list.component';
import { ArticleEditComponent } from './article-list/edit/article.edit.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleService } from './services/article.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleEditComponent
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
