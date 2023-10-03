import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MyCountry } from './my-country';

@Injectable({
  providedIn: 'root'
})
export class FilterDemoService {
  getNumbers(): Observable<number> {
    return of(1, 2, 3, 4); //Synchronously emits 1, 2, 3, 4 and then completes
  }

  getStdNames(): Observable<string> {
    return of("Mahesh, Krishna, Ram");
  }

  getCountry(): Observable<MyCountry> {
    return of(new MyCountry());
  }
}
