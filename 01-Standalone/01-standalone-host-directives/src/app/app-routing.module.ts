import { Routes } from '@angular/router';
import { MessageComponent } from './components/message/message.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/message'
  },
  {
    path: 'message',
    component: MessageComponent
  },
];

