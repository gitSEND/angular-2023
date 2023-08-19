import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

import { AuthGuardService } from './authentication/services/auth-guard.service';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/article',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [
      (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        inject(AuthGuardService).canActivate(route, state)
    ],
    children: [
      {
        path: 'article',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
      },
      {
        path: 'address',
        component: AddressComponent
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
