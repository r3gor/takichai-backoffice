declare const DZ: any;

import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../core/services/ui/sidenav.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public sidenavService: SidenavService,
    public userService: UserService) {
  }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.sidenavService.close();
  }
}
