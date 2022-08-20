// import { Inject, Injectable } from "@angular/core";
// import { map, Observable, of, tap, switchMap } from 'rxjs';
// import { Initializer } from "./abstract-initializer";
// import { SessionService } from '../services/session.service';
// import { LOG } from "../utils/log.utils";
// import { UserService } from '../services/user.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class SessionRecoverInit implements Initializer{


//   constructor(
//     private userService: UserService,
//     private sessionService: SessionService) {}

//   init(): () => Observable<any> {
//     return () => {
//       this.sessionService.getLoginStatus().pipe(
//         tap( isValid => LOG.msg( isValid? "Recovered Session" : "Does Not Exist A Valid Session", "info") ),
//         switchMap( isValid => {
//           if (isValid) return this.userService.fetchUserData();
//           return of(false); 
//         } )
//       ).subscribe();
      
//       return of(true);
//     }
//   }

// }