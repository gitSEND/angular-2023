import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { TeamManagementService } from './team-management.service';

@Component({
  selector: 'app-team',
  templateUrl: './team-management.component.html'
})
export class TeamManagementComponent {
  constructor(
    private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService) {
  }

  teamForm = this.formBuilder.group({
    teamName: ['', Validators.required],
    employees: this.formBuilder.array([])
  });

  get teamName() {
    return this.teamForm.get('teamName') as FormControl;
  }

  get employees() {
    return this.teamForm.get('employees') as FormArray;
  }

  addEmployeeControl() {
    const empGroup = this.formBuilder.group({
      empName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      city: ['', Validators.required]
    });

    this.employees.push(empGroup);
  }

  deleteEmployeeControl(index: number) {
    this.employees.removeAt(index);
  }

  resetEmployees() {
    this.employees.reset();
  }

  clearEmployeeControls() {
    this.employees.clear();
  }

  onFormSubmit() {
    if (this.teamForm.valid) {
      this.teamMngService.saveTeam(this.teamForm.value);
      this.teamForm.reset();
    }
  }
}
