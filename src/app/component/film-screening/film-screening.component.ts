import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmScreeningService } from 'src/app/services/film-screening.service';

@Component({
  selector: 'app-film-screening',
  templateUrl: './film-screening.component.html',
  styleUrls: ['./film-screening.component.scss'],
})
export class FilmScreeningComponent implements OnInit {
  room: any;
  public hostPicture: string = 'http://localhost:8080/movies/pictures/';

  public idRoom: any = null;
  constructor(
    private route: ActivatedRoute,
    private filmScreeningService: FilmScreeningService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
       this.idRoom = res.get('id');
      this.filmScreeningService.getRoomById(this.idRoom).subscribe(
        (result) => (this.room = result),
        (err) => console.log('Err' + err)
      );
    });
  }
}
