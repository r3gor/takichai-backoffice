import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { map, Observable, of, tap, catchError } from 'rxjs';
import { ILoginRes } from "../../interfaces/login-response.interface";
import { IGetUsers } from "../../interfaces/get-users.interface";
import { LOG } from '../../utils/log.utils';
import { JSON2Formdata } from "../../utils/json-to-formdata.utils";

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  API = `${environment.API.BE}`

  constructor(
    private http: HttpClient) {
  }

  postLogin(payload: {email: string, password: string}) {
    const URL = `${this.API}/users/login`;

    return this.http.post<ILoginRes>(URL, payload).pipe(
      tap(res => this.msg(res.msg, res.ok? 'success':'error'))
    )
  }

  getItems() {
    const URL = `${this.API}/users?limit=0&from=0`;
    
    return this.http.get<IGetUsers>(URL).pipe(
      tap(res => this.msg("Users loaded", res.ok? 'success':'error')),
      map(res => res.users),
      catchError(this.handleError('Get Users', [])),
    )
  }

  patchUser(userId: string, payload: any) {
    const URL = `${this.API}/users/${userId}`;

    const data = JSON2Formdata(payload); 
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.put<any>(URL, data, { headers }).pipe(
      tap(res => this.msg("Users loaded", res.ok? 'success':'error')),
      catchError(this.handleError('Patch User', false)),
    );
  }

  getLoggedUser() {
    const URL = `${this.API}/user`;

    return this.http.get<any>(URL).pipe(
      catchError(this.handleError('Get Logged User', false)),
    );
  }

  msg(msg: string, type: 'success' | 'info' | 'error') {
    LOG.msg(msg, type);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      LOG.msg(`${operation} failed: ${error.error.msg}`, 'error');
      return of(result as T);
    };
  }
}