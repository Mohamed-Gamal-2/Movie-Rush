import { Component } from '@angular/core';
import { TVAPIService } from '../services/tvapi.service';
import { Input } from '@angular/core';
import { WatchlistAPIService } from 'src/app/watchlist/services/watchlist-api.service';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css'],
})
export class TVCardComponent {
  @Input() show: any;
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  inwatchlist = false;
  counter!: number;
  constructor(
    private _API: TVAPIService,
    private _movieWatchlist: WatchlistAPIService
  ) {}
  ngOnInit() {
    this._movieWatchlist.getMovieWatchlist('tv').subscribe((data: any) => {
      if (data.results.filter((ele: any) => ele.id == this.show.id).length)
        this.inwatchlist = true;
    });
    this._movieWatchlist.geChanger().subscribe((data: any) => {
      this.counter = data;
    });
  }
  sendID(id: number) {
    this._API.setShowID(id);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  addOrRemove(id: number) {
    this.inwatchlist ? (this.inwatchlist = false) : (this.inwatchlist = true);
    this._movieWatchlist.addOrRemove(id, this.inwatchlist, 'tv');
    if (this.inwatchlist) this._movieWatchlist.setChanger(++this.counter);
    else this._movieWatchlist.setChanger(--this.counter);
  }
}
