import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-detail/:id', component: ViewDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
