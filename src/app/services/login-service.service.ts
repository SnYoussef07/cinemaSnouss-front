import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  public host: string = 'http://localhost:8080';
  private jwtToken: any = null;
  public roles: Array<any> = [];
  public subject: String = null;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token') != null) {
      this.roles = jwtDecode(localStorage.getItem('token'))['roles'];
      this.subject = jwtDecode(localStorage.getItem('token'))['sub'];
    }
  }

  login(user: any) {
    /* on veux pas recuperer json mais le http */
    return this.http.post(`${this.host}/login`, user, { observe: 'response' });
  }

  logout() {
    localStorage.removeItem('token');
    this.jwtToken = null;
    this.roles = [];
    this.subject = null;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    this.roles = jwtDecode(localStorage.getItem('token'))['roles'];
    this.subject = jwtDecode(localStorage.getItem('token'))['sub'];
  }

  isAdmin() {
    for (let r of this.roles) {
      if (r.authority == 'ADMIN') return true;
    }
    return false;
  }
  isAuth() {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }
  getSubject() {
    return this.subject;
  }
}
