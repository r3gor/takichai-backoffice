import { Component, OnInit } from '@angular/core';
import { HttpUsersService } from 'src/app/core/services/http/http-users.service';
import { RepositoryService } from '../../core/services/repository.service';
import { Observable } from 'rxjs';
import { IUser } from '../../core/interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditPanelComponent } from 'src/app/core/components/edit-panel/edit-panel.component';
import { editFields } from './edit.fields';

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
    private dialog: MatDialog) {
    this.repoService.fetchUsers().subscribe();
  }

  showEdit() {
    const editDialog = this.dialog.open(EditPanelComponent, { data: {
      item: this.selectedItem, fields: editFields
    } });

    editDialog.afterClosed().subscribe(formValue => {
      console.log("value:", formValue);
    });
  }

  ngOnInit(): void {
  }

}
