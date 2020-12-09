import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AdminMoviesService {
  public host: string = 'http://localhost:8080';

  constructor() {}

  public addMovie(movieForm: FormGroup) {}
}
