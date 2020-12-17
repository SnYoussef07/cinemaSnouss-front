import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMoviesComponent } from './component/admin-movies/admin-movies.component';
import { AdminTicketsComponent } from './component/admin-tickets/admin-tickets.component';
import { FilmScreeningComponent } from './component/film-screening/film-screening.component';
import { ListFilmScreeningComponent } from './component/list-film-screening/list-film-screening.component';
import { ListMoviesComponent } from './component/list-movies/list-movies.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: ListFilmScreeningComponent },
  { path: 'rooms/:id', component: FilmScreeningComponent },
  { path: 'admin/movies', component: AdminMoviesComponent },
  { path: 'admin/tickets', component: AdminTicketsComponent },
  { path: 'movies', component: ListMoviesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
