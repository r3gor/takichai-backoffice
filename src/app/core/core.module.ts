import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointPipe } from './pipes/breakpoint.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingHttpComponent } from './components/loading-http/loading-http.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';



@NgModule({
  declarations: [
    BreakpointPipe,
    MenuComponent,
    EditPanelComponent,
    LoadingHttpComponent,
    ConfirmDialogComponent,
    DynamicFormComponent,
    DetailsDialogComponent,
  ],
  exports: [
    MenuComponent,
    BreakpointPipe,
    LoadingHttpComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
  ]
})
export class CoreModule { }
