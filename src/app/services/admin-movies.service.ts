import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AdminMoviesService {
  public host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public addMovie(movieForm: any) {
    let formdata: FormData = new FormData();
    formdata.append('file', movieForm.fileSource);

    //let data = { movieForm: movieForm, formdata: formdata };

    return this.http.post(`${this.host}/movies`, movieForm);
  }
  public uploadPictures(movieForm: any, idMovie: any) {
    let formdata: FormData = new FormData();
    formdata.append('file', movieForm.fileSource);

    return this.http.post(`${this.host}/movies/uploadPictures/${idMovie}`, formdata);
  }
  public uploadBanner(movieForm: any, idMovie: any) {
    let formdata: FormData = new FormData();
    formdata.append('file', movieForm.fileSourceBanner);

    return this.http.post(`${this.host}/movies/uploadBanner/${idMovie}`, formdata);
  }
}
