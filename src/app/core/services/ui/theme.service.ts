import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDark = new BehaviorSubject(true);
  isDark$ = this.isDark.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  enableDark() {
    this.document.body.classList.remove('light-theme');
    this.isDark.next(true);
  }
  
  enableLight() {
    this.document.body.classList.add('light-theme');
    this.isDark.next(false);
  }

  toggle() {
    if(this.isDark.value) {
      this.enableLight();
    } else {
      this.enableDark();
    }
  }
}