import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  public host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(user: any) {
    /* on veux pas recuperer json mais le http */
    return this.http.post(`${this.host}/login`, user, { observe: 'response' });
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
  }
}
