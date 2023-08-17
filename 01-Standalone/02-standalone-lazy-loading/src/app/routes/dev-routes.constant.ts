import { Route } from "@angular/router";
import { TeamComponent } from "../components/team/team.component";
import { TechComponent } from "../components/tech/tech.component";

export const DEV_ROUTES: Route[] = [
  { path: 'team', component: TeamComponent },
  { path: 'tech', component: TechComponent }
];
