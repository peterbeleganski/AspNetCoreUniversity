import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Auth } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class OptionsService {

  constructor(private router: Router) { }

  getOptions() {
    return new HttpHeaders().set('Authorization', 'bearer ' + (Auth.getToken()));
  }

  getUrl() {
    return 'https://localhost:44366/';
  }

  checkForAuth() {
    if (!Auth.isUserAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

}
