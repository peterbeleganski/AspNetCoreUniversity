import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { GameDetails } from '../game.details'
import { CartService } from '../cart.service';
import { Auth } from '../auth/auth.service';

@Component({
  selector: 'app-game-details-component',
  templateUrl: './game.details.component.html'
})
export class GameDetailsComponent {
  public gameDetails: GameDetails;
  isAdded: boolean = false;
  error: string;

  constructor(private route: ActivatedRoute,
    private urlRouter: Router,
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private cartService: CartService) {
    this.route.params.subscribe(params => {
      let gameId = params.id;
      this.http.get<GameDetails>(Auth.getUrl() +'games/' + gameId)
        .subscribe(result => {
          this.gameDetails = result;
        }, error => this.urlRouter.navigateByUrl('/'))
    });
  }

  addToCart(game: GameDetails) {
    if (!Auth.isUserAuthenticated()) return this.error = "You must login first!";
    this.cartService.addProduct(game);
    this.isAdded = true;
  }
}
