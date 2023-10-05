import { Component } from '@angular/core';
import { WatchlistAPIService } from '../services/watchlist-api.service';

@Component({
  selector: 'app-watchlist-patent',
  templateUrl: './watchlist-patent.component.html',
  styleUrls: ['./watchlist-patent.component.css'],
})
export class WatchlistPatentComponent {
  counter: any;
  // movies: any;
  constructor(private _watchlist: WatchlistAPIService) {}
  ngOnInit() {
    this._watchlist.geChanger().subscribe((data: any) => {
      this.counter = data;
    });
    // this._watchlist.getMovieWatchlist('movies').subscribe((data: any) => {
    //   this.movies = data.results;
    // });
  }
}
