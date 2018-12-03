import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Auth } from '../auth/auth.service';
import { OptionsService } from '../auth/options.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  user: LoginUserModel = new LoginUserModel();
  returnedData: any;
  error: String = null;

  constructor(private http: HttpClient,
    private route: Router, private options: OptionsService) {
    this.user.username = "";
    this.user.password = "";
    if (Auth.isUserAuthenticated()) {
      this.route.navigateByUrl('/');
    }
  }

  login() {
    console.log(this.user);
    this.http
      .post<Response>(Auth.getUrl() +'login', this.user)
      .subscribe(res => {
       
        const token = res.token;
        Auth.authenticateUser(token);
        Auth.saveUser(res.user);
        this.route.navigateByUrl('/login');
      }, error => {
        this.error = 'Invalid credentials!';
        this.route.navigateByUrl('/login');
      })
  }
}

interface Response {
  token: string;
  user: LoginUserModel;
}

class LoginUserModel {
  constructor(
    public username?: string,
    public password?: string,
    public role?:string
  ) { }
}
