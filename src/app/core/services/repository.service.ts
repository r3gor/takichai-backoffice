import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, of, tap, switchMap, map, forkJoin } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { HttpUsersService } from './http/http-users.service';
import { HttpSongsService } from './http/http-songs.service';

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
    private httpUsers: HttpUsersService,
    private httpSongs: HttpSongsService,) {
  }

  fetchAll() {
    return forkJoin({
      okusers: this.fetchUsers(),
      oksongs: this.fetchSongs(),
    }).pipe(
      map(({okusers, oksongs}) => okusers && oksongs )
    )
  }

  fetchUsers() {
    return this.httpUsers.getItems().pipe(
      tap(data => data && this.users.next(data)),
      map(data => !!data),
    )
  }

  fetchSongs() {
    return this.httpSongs.getItems().pipe(
      tap(data => data && this.songs.next(data)),
      map(data => !!data),
    )
  }

  getUsers() {
    return this.users.getValue();
  }

  getSongs() {
    return this.songs.getValue();
  }

  deleteSong(id: string) {
    return this.httpSongs.deleteItem(id).pipe(
      switchMap(res => res? this.fetchSongs() : of(false)),
    )
  }

  deleteUser(id: string) {
    return this.httpUsers.deleteItem(id).pipe(
      switchMap(res => res? this.fetchUsers() : of(false)),
    )
  }
  
  patchUser(userId: string, payload: any) {
    return this.httpUsers.patchUser(userId, payload).pipe(
      switchMap(res => res? this.fetchUsers() : of(false)),
    )
  }
}