import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MiniraknareComponent } from './miniraknare/miniraknare.component';


@NgModule({
  declarations: [
    AppComponent,
    MiniraknareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
