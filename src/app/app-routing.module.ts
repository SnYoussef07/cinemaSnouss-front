import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmScreeningComponent } from './component/film-screening/film-screening.component';
import { ListFilmScreeningComponent } from './component/list-film-screening/list-film-screening.component';

const routes: Routes = [
  {path: '' , component: ListFilmScreeningComponent },
  {path: 'rooms/:id' , component: FilmScreeningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
