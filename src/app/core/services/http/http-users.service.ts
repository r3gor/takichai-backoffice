import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, tap } from 'rxjs';
import { IGeneralRes } from "../../interfaces/general.interface";
import { ILoginRes } from "../../interfaces/login-response.interface";
import { IGetUsers } from "../../interfaces/get-users.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  API = `${environment.API.BE}`

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) {
  }

  postLogin(payload: {email: string, password: string}) {
    const URL = `${this.API}/users/login`;

    return this.http.post<ILoginRes>(URL, payload).pipe(
      tap(res => this.msg(res.msg, res.ok? 'success':'error'))
    )
  }

  getItems() {
    const URL = `${this.API}/users`;
    
    return this.http.get<IGetUsers>(URL).pipe(
      tap(res => this.msg("Users loaded", res.ok? 'success':'error')),
      map(res => res.users)
    )
  }

  patchUser(userId: string, payload: any) {
    const URL = `${this.API}/users/${userId}`;

    // data = new FormData()

    // return this.http.put(URL, )

  }

  getLoggedUser() {
    const URL = `${this.API}/user`;

    return this.http.get<any>(URL);
  }

  msg(msg: string, type: 'success' | 'info' | 'error') {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: "center",
      verticalPosition: 'top',
      duration: 3000,
    });
  }

}