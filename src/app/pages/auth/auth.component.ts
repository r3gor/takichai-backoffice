import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { SnackMsgService } from 'src/app/core/services/ui/snack-msg.service';

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
    private snackService: SnackMsgService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.userService.login(this.user.value, this.password.value).subscribe(
      ok => {
        if(ok) {
          this.snackService.msg("Login successfull", "success"); 
          this.router.navigate(['/']);
        } else {
          this.snackService.msg("Login successfull", "success"); 
        }
      }
    )
  }

}
