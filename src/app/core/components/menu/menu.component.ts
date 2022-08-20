import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { SidenavService } from '../../services/ui/sidenav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selected$ = this.route.queryParams.pipe(
  );

  items = [
    { key: 'dash', routerLink: ['/'], label: 'Dashboard', icon: 'home'},
    { key: 'users', routerLink: ['/', 'users'], label: 'Users', icon: 'home' },
    { key: 'songs', routerLink: ['/', 'songs'], label: 'Songs', icon: 'home'},
  ]

  constructor(
    public sidenavService: SidenavService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
