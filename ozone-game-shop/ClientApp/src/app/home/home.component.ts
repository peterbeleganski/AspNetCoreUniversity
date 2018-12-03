import { Component, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartComponent } from '../cart/cart.component';
import { GameDetails } from '../game.details';
import { CartService } from '../cart.service';
import { OptionsService } from '../auth/options.service';
import { Auth } from '../auth/auth.service';

@Component({
  providers: [],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public games: Game[];
  baseUrl: string;
  error: string;
  addedToCart: boolean = false;;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private cartService: CartService, private optService: OptionsService) {
    this.baseUrl = baseUrl;
    http.get<Game[]>(Auth.getUrl() + 'games/', { headers: this.optService.getOptions() }).subscribe(games => {
      this.games = games;
    }, error => console.log(error));
  }

  buy(id: any) {
    if (!Auth.isUserAuthenticated()) this.error = "You must login first!";
    this.http.get<GameDetails>(Auth.getUrl() + 'games/' + id).subscribe(game => {
      this.cartService.addProduct(game);
      if (Auth.isUserAuthenticated()) {
        this.addedToCart = true;
      }
    }, error => console.log(error))
  }
}

interface Game {
  id: number
  title: string
  imageUrl: string
  price: number
}
