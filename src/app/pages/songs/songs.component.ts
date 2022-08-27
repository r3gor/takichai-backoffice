import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { ISong } from 'src/app/core/interfaces/get-songs.interface';
import { RepositoryService } from 'src/app/core/services/repository.service';
import { SnackMsgService } from 'src/app/core/services/ui/snack-msg.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  songs$: Observable<ISong[]> = this.repoService.songs$;
  displayedColumns: string[] = ['name', 'year', 'genre', 'instrumental', 'mood', 'actions'];
  dataSource?: MatTableDataSource<ISong> = undefined;
  selectedItem: any;

  constructor(
    private repoService: RepositoryService,
    private snackService: SnackMsgService,
    private dialog: MatDialog) {

    this.repoService.fetchSongs().subscribe(
      ok => ok?
      this.snackService.msg("Songs loaded", 'success') :
      this.snackService.msg("Load songs failed", 'error')
    );
    
    this.repoService.songs$.subscribe(songs => {
      this.dataSource = new MatTableDataSource<ISong>(songs);
      this.dataSource.paginator = this.paginator;
    })

  }

  delete(songId: string) {
    console.log("delete: ", songId);
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

  ngOnInit(): void {
  }

}
