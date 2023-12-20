import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-person',
  template: `
    <select [formControl]="selectedProfile" (change)="onProfileChange()" class="select-profile">
       <option *ngFor="let prf of profiles" [ngValue]="prf">
          {{ prf.name }}
       </option>
    </select>
    <p>{{selectedProfile.value!.name}}</p>

    <select [formControl]="selectedCity" (change)="onCityChange()" class="select-city">
       <option *ngFor="let ct of cities" [ngValue]="ct">
          {{ ct.name }}
       </option>
    </select>
    <div>{{selectedCity.value!.name}}</div>
  `
})
export class PersonComponent {
  profiles = [
    { id: 'dev', name: 'Developer' },
    { id: 'man', name: 'Manager' },
    { id: 'dir', name: 'Director' }
  ];
  cities = [
    { id: 'kcp', name: 'Kanchipuram' },
    { id: 'prg', name: 'Prayagraj' },
    { id: 'twg', name: 'Tawang' }
  ];
  selectedProfile = new FormControl(this.profiles[0]);
  selectedCity = new FormControl(this.cities[0]);
  onProfileChange() {
    console.log(this.selectedProfile!.value!.id);
  }
  onCityChange() {
    console.log(this.selectedCity!.value!.id);
  }
}
