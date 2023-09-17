import { Profile } from './profile';
import { Technology } from './technology';

export interface User {
  userName: string;
  profile: Profile | null;
  technologies: Technology[];
}
