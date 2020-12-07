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
  private selectedTickets: any;

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
        this.selectedTickets = [];
      },
      (err) => console.log(err)
    );
  }

  public onSelectTicket(ticket: any) {
    if(!ticket.selected){
      ticket.selected = true;
      this.selectedTickets.push(ticket);
    }else{
      ticket.selected = false;
      this.selectedTickets.splice(this.selectedTickets.indexOf(ticket),1);
    }
    console.log(this.selectedTickets)
  }

  public getTicketClass(ticket: any) {
    let classBtn = 'btn m-1 ';
    if (ticket.reserve == true) {
      classBtn += 'btn-danger';
    } else if (ticket.selected) {
      classBtn += 'btn-warning';
    } else {
      classBtn += 'btn-success';
    }
    return classBtn;
  }
}
