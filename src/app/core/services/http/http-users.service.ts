import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap } from 'rxjs';
import { IGeneralRes } from "../../interfaces/general.interface";
import { ILoginRes } from "../../interfaces/login-response.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  API = `${environment.API.BE}/users`

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) {
  }

  postLogin(payload: {email: string, password: string}) {
    const URL = `${this.API}/login`;

    return this.http.post<ILoginRes>(URL, payload).pipe(
      tap(res => this.msg(res.msg, res.ok? 'success':'error'))
    )
  }

  getUsers() {

  }

  msg(msg: string, type: 'success' | 'info' | 'error') {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: "center",
      verticalPosition: 'top',
      duration: 3000,
    });
  }

}