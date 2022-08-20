// http-status.service.ts
import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

interface ValidationError {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {
  private validationErrorsSub$
    = new Subject<ValidationError[]>();

  private loadingSub$ = new ReplaySubject<boolean>(1);
  private actingSub$ = new ReplaySubject<boolean>(1);

  getvalidationErrors$ =
    this.validationErrorsSub$.asObservable();
  loading$ =
    this.loadingSub$.pipe(distinctUntilChanged());
  acting$ =
    this.actingSub$.pipe(distinctUntilChanged());

  set validationErrors(errors: ValidationError[]) {
    this.validationErrorsSub$.next(errors);
  }

  set loading(val: boolean) {
    this.loadingSub$.next(val);
  }

  set acting(val: boolean) {
    this.actingSub$.next(val);
  }
}
