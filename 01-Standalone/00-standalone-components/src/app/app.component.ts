import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {PersonComponent} from "./components/person/person.component";
import {MsgDirective} from "./directives/msg.directive";
import {PersonService} from "./service/person.service";
import {Person} from "./service/person.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PersonComponent, MsgDirective],
  styleUrls: ['./app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = "Person List";
  persons?: Person[];

  constructor(private service: PersonService) {
  }

  ngOnInit() {
    this.service.getAllPersons().subscribe(data => {
      this.persons = data;
    });
  }
}
