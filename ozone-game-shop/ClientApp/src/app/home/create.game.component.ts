import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OptionsService } from '../auth/options.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create.game.component.html'
})

export class CreateGameComponent {
  game: CreateGameModel = new CreateGameModel();
  error = null;
  returnedData: any;
  constructor(private http: HttpClient, private route: Router, private options: OptionsService) {
    this.options.checkForAuth();
  }

  createGame() {
    const headers = this.options.getOptions();
    console.log(this.game)
    this.http
      .post('https://localhost:44366/api/games', (this.game), { headers: headers })
      .toPromise()
      .then(res => {
        this.returnedData = res;
        console.log(res);

      });
  }
}

class CreateGameModel {
  constructor(
    public title?: string,
    public price?: number,
    public description?: string,
    public imageUrl?: string,
  ) { }
}
