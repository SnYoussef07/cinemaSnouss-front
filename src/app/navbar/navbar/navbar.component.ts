import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public token: any = null;

  constructor(public loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  logout() {
    this.loginService.logout();
    this.token = null;
    this.ngOnInit();
  }
}
