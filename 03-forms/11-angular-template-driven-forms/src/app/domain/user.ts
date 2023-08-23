import { Profile } from './profile';
import { Technology } from './technology';

export class User {
  userName!: string;
  age!: number;
  gender!: string;
  isMarried!: boolean;
  isTCAccepted!: boolean;
  profile!: Profile;
  technologies!: Technology[];
}
