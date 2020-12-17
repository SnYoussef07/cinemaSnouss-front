import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {
  public host: string = environment.myUrl;

  constructor(private http: HttpClient) { }

  public getMovies() {
    return this.http.get(`${this.host}/movies`);
  }
}
