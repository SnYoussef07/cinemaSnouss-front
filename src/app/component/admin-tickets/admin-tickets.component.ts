import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminTicketsService } from 'src/app/services/admin-tickets.service';

@Component({
  selector: 'app-admin-tickets',
  templateUrl: './admin-tickets.component.html',
  styleUrls: ['./admin-tickets.component.scss'],
})
export class AdminTicketsComponent implements OnInit {
  public tickets: any;
  public currentTicketInfo: any;
  /* ngb modal */
  closeResult = '';

  constructor(
    private ticketsService: AdminTicketsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(
      (data) => {
        this.tickets = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCurrentTicket(id: any) {
    this.ticketsService.getFilmScreeningByTicket(id).subscribe((data) => {
      this.currentTicketInfo = data;
    });
  }

  /* Modal ngbBootstrap */
  open(content: any, idTicket: any) {
    this.getCurrentTicket(idTicket);
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
