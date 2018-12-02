import { Injectable } from '@angular/core';
import { GameDetails } from './game.details';

@Injectable()
export class CartService {

  private products: GameDetails[] = [];

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(game: GameDetails) {
    this.products.push(game);
  }

  removeProduct(id: any) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
        return true;
      }
    }

    return false;
  }
}
