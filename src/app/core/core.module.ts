import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointPipe } from './pipes/breakpoint.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    BreakpointPipe,
    MenuComponent,
  ],
  exports: [
    MenuComponent,
    BreakpointPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FontAwesomeModule,
  ]
})
export class CoreModule { }
