import { Profile } from './profile';
import { Technology } from './technology';

export class User {
  userName!: string;
  profile: Profile | null = null;
  technologies!: Technology[];
}
