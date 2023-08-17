import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent }  from './admin.component';
import { PersonListComponent }  from './person-list/person.list.component';
import { AuthGuardService }  from '../auth-guard.service';

const personRoutes: Routes = [
	{ 
	  path: '',
		component: AdminComponent,
	  children: [ 
	    {
		    path: 'person-list',
				component: PersonListComponent,
				canActivate: [ AuthGuardService ]
		  }
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(personRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }