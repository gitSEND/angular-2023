import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class CustomPreloadingWithDelayStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preload Path: ' + route.path + ', delay:' + route.data['delay']);
      if (route.data['delay']) {
        return timer(5000).pipe(mergeMap(() => load()));
      }
      return load();
    } else {
      return of(null);
    }
  }
}
