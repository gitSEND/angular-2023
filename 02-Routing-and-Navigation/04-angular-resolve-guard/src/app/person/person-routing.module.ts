import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent }  from './person.component';
import { PersonListComponent }  from './person-list/person.list.component';
import { PersonDetailComponent }  from './person-list/detail/person.detail.component';
import { PersonDetailResolver } from './person-detail.resolver';

const personRoutes: Routes = [
	{ 
	  path: '',
    component: PersonComponent,
	  children: [ 
	    {
		    path: 'personList',
		    component: PersonListComponent,
		    children: [
		      {
						path: 'detail/:person-id',
						component: PersonDetailComponent,
						resolve: {
							personDetail: PersonDetailResolver
						}
			    }
		    ]			
	  	}
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(personRoutes) ],
	exports: [ RouterModule ],
	providers: [ PersonDetailResolver ]
})
export class PersonRoutingModule { }