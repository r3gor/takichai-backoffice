import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { makeFactory } from './core/initializers/factory';
import { FontAwesomeInit } from './core/initializers/font-awesome.init';
import { HeadersInterceptor } from './core/interceptors/headers.interceptor';
import { HttpStatusInterceptor } from './core/interceptors/http-status.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: makeFactory<FontAwesomeInit>(),
      deps: [FontAwesomeInit],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor, 
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpStatusInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
