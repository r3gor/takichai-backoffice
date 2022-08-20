import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user = new FormControl('');
  password = new FormControl('');

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.userService.login(this.user.value, this.password.value).subscribe(
      ok => ok && this.router.navigate(['/'])
    )
  }

}
