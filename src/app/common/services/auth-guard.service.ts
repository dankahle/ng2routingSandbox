import {Injectable}       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras,
  Route,
  CanActivateChild,
  CanLoad
}                           from '@angular/router';
@Injectable()
export class AuthGuardService {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log(route, state);
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
    // return this.canActivate(route, state);
  }

}
