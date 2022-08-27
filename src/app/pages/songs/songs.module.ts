import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    SongsComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    MaterialModule,
  ]
})
export class SongsModule { }
