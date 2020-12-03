import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ListFilmScreeningComponent } from './component/list-film-screening/list-film-screening.component';
import { FilmScreeningComponent } from './component/film-screening/film-screening.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListFilmScreeningComponent,
    FilmScreeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
