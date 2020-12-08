import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmScreeningService } from 'src/app/services/film-screening.service';

@Component({
  selector: 'app-film-screening',
  templateUrl: './film-screening.component.html',
  styleUrls: ['./film-screening.component.scss'],
})
export class FilmScreeningComponent implements OnInit {
  public room: any;
  public tickets: any;
  public totalPrice: number = 0;
  public hostPicture: string = 'http://localhost:8080/movies/pictures/';
  public hostBanner: string = 'http://localhost:8080/movies/banner/';
  public idRoom: any = null;
  public selectedTickets: any = [];
  public payeForm: FormGroup;
  /* ngb modal */
  closeResult = '';

  constructor(
    private route: ActivatedRoute,
    private filmScreeningService: FilmScreeningService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.payeForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.payeForm = this.fb.group({
      nameClient: [],
      paymentCode: [],
      ticketsId: [],
    });
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
    if (!ticket.selected) {
      ticket.selected = true;
      this.selectedTickets.push(ticket);
      this.acumulatPrice();
    } else {
      ticket.selected = false;
      this.selectedTickets.splice(this.selectedTickets.indexOf(ticket), 1);
      this.acumulatPrice();
    }
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

  public acumulatPrice() {
    this.totalPrice = this.selectedTickets.reduce(
      (accumulateur: any, valeurCourant: any) =>
        accumulateur + valeurCourant.price,
      0
    );
  }

  public onPayTickets() {
    let tickets: any = [];
    this.selectedTickets.forEach((myTicket: any) => {
      tickets.push(myTicket.id);
    });
    this.payeForm.patchValue({
      ticketsId: tickets,
    });
    this.filmScreeningService.payeTickets(this.payeForm.value).subscribe((data:any) => {
      console.log("success");
    },(err:any) => {
      console.log(err);
    })
  }

  /* Modal ngbBootstrap */

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
