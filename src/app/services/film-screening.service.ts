import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FilmScreeningService {
  public host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getRooms() {
    return this.http.get(this.host + '/rooms');
  }

  public getRoomById(id: any) {
    return this.http.get(`${this.host}/rooms/${id}`);
  }

  public getTicketsByIdFilmScreening(id: any) {
    return this.http.get(`${this.host}/filmScreenings/${id}/tickets`);
  }

  public payeTickets(payeForm: FormGroup) {
    return this.http.post(`${this.host}/cinema/payTickets`, payeForm, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token'),
      }),
    });
  }
}
