import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpUsersService } from 'src/app/core/services/http/http-users.service';
import { RepositoryService } from '../../core/services/repository.service';
import { Observable } from 'rxjs';
import { IUser } from '../../core/interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditPanelComponent } from 'src/app/core/components/edit-panel/edit-panel.component';
import { editFields } from './edit.fields';
import { SnackMsgService } from 'src/app/core/services/ui/snack-msg.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { DetailsDialogComponent } from 'src/app/core/components/details-dialog/details-dialog.component';
import { detailsFields } from './details.fields';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['publicProfile', 'name', 'email', 'songs', 'suscribers', 'suscriptions', 'createdAt', 'updatedAt', 'actions'];
  dataSource = new MatTableDataSource<IUser>();

  selectedItem: any;

  constructor(
    private repoService: RepositoryService,
    private snackService: SnackMsgService,
    private dialog: MatDialog) {

    this.repoService.users$.subscribe(users => {
      this.dataSource.data = users;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  refresh() {
    this.repoService.fetchUsers().subscribe(
      ok => ok?
        this.snackService.msg("Users loaded", 'success') :
        this.snackService.msg("Load users failed", 'error')
    )
  }

  edit() {
    const dialog = this.dialog.open(EditPanelComponent, { data: {
      item: this.selectedItem, fields: editFields
    } });

    dialog.afterClosed().subscribe(data => {
      if (data.action === "CANCEL") return;

      this.repoService.patchUser(this.selectedItem.userId, data.value).subscribe(
        ok => ok? 
        this.snackService.msg("User updated", 'success') : 
        this.snackService.msg("User update failed", 'error'))
    });
  }

  details() {
    this.dialog.open(DetailsDialogComponent, { data: {
      item: this.selectedItem, fields: detailsFields
    } });
  }

  delete(userId: string) {
    const dialog = this.dialog.open(ConfirmDialogComponent);

    dialog.afterClosed().subscribe(data => {
      if(data.action === "CANCEL") return;

      this.repoService.deleteUser(userId).subscribe(
        ok => ok?
        this.snackService.msg("User deleted", 'success') :
        this.snackService.msg("Fail delete user", 'error')
      );
    });
  }

}
