import {Route} from "@angular/router";
import {PersonDetailComponent} from "../components/person-detail/person-detail.component";

export const ROUTES: Route[] = [
  {path: 'person-detail/:id', component: PersonDetailComponent},
];
