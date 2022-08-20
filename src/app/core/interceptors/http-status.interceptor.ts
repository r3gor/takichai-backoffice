import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NEVER, Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { HttpStatusService } from '../services/utils/http-status.service';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusInterceptor implements HttpInterceptor {
private loadingCalls = 0; 
private actingCalls = 0; 

constructor(
  private httpStatusService: HttpStatusService
) {}

private changeStatus(v: boolean, method: string): void {
  if (['POST', 'PUT', 'DELETE', 'PATCH']
    .indexOf(method) > -1) {
    v ? this.actingCalls++ : this.actingCalls--;
    this.httpStatusService.acting = this.actingCalls > 0;
  } else if (method === 'GET') {
    v ? this.loadingCalls++ : this.loadingCalls--;
    this.httpStatusService.loading = this.loadingCalls > 0;
  }
}

intercept(
  req: HttpRequest<any>,
  next: HttpHandler
): Observable<HttpEvent<any>> {
  
  this.changeStatus(true, req.method); // loading true

  return next.handle(req.clone()).pipe(

    finalize(() => {
      this.changeStatus(false, req.method); // loading false
    })
  
    );
}
}