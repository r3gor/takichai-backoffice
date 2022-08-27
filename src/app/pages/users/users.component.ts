import { Component, OnInit } from '@angular/core';
import { HttpUsersService } from 'src/app/core/services/http/http-users.service';
import { RepositoryService } from '../../core/services/repository.service';
import { Observable } from 'rxjs';
import { IUser } from '../../core/interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditPanelComponent } from 'src/app/core/components/edit-panel/edit-panel.component';
import { editFields } from './edit.fields';
import { SnackMsgService } from 'src/app/core/services/ui/snack-msg.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]> = this.repoService.users$;
  displayedColumns: string[] = ['publicProfile', 'name', 'email', 'createdAt', 'updatedAt', 'actions'];

  selectedItem: any;

  constructor(
    private repoService: RepositoryService,
    private snackService: SnackMsgService,
    private dialog: MatDialog) {
    this.repoService.fetchUsers().subscribe();
  }

  showEdit() {
    const editDialog = this.dialog.open(EditPanelComponent, { data: {
      item: this.selectedItem, fields: editFields
    } });

    editDialog.afterClosed().subscribe(data => {
      if (data.action === "CANCEL") return;
      const formValue = data.value;
      this.repoService.patchUser(this.selectedItem.userId, formValue).subscribe(
        res => res? 
        this.snackService.msg("User updated", 'success') : 
        this.snackService.msg("User update failed", 'error'))
    });
  }

  ngOnInit(): void {
  }

}
