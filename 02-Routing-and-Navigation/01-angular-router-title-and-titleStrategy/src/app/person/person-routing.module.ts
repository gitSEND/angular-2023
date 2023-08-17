import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const personRoutes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
    title: 'Person',
    children: [
      {
        path: '',
        component: PersonListComponent,
        title: 'Person List',
        children: [
          {
            path: ':id',
            component: PersonEditComponent,
            title: 'Edit Person'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
