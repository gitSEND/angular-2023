import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { TeamManagementService } from './team-management.service';

@Component({
  selector: 'app-team',
  templateUrl: './team-management.component.html'
})
export class TeamManagementComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService) {
  }

  ngOnInit() { }

  teamForm = this.formBuilder.group({
    teamName: ['', Validators.required],
    employees: this.formBuilder.array([new FormControl()], [Validators.required, Validators.maxLength(5)])
  });

  get teamName() {
    return this.teamForm.get('teamName') as FormControl;
  }

  get employees() {
    return this.teamForm.get('employees') as FormArray;
  }

  addEmployeeControl() {
    this.employees.push(new FormControl());
  }

  deleteEmployeeControl(index: number) {
    this.employees.removeAt(index);
  }

  insertEmployeeControl() {
    this.employees.insert(1, new FormControl());
  }

  setEmployeeControl() {
    this.employees.setControl(2, new FormControl('Shiv'));
  }

  setEmployeeValue() {
    this.clearEmployeeControls();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.employees.setValue(['Mahesh', 'Vishal', 'Krishn']);
  }

  patchEmployeeValue() {
    this.employees.patchValue(['Mahesh', 'Vishal', 'Krishn']);
  }

  resetEmployees() {
    this.employees.reset();
  }

  clearEmployeeControls() {
    this.employees.clear();
  }

  onFormSubmit() {
    const emp = this.employees.at(0);
    console.log(emp.value);

    const rawVal = this.employees.getRawValue();
    console.log(rawVal);

    this.teamMngService.saveTeam(this.teamForm.value);
    this.teamForm.reset();
  }
}
