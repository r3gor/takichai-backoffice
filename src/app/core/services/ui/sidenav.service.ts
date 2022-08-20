import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointService } from './breakpoint.service';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private opened = new BehaviorSubject(true);
  opened$ = this.opened.asObservable();

  open() {
    this.opened.next(true);
  }

  close() {
    this.opened.next(false);
  }

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.$size.subscribe( b => b=='xs'? this.close() : this.open()  )
  }
}
