import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/services/person';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  person?: Person;

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit() {
    this.route.params
    .pipe(switchMap((params: Params) => this.personService.getPersonById(+params['id'])))
    .subscribe(person => this.person = person);
  }
}
