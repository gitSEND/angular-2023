import { Route } from '@angular/router';
import { EmployeeComponent } from '../components/employee/employee.component';
import { DevComponent } from '../components/dev/dev.component';


export const ROUTES: Route[] = [
  {
    path: 'emp',
    component: EmployeeComponent,
    children: [
      {
        path: 'emp-detail/:id',
        loadComponent: () => import('src/app/components/employee-detail/employee-detail.component')
          .then(mod => mod.EmployeeDetailComponent)
      }
    ]
  },
  {
    path: 'dev',
    component: DevComponent,
    loadChildren: () => import('src/app/routes/dev-routes.constant')
      .then(mod => mod.DEV_ROUTES)
  }
];
