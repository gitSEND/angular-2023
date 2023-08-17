import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Person } from '../../person';
import { PersonService } from '../../services/person.service';

@Component({
  templateUrl: './person.detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  person = {} as Person | undefined;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personService.getPerson(params['person-id']))
    ).subscribe(person => this.person = person);
  }
}
