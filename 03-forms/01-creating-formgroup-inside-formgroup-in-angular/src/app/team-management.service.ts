import { Injectable } from '@angular/core';
import { Team } from './team';

@Injectable()
export class TeamManagementService {
  saveTeam(team: Team) {
    console.log('------------TEAM------------');
    console.log('Team Name: ' + team.teamName);
    console.log('Team Size: ' + team.noOfEmp);
    console.log('----- Team Lead -----');
    console.log('Emp Name: ' + team.teamLead.empName);
    console.log('Emp Age: ' + team.teamLead.age);
    console.log('Emp City: ' + team.teamLead.city);
    console.log('----------department---------');
    console.log('Department Head: ' + team.department.deptHead);
    console.log('Department Name: ' + team.department.deptName);
  }
}
