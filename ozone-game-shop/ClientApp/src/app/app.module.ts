import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { GameDetailsComponent } from './home/game.details.component'
import { LoginComponent } from './user/login.component';
import { CartService } from './cart.service';
import { Auth } from './auth/auth.service';
import { OptionsService } from './auth/options.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cart', component: CartComponent },
      { path: 'games/:id', component: GameDetailsComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [CartService, Auth, OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
