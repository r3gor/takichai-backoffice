declare const DZ: any;

import { Component, HostBinding, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SidenavService } from '../core/services/ui/sidenav.service';
import { ThemeService } from '../core/services/ui/theme.service';
import { UserService } from '../core/services/user.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public themeService: ThemeService,
    public sidenavService: SidenavService,
    public userService: UserService) {
  }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.sidenavService.close();
  }
}
