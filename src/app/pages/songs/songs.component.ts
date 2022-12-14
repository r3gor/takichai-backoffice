import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { DetailsDialogComponent } from 'src/app/core/components/details-dialog/details-dialog.component';
import { ISong } from 'src/app/core/interfaces/get-songs.interface';
import { RepositoryService } from 'src/app/core/services/repository.service';
import { SnackMsgService } from 'src/app/core/services/ui/snack-msg.service';
import { detailsFields } from './details.fields';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'reproductions', 'fullReproductions', 'likes', 'year', 'genre', 'instrumental', 'mood', 'actions'];
  dataSource = new MatTableDataSource<ISong>();
  selectedItem: any;

  constructor(
    private repoService: RepositoryService,
    private snackService: SnackMsgService,
    private dialog: MatDialog) {

    this.repoService.songs$.subscribe(songs => {
      this.dataSource.data = songs;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  refresh() {
    this.repoService.fetchSongs().subscribe(
      ok => ok?
      this.snackService.msg("Songs loaded", 'success') :
      this.snackService.msg("Load songs failed", 'error')
    );
  }

  details() {
    this.dialog.open(DetailsDialogComponent, { data: {
      item: this.selectedItem, fields: detailsFields
    } });
  }

  delete(songId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(data => {
      if(data.action === "CANCEL") return;

      this.repoService.deleteSong(songId).subscribe(
        ok => ok?
        this.snackService.msg("Songs deleted", 'success') :
        this.snackService.msg("Fail delete song", 'error')
      );
    });
  }
}
