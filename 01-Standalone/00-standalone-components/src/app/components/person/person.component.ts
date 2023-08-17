import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Person} from "../../service/person.interface";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input('allPersons') persons?: Person[];
}
