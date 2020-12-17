import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminTicketsService {
  public host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {

  }

  public getTickets() {
    return this.http.get(this.host + '/tickets');
  }

  public getFilmScreeningByTicket(id:any){
    return this.http.get(`${this.host}/tickets/${id}/filmScreening`);
  }
}
