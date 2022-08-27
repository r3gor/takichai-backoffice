import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class SnackMsgService {

  constructor(private snackBar: MatSnackBar) {}

  msg(msg: string, type: 'success' | 'info' | 'error') {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: "center",
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}