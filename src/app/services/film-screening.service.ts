import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public getTicketsByIdFilmScreening(id: any){
    return this.http.get(`${this.host}/filmScreenings/${id}/tickets`);
  }
}
