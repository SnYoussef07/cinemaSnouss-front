import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public mode: number = 0;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password: [],
    });
  }

  public onLogin() {
    this.loginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        let jwtToken = data.headers.get('Authorization');
        this.loginService.saveToken(jwtToken);
        this.loginService.loadToken();
        this.router.navigateByUrl('/');
      },
      (err: any) => {
        this.mode = 1;
      }
    );
  }
}
