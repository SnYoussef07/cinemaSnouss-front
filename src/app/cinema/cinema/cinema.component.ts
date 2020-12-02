import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  rooms: any;
  public hostPicture: string = 'http://localhost:8080/movies/pictures/';

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.cinemaService.getRooms().subscribe(
      (data) => {
        this.rooms = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
