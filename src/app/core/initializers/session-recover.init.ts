import { Inject, Injectable } from "@angular/core";
import { map, Observable, of, tap, switchMap } from 'rxjs';
import { LS } from "../utils/local-storage.utils";
import { LOG } from "../utils/log.utils";
import { Initializer } from "./abstract-initializer";
import { UserService } from "../services/user.service";
import { HttpUsersService } from '../services/http/http-users.service';


@Injectable({
  providedIn: 'root'
})
export class SessionRecoverInitializer implements Initializer{

  constructor(
    private userService: UserService,
    private httpUsersService: HttpUsersService) {
  }

  init(): () => Observable<any> {
    return () => {
      return this.existValidSession().pipe(
        tap( isValid => LOG.msg( isValid? "Recovered Session" : "Does Not Exist A Valid Session", "info") ),
        tap( isValid => isValid && this.userService.onRecoverSession() ),
      );
    }
  }

  /**
   * @returns Resuelve true solo si existe una session valida almacenada en el LS
   */
  existValidSession(): Observable<boolean> {
    const token = LS.getItem('token');
    
    // Check: Existen las variables en el LS
    if (!token) return of(false);
    
    // Check: Se validan las variables haciendo una consulta de prueba
    return this.userService.fetchUser().pipe(
      map( res => !!res.user )
    );
  }
}