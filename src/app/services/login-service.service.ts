import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  public host: string = 'http://localhost:8080';
  private jwtToken: any = null;
  public roles: Array<any> = [];

  constructor(private http: HttpClient) {}

  login(user: any) {
    /* on veux pas recuperer json mais le http */
    return this.http.post(`${this.host}/login`, user, { observe: 'response' });
  }

  logout() {
    localStorage.removeItem('token');
    this.jwtToken = null;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  isAdmin() {
    for (let r of this.roles) {
      if (r.authority == 'ADMIN') return true;
    }
    return false;
  }
}
