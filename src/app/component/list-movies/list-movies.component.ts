import { Component, OnInit } from '@angular/core';
import { ListMoviesService } from 'src/app/services/list-movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {
  public movies: any;
  public hostPicture: string = `${environment.myUrl}/movies/pictures/`;

  constructor(private listMoviesService: ListMoviesService) {}

  ngOnInit(): void {
    this.listMoviesService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
