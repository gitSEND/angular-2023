import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Person} from "../../service/person.interface";
import {ActivatedRoute, Params} from "@angular/router";
import {PersonService} from "../../service/person.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person?: Person;

  constructor(private route: ActivatedRoute, private personService: PersonService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.personService.getPersonById(+params['id'])))
      .subscribe(person => this.person = person);

  }


}
