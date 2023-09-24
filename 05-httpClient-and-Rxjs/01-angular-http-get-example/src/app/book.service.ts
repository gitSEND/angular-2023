import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, lastValueFrom } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "http://localhost:4200/assets/data/books.json";
  constructor(private http: HttpClient) { }

  getBooksWithObservable(): Observable<Book[]> {
    return this.http.get(this.url).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
    )
  }

  // https://rxjs.dev/deprecations/to-promise

  // async getBooksWithPromise(): Promise<Book[]> {
  // return this.http.get(this.url).toPromise()
  //   try {
  //     const res = await lastValueFrom(this.http.get(this.url));
  //     return this.extractData(res);
  //   } catch (error) {
  //     return this.handleErrorPromise(error);
  //   }
  // }

  getBooksWithPromise(): Promise<Book[]> {
    // return this.http.get(this.url).toPromise()
    return lastValueFrom(this.http.get(this.url))
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: any) {
    let body = res;
    return body;
  }

  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(() => error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
