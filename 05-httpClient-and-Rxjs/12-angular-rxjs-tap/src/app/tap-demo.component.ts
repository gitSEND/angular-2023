import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, filter, retry, catchError } from 'rxjs/operators';
import { TapDemoService } from './tap-demo.service';

@Component({
  selector: 'app-tap-demo',
  templateUrl: './tap-demo.component.html'
})
export class TapDemoComponent implements OnInit {
  stdNames$!: Observable<string[]>;
  countryName$!: Observable<string>;
  countryStates!: string[];

  constructor(private mapDemoService: TapDemoService) { }

  ngOnInit() {
    this.getStdNames();
    this.getCountryName();
    this.getCountryStates();

    of(1, 2, 3, 4).pipe(
      tap({
        next: el => console.log("Process " + el),
        error: err => console.error(err),
        complete: () => console.log("Complete")
      }),
      filter(n => n % 2 === 0)
    ).subscribe(el => console.log("Even number: " + el));

    let cities = ["Varanasi", "Mathura", "Ayodhya"];
    of(cities).pipe(
      tap(c => console.log(c.length)),
      map(dataArray => dataArray.join(", "))
    ).subscribe(res => console.log(res));

  }

  getStdNames() {
    this.stdNames$ = this.mapDemoService.getStdNames().pipe(
      tap(std => console.log(std)),
      map(res => res.split(","))
    );
  }

  getCountryName() {
    this.countryName$ = this.mapDemoService.getCountry().pipe(
      tap(cname => console.log("Accessing country name...", cname)),
      map(country => country.getCountryName()),
      tap(cname => console.log(cname)),
      catchError(err => {
        console.error(err);
        return of("");
      })
    );
  }

  getCountryStates() {
    this.mapDemoService.getCountry().pipe(
      retry(2),
      tap(cname => console.log("Accessing country states...", cname)),
      map(country => country.getCountryStates()),
      tap(states => console.log(states)),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    )
      .subscribe(res => this.countryStates = res);
  }
}
