import { Component, OnInit } from '@angular/core';
import { FilmScreeningService } from 'src/app/services/film-screening.service';

@Component({
  selector: 'app-list-film-screening',
  templateUrl: './list-film-screening.component.html',
  styleUrls: ['./list-film-screening.component.scss'],
})
export class ListFilmScreeningComponent implements OnInit {
  rooms: any;
  public hostPicture: string = 'http://localhost:8080/movies/pictures/';

  constructor(private filmScreeningService: FilmScreeningService) {}

  ngOnInit(): void {
    this.filmScreeningService.getRooms().subscribe(
      (data) => {
        this.rooms = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
