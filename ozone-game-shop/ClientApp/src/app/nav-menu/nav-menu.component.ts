import { Component, OnInit } from '@angular/core';

import { Auth } from '../auth/auth.service';
import { Router } from '@angular/router';
import { OptionsService } from '../auth/options.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent{
  isExpanded = false;
  user: any;
  
  constructor(private router: Router, private options: OptionsService) {
    this.user = Auth.getUser();
  }

  collapse() {
    this.isExpanded = false;
  }

  isAuthenticated() {
    return Auth.isUserAuthenticated();
  }

  isAdmin() {
    return Auth.isAdmin();
  }

  logout() {
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
