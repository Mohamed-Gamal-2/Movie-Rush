import { Component, Input } from '@angular/core';
import { WatchlistAPIService } from '../services/watchlist-api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  @Input() counter: any;
  watchlistMovieMid = [];
  watchlistTVMid = [];
  constructor(private _watchlist: WatchlistAPIService) {}
  ngOnChanges() {
    this._watchlist.getMovieWatchlist('movies').subscribe((data: any) => {
      this.watchlistMovieMid = data.results;
    });
    this._watchlist.getMovieWatchlist('tv').subscribe((data: any) => {
      this.watchlistTVMid = data.results;
    });
  }
}
