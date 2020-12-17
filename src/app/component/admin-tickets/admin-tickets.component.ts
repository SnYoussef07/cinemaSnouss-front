import { Component, OnInit } from '@angular/core';
import { AdminTicketsService } from 'src/app/services/admin-tickets.service';

@Component({
  selector: 'app-admin-tickets',
  templateUrl: './admin-tickets.component.html',
  styleUrls: ['./admin-tickets.component.scss'],
})
export class AdminTicketsComponent implements OnInit {
  public tickets: any;

  constructor(private ticketsService: AdminTicketsService) {}

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
}
