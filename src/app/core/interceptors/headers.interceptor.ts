import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LS } from '../utils/local-storage.utils';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeadersInterceptor implements HttpInterceptor {


  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = "Bearer " + LS.getItem('token');

    return next.handle( req.clone({ headers: req.headers
      .set('Authorization', token || '' )
    }) );
  
  }

}
