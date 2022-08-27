import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Takichai Backoffice';

  // @HostBinding('class') className = 'light-theme';

  constructor() {
  }
}
