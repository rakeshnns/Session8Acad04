import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleMrMrs } from './app.service1';
import { LogSrv } from './logger.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TitleMrMrs, LogSrv],
  bootstrap: [AppComponent]
})
export class AppModule { }
