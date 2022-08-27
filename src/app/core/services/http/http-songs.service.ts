import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { IGetSongs } from "../../interfaces/get-songs.interface";
import { LOG } from "../../utils/log.utils";

@Injectable({
  providedIn: 'root',
})
export class HttpSongsService {

  API = `${environment.API.BE}`

  constructor(private http: HttpClient) {
    
  }

  getItems() {
    // ?name=Obs&userId=62b759afe380456878c575fe
    const URL = `${this.API}/songs`;

    return this.http.get<IGetSongs>(URL).pipe(
      tap(res => this.msg("Songs loaded", res.ok? 'success':'error')),
      map(res => res.songs),
      catchError(this.handleError('Get Songs', [])),
    )
  }

  deleteItem(id: string) {
    const URL = `${this.API}/songs/${id}`;

    return this.http.delete<any>(URL).pipe(
      tap(res => this.msg("Song deleted", res.ok? 'success':'error')),
      map(res => !!res.ok),
      catchError(this.handleError('Get Songs', false)),
    )
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