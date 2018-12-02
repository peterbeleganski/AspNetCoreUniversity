import { Component } from '@angular/core';
import { GameDetails } from '../game.details';
import { CartService } from '../cart.service';
import { Auth } from '../auth/auth.service';

import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  providers: [],
  selector: 'app-cart-component',
  templateUrl: './cart.component.html'
})
export class CartComponent {

  products = [];
  sum: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    if (!Auth.isUserAuthenticated()) {
      this.router.navigateByUrl('');
    }
    this.products = cartService.getProducts();
    this.products.forEach(el => this.sum += el.price);
  }

  remove(product: GameDetails) {
    let curr = product;
    this.cartService.removeProduct(product.id)
    this.sum = 0;
    this.cartService.getProducts().forEach(e => this.sum += e.price);
    this.router.navigateByUrl('/cart');
  }
}
