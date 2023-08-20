import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { TeamManagementService } from './team-management.service';
import { Team } from './team';
import { ControlsOf, FormUtilsService } from './form-utils.service';

@Component({
  selector: 'app-team',
  templateUrl: './team-management.component.html'
})
export class TeamManagementComponent implements OnInit {

  // teamForm: FormGroup<ControlsOf<Team>>;


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private teamMngService: TeamManagementService,
    private formUtilsService: FormUtilsService
  ) {
    // this.teamForm = this.formBuilder.group({
    //   teamName: this.formUtilsService.makeNonNullableFormControl('', [Validators.required]),
    //   noOfEmp: this.formUtilsService.makeNonNullableFormControl(0, [Validators.required]),
    //   teamLead: this.formBuilder.group({
    //     empName: this.formUtilsService.makeNonNullableFormControl('', [Validators.required]),
    //     age: this.formUtilsService.makeNonNullableFormControl(0, [Validators.required, Validators.min(18)]),
    //     city: this.formUtilsService.makeNonNullableFormControl('', [Validators.required])
    //   }),
    //   department: this.formBuilder.group({
    //     deptHead: this.formUtilsService.makeNonNullableFormControl('', [Validators.required]),
    //     deptName: this.formUtilsService.makeNonNullableFormControl('', [Validators.required])
    //   })
    // })
  }

  ngOnInit() { }

  teamForm = this.formBuilder.group({
    teamName: this.formUtilsService.makeNonNullableFormControl('', [Validators.required]),
    noOfEmp: this.formUtilsService.makeNonNullableFormControl(+'', [Validators.required]),
    teamLead: this.formBuilder.group({
      empName: this.formUtilsService.makeNonNullableFormControl('', [Validators.required]),
      age: this.formUtilsService.makeNonNullableFormControl(+'', [Validators.required, Validators.min(18)]),
      city: this.formUtilsService.makeNonNullableFormControl('', [Validators.required])
    }),
    department: this.formBuilder.group({
      deptHead: this.formUtilsService.makeNonNullableFormControl('', [Validators.required]),
      deptName: this.formUtilsService.makeNonNullableFormControl('', [Validators.required])
    })
  })

  get teamName() {
    return this.teamForm.get('teamName') as FormControl;
  }

  get noOfEmp() {
    return this.teamForm.get('noOfEmp') as FormControl;
  }

  get teamLead() {
    return this.teamForm.get('teamLead') as FormGroup;
  }

  get department() {
    return this.teamForm.get('department') as FormGroup;
  }

  onFormSubmit() {
    if (this.teamForm.valid) {
      this.teamMngService.saveTeam(this.teamForm.getRawValue());
      this.teamForm.reset();
    }
  }
}
