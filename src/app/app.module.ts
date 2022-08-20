import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { makeFactory } from './core/initializers/factory';
import { FontAwesomeInit } from './core/initializers/font-awesome.init';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: makeFactory<FontAwesomeInit>(),
      deps: [FontAwesomeInit],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
