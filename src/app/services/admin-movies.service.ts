import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AdminMoviesService {
  public host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public addMovie(movieForm: any) {
    return this.http.post(`${this.host}/movies`, movieForm, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token'),
      }),
    });
  }
  public uploadPictures(movieForm: any, idMovie: any) {
    let formdata: FormData = new FormData();
    formdata.append('file', movieForm.fileSource);

    return this.http.post(
      `${this.host}/movies/uploadPictures/${idMovie}`,
      formdata,
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem('token'),
        }),
      }
    );
  }
  public uploadBanner(movieForm: any, idMovie: any) {
    let formdata: FormData = new FormData();
    formdata.append('file', movieForm.fileSourceBanner);

    return this.http.post(
      `${this.host}/movies/uploadBanner/${idMovie}`,
      formdata,{
        headers: new HttpHeaders({
          Authorization: localStorage.getItem('token'),
        }),
      }
    );
  }
  public getCategories() {
    return this.http.get(`${this.host}/categories`);
  }
}
