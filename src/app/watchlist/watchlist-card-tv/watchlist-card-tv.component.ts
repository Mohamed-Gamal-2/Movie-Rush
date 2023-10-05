import { Component } from '@angular/core';
import { WatchlistAPIService } from '../services/watchlist-api.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-watchlist-card-tv',
  templateUrl: './watchlist-card-tv.component.html',
  styleUrls: ['./watchlist-card-tv.component.css'],
})
export class WatchlistCardTVComponent {
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
    this._watchlist.addOrRemove(id, this.inwatchlist, 'tv');
    setTimeout(() => {
      if (this.inwatchlist) this._watchlist.setChanger(++this.counter);
      else this._watchlist.setChanger(--this.counter);
    }, 100);
  }
}
