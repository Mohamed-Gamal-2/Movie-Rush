import { Component, Input } from '@angular/core';
import { WatchlistAPIService } from '../services/watchlist-api.service';

@Component({
  selector: 'app-watchlist-card-movies',
  templateUrl: './watchlist-card-movies.component.html',
  styleUrls: ['./watchlist-card-movies.component.css'],
})
export class WatchlistCardMoviesComponent {
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  @Input() itter: any;
  @Input() counterChi: any;

  inwatchlist = true;
  counter!: number;

  constructor(private _watchlist: WatchlistAPIService) {}
  ngOnInit() {
    this._watchlist.geChanger().subscribe((data: any) => {
      this.counter = data;
    });
  }
  addOrRemove(id: number) {
    this.inwatchlist ? (this.inwatchlist = false) : (this.inwatchlist = true);
    this._watchlist.addOrRemove(id, this.inwatchlist, 'movie');
    setTimeout(() => {
      if (this.inwatchlist) this._watchlist.setChanger(++this.counter);
      else this._watchlist.setChanger(--this.counter);
    }, 100);
  }
}
