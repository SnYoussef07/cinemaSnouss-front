import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private loginService: LoginServiceService
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
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        console.log('success');
        let jwtToken = data.headers.get('Authorization');
        console.log(jwtToken);
      },
      (err: any) => {
        this.mode = 1;
      }
    );
  }
}
