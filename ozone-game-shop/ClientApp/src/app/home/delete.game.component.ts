import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OptionsService } from '../auth/options.service';
import { Auth } from '../auth/auth.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete.game.component.html'
})

export class DeleteGameComponent {
  error = null;
  returnedData: any;
  games: Game[];
  constructor(private http: HttpClient, private route: Router, private options: OptionsService) {
    this.options.checkForAuth();
    if (!Auth.isAdmin()) {
      this.route.navigateByUrl('/')
    }
    http.get<Game[]>(Auth.getUrl() + 'games', { headers: this.options.getOptions() }).subscribe(games => {
      this.games = games;
    }, error => console.log(error));
  }

  delete(id: any) {
    this.http.delete(Auth.getUrl() +'games/' + id, { headers: this.options.getOptions() }).subscribe(d => {
      this.http.get<Game[]>(Auth.getUrl() +'games', { headers: this.options.getOptions() }).subscribe(a => {
        this.games = a;
        this.returnedData = "Deleted!"
      }, error => console.log(error));
    }, error => console.log(error));  }
}

interface Game {
  id: number
  title: string
  imageUrl: string
  price: number
}
