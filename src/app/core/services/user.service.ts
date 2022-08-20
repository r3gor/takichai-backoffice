import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, of, tap } from 'rxjs';
import { LS } from '../utils/local-storage.utils';
import { HttpUsersService } from './http/http-users.service';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private user   = new BehaviorSubject<IUser | undefined>(undefined);

  loggedIn$ = this.loggedIn.asObservable();
  user$ = this.user.asObservable().pipe(
    filter((s): s is IUser => s !== undefined)
  );

  constructor(
    private httpUserService: HttpUsersService,
    private router: Router) {
  }

  login(user: string, password: string) {
    return this.httpUserService.postLogin({email: user, password}).pipe(
      tap(res => {
        
        if (!res.ok) {
          this.loggedIn.next(false);
          return of(false);
        }

        LS.setItem('token', res.token)
        this.user.next(res.user)
        this.loggedIn.next(true);
        return of(true);
      })
    )
  }

  logout() {
    LS.remove('token');
    this.loggedIn.next(false);
    // TODO: Caducar el token en el backend
    // TODO: Eliminar cache del player (behavior subject de player.service)
    this.router.navigate(['/', 'auth'])
    return of(true);
  }

  fetchUser() {
    return this.httpUserService.getLoggedUser().pipe(
      tap(res => !!res.user && this.user.next(res.user))
    );
  }

  onRecoverSession(): void {
    this.loggedIn.next(true);
  }
  
  isLogged(): boolean{
    return this.loggedIn.getValue();
  }
  
  /**
   * @returns User en cache
  */
  getUser(): IUser | undefined {
    return this.user.getValue();
  }

}