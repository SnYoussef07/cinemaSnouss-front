import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmScreeningService } from 'src/app/services/film-screening.service';

@Component({
  selector: 'app-film-screening',
  templateUrl: './film-screening.component.html',
  styleUrls: ['./film-screening.component.scss'],
})
export class FilmScreeningComponent implements OnInit {
  public room: any;
  public tickets: any;
  public hostPicture: string = 'http://localhost:8080/movies/pictures/';
  public hostBanner: string = 'http://localhost:8080/movies/banner/';
  public idRoom: any = null;

  constructor(
    private route: ActivatedRoute,
    private filmScreeningService: FilmScreeningService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.idRoom = res.get('id');
      this.filmScreeningService.getRoomById(this.idRoom).subscribe(
        (result) => {
          this.room = result;
        },
        (err) => console.log('Err' + err)
      );
    });
  }

  public onGetAllTickets(id: any) {
    this.filmScreeningService.getTicketsByIdFilmScreening(id).subscribe(
      (result) => {
        this.tickets = result;
      },
      (err) => console.log(err)
    );
  }
}
