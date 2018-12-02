import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Auth } from '../auth/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  user: LoginUserModel = new LoginUserModel();
  returnedData: any;
  error: String = null;

  constructor(private http: HttpClient,
    private route: Router) {
    this.user.username = "";
    this.user.password = "";
    if (Auth.isUserAuthenticated()) {
      this.route.navigateByUrl('');
    }
  }

  login() {
    console.log(this.user);
    this.http
      .post('https://localhost:44366/api/login', this.user)
      .subscribe(res => {
        console.log(res);
        const token = res.token;
        Auth.authenticateUser(token);
        this.route.navigateByUrl('/');
      } error => {
        this.error = 'Invalid credentials!';
        this.route.navigateByUrl('/login');
      })
  }
}

class LoginUserModel {
  constructor(
    public username?: string,
    public password?: string,
    public EmailAddress?: string
  ) { }
}
