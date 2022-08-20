import { Component, OnInit } from '@angular/core';
import { delay, merge } from 'rxjs';
import { HttpStatusService } from '../../services/utils/http-status.service';

@Component({
  selector: 'app-loading-http',
  templateUrl: './loading-http.component.html',
  styles: [`
    :host{
      margin: auto;
      width: 100vw;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      z-index: 999999999999999;
    }

    /* Transparent Overlay */
    mat-progress-bar:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.53);
    }
  `]
})
export class LoadingHttpComponent implements OnInit {

  loading$ = merge(
    this.httpStatusService.loading$,
    this.httpStatusService.acting$
  ).pipe(delay(0));

  constructor(
    private httpStatusService: HttpStatusService
  ) { }

  ngOnInit(): void {
  }

}
