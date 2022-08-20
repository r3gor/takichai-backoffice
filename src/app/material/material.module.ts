import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
  ]
})
export class MaterialModule { }
