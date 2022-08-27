import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { RepositoryService } from '../../core/services/repository.service';
import { sortBy } from '../../core/utils/sorter.utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user$ = this.userService.user$;
  songs$ = this.repoService.songs$;
  users$ = this.repoService.users$;

  topPosters$ = this.repoService.users$.pipe(
    map(users => users.sort((a, b) =>  b.songs.length - a.songs.length)),
  );

  constructor(
    private repoService: RepositoryService,
    private userService: UserService) {

    
  }

  ngOnInit(): void {
  }

}
