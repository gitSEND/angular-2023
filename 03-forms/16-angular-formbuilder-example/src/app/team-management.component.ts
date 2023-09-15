import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { TeamManagementService } from './team-management.service';
import { Team } from './team';
import { Employee } from './employee';
import { Department } from './department';

@Component({
  selector: 'app-team',
  templateUrl: './team-management.component.html'
})
export class TeamManagementComponent implements OnInit {
  teamForm = {} as FormGroup;
  formSubmitted = false;
  allSkills = of([] as any);

  constructor(
    private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService) {
  }

  ngOnInit() {
    this.allSkills = this.teamMngService.getSkills();
    this.createTeamForm();
    this.addEmployee();
  }

  createTeamForm() {
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      teamManager: '',
      teamDept: this.formBuilder.group(new Department()),
      employees: this.formBuilder.array([])
    });
  }

  get empFormArray(): FormArray {
    return this.teamForm.get('employees') as FormArray;
  }

  addEmployee() {
    const fg = this.formBuilder.group(new Employee());
    this.empFormArray.push(fg);
  }

  deleteEmployee(idx: number) {
    this.empFormArray.removeAt(idx);
  }

  loadTeam(name: string) {
    this.teamMngService.getTeamByName(name).subscribe(team => {
      this.createFormWithDefaultData(team);
    });
  }

  createFormWithDefaultData(team: Team) {
    //this.teamForm.patchValue(team);
    this.teamForm.patchValue({
      teamName: team.teamName,
      teamManager: team.teamManager,
      teamDept: team.teamDept
    });

    const employeeFormGroups = team.employees.map(employee => this.formBuilder.group(employee));
    const employeeFormArray = this.formBuilder.array(employeeFormGroups);
    console.log({ employeeFormArray });

    this.teamForm.setControl('employees', employeeFormArray);
  }

  onFormSubmit() {
    const data = JSON.stringify(this.teamForm.value);
    console.log('-----Team in JSON Format-----');
    console.log(data);

    const team: Team = this.teamForm.value;
    this.teamMngService.saveTeam(team);
    this.formSubmitted = true;
    this.teamForm.reset();
  }

  resetTeamForm() {
    this.teamForm.reset({
      teamName: 'Java Team',
      teamManager: 'Yogi'
    });
  }
}
