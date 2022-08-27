import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, of, tap, switchMap } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { HttpUsersService } from './http/http-users.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private users = new BehaviorSubject<IUser[] | undefined>(undefined);
  private songs = new BehaviorSubject<any[] | undefined>(undefined);

  users$ = this.users.asObservable().pipe(
    filter((s): s is IUser[] => s !== undefined)
  );

  songs$ = this.songs.asObservable().pipe(
    filter((s): s is any => s !== undefined)
  );

  constructor(
    private httpUsers: HttpUsersService) {
  }

  fetchUsers() {
    return this.httpUsers.getItems().pipe(
      tap(data => data && this.users.next(data)),
    )
  }

  patchUser(userId: string, payload: any) {
    return this.httpUsers.patchUser(userId, payload).pipe(
      switchMap(res => res? this.fetchUsers() : of(false)),
    )
  }

  getUsers() {
    return this.users.getValue();
  }
}