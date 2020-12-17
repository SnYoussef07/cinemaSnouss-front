import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminTicketsService {
  public host: string = environment.myUrl;

  constructor(private http: HttpClient) {

  }

  public getTickets() {
    return this.http.get(this.host + '/tickets');
  }

  public getFilmScreeningByTicket(id:any){
    return this.http.get(`${this.host}/tickets/${id}/filmScreening`);
  }
}
