import { Profile } from './profile';

export class User {
  userName?: string;
  gender?: string;
  profile: Profile | null = null;
  isTCAccepted?: boolean;
  constructor() { }
}
