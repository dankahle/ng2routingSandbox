import {Injectable} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class InitService implements CanActivate {
  initialized = false;


  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.initialized) {
      return this.initialize()
    }
    else {
      return Promise.resolve(true);
    }
  }

/*
  initialize(): Observable<boolean> {
    return Observable.of(true).delay(0).do(val => {
      console.log('initialized');
      this.initialized = true
    });
  }
*/

  initialize(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('initialized');
        this.initialized = true;
        resolve(true);
      }, 0)

    })
  }

}
