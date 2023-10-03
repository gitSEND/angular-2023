import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter, scan, retry, catchError } from 'rxjs/operators';
import { FilterDemoService } from './filter-demo.service';

@Component({
  selector: 'app-filter-demo',
  templateUrl: './filter-demo.component.html'
})
export class FilterDemoComponent implements OnInit {
  stdNames$!: Observable<string[]>;
  countryName$!: Observable<string>;
  countryStates!: string[];

  constructor(private filterDemoService: FilterDemoService) { }

  ngOnInit() {
    this.getStdNames();
    this.calcData();
    this.getCountryName();
    this.getCountryStates();

    let numArray = [1, 2, 3, 4];

    //Using JavaScript Array filter
    numArray.filter(n => {
      console.log(n);
      return n % 2 === 0;
    })
      .forEach(el => console.log("Even Number: " + el));

    //Using RxJS filter
    of(numArray).pipe(
      filter(dataArray => {
        console.log(dataArray);
        return dataArray.length > 0;
      })
    ).subscribe(resArray => console.log(resArray.join(" | ")));


  }

  //Using filter and map
  getStdNames() {
    this.stdNames$ = this.filterDemoService.getStdNames().pipe(
      filter(data => data.indexOf(",") > 0),
      map(res => res.split(","))
    );
  }

  //Using tap, filter, map and scan
  calcData() {
    this.filterDemoService.getNumbers().pipe(
      tap(n => console.log(n)),
      filter(n => n % 2 === 0),
      map(n => n + 10),
      scan((sum, n) => sum + n)
    ).subscribe(result => console.log(result));
  }

  //Using filter, map and catchError
  getCountryName() {
    this.countryName$ = this.filterDemoService.getCountry().pipe(
      filter(country => country.getCountryName() !== null),
      map(country => country.getCountryName()),
      catchError(err => {
        console.error(err);
        return of("");
      })
    );
  }

  //Using retry, map and catchError
  getCountryStates() {
    this.filterDemoService.getCountry().pipe(
      retry(2),
      filter(country => country.getCountryStates().length > 0),
      map(country => country.getCountryStates()),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    ).subscribe(res => this.countryStates = res);
  }
}
