import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  public rooms: any;

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {}
}
