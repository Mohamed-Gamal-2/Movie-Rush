import { Component } from '@angular/core';
import { WatchlistAPIService } from './watchlist/services/watchlist-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movie-Rush';
  Appcounter: any;
  constructor(private _watchlist: WatchlistAPIService) {}
  ngOnInit() {
    this._watchlist.geChanger().subscribe((data: any) => {
      this.Appcounter = data;
    });
  }
}
