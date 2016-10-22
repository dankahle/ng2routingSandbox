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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.initialized) {
      this.initialize()
        .then(() => {
          let url = state.url.replace(/\//g, '');
          console.log('redirecting to: ', url);
          this.router.navigate([url]);

        })
      return false;
    }
    else {
      return true;
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

  initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('initialized');
        this.initialized = true;
        resolve();
      }, 0)

    })
  }

}
