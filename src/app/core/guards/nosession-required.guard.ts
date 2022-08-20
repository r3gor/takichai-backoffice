import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { UserService } from '../services/user.service';
import { LOG } from '../utils/log.utils';

@Injectable({
  providedIn: 'root'
})
export class NoSessionRequiredGuard implements CanActivate {

  constructor(
    private userService: UserService, 
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    return this.userService.loggedIn$.pipe(
      map(loggedIn => {
        if (!loggedIn) return true;
        LOG.msg(`Guard[NoSessionRequired] | Block Access To ${route}`, 'info')
        this.router.navigate(['/']);
        return false;
      }),
      catchError((err) => {
        LOG.msg(`Guard[NoSessionRequired] | Block Access To ${route}`, 'info')
        this.router.navigate(['/']);
        return of(false);
      })
    );

  }
  
}