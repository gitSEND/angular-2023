import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CompanyService {
  saveComp(data: any) {
    const comp = JSON.stringify(data);
    console.log(comp);
  }

  getCompanyByCompName(name: string) {
    if (name === "xyz") {
      return of(["xyz"]);
    } else {
      return of([]);
    }
  }

  getLocationByLocationName(name: string) {
    if (name === "vns") {
      return of(["vns"]);
    } else {
      return of([]);
    }
  }
}
