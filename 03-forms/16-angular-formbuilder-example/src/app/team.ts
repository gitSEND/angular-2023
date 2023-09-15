import { Employee } from './employee';
import { Department } from './department';

export class Team {
  teamName = '';
  teamManager = '';
  teamDept = {} as Department;
  employees = [] as Employee[];
}
