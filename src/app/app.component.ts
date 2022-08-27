import { Component } from '@angular/core';
import { RepositoryService } from './core/services/repository.service';
import { SnackMsgService } from './core/services/ui/snack-msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Takichai Backoffice';

  constructor(
    private snackMsgService: SnackMsgService,
    private repoService: RepositoryService) {

    this.repoService.fetchAll().subscribe(
      ok => ok?
      this.snackMsgService.msg("Welcome! - Data loaded successfully", "success") :
      this.snackMsgService.msg("Welcome! - Error loading data", "error")
    )
  }
}
