declare const DZ: any;

import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../core/services/ui/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public sidenavService: SidenavService) {
  }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.sidenavService.close();
  }
}
