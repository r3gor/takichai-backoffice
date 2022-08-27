import { Inject, Injectable } from "@angular/core";
import { map, Observable, of, tap, switchMap, catchError } from 'rxjs';
import { LS } from "../utils/local-storage.utils";
import { LOG } from "../utils/log.utils";
import { Initializer } from "./abstract-initializer";
import { UserService } from "../services/user.service";
import { HttpUsersService } from '../services/http/http-users.service';
import { HttpErrorResponse } from "@angular/common/http";
import { SnackMsgService } from '../services/ui/snack-msg.service';


@Injectable({
  providedIn: 'root'
})
export class SessionRecoverInitializer implements Initializer{

  constructor(
    private userService: UserService,
    private snackMsgService: SnackMsgService,
    private httpUsersService: HttpUsersService) {
  }

  init(): () => Observable<any> {
    return () => {
      return this.existValidSession().pipe(
        tap( isValid => LOG.msg( isValid? "Recovered Session" : "Does Not Exist A Valid Session", "info") ),
        tap( isValid => isValid && this.userService.onRecoverSession() ),
        tap( isValid => isValid && this.snackMsgService.msg("Welcome back", "success") ),
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
      map( res => !!res.user ),
    );
  }
}