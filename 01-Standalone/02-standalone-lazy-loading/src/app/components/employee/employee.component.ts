import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Person } from 'src/app/services/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  heading = "Employee List";
  persons?: Person[];

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.service.getAllPersons().subscribe(data => {
      this.persons = data;
    });
  }
}
