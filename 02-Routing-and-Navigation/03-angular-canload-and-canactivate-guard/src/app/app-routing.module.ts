import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { DashboardLayoutComponent } from './dashboard.layout.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(mod => mod.AddressModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
        canLoad: [AuthGuardService]
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
