import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { APIService } from '../services/api.service';
import { WatchlistAPIService } from 'src/app/watchlist/services/watchlist-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: any;
  inwatchlist = false;
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  counter!: number;
  constructor(
    private _API: APIService,
    private _showWatchlist: WatchlistAPIService
  ) {}
  ngOnInit() {
    this._showWatchlist.getMovieWatchlist('movies').subscribe((data: any) => {
      if (data.results.filter((ele: any) => ele.id == this.movie.id).length)
        this.inwatchlist = true;
    });

    this._showWatchlist.geChanger().subscribe((data: any) => {
      this.counter = data;
    });
  }
  sendID(id: number) {
    this._API.setMovieID(id);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  addOrRemove(id: number) {
    this.inwatchlist ? (this.inwatchlist = false) : (this.inwatchlist = true);
    this._showWatchlist.addOrRemove(id, this.inwatchlist, 'movie');
    if (this.inwatchlist) this._showWatchlist.setChanger(++this.counter);
    else this._showWatchlist.setChanger(--this.counter);
  }
}
