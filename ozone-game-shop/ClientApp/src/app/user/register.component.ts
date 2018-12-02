import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Auth } from '../auth/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  user: RegisterUser = new RegisterUser();
  returnedData: any;
  constructor(private http: HttpClient, private route: Router) {
    if (Auth.isUserAuthenticated()) {
      this.route.navigateByUrl('');
    }
  }

  register() {
    console.log(this.user)
    this.http
      .post<Response>('https://localhost:44366/api/register', this.user)
      .toPromise()
      .then(data => {
        this.returnedData = data.message;
        console.log(data);
      });
  }
}

 class RegisterUser {
  constructor(
    public username?: string,
    public EmailAddress?: string,
    public password?: string,
    public confirmPassword?: string
  ) { }
}

class Response {
  message: String;
  headers: any;
}
