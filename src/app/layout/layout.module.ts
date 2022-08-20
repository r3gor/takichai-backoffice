import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    CoreModule,
    FontAwesomeModule,
  ],
  exports: [
  ]
})
export class LayoutModule { }
