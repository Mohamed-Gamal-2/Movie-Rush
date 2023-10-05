import { Component, Input } from '@angular/core';
import { WatchlistAPIService } from 'src/app/watchlist/services/watchlist-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  counter!: any;
  counterM!: any;
  counterT!: any;
  constructor(private _Watchlist: WatchlistAPIService) {}
  @Input() Appcounter: any;
  getData() {
    setTimeout(() => {
      this._Watchlist.getMovieWatchlist('movies').subscribe((dataM: any) => {
        this._Watchlist.getMovieWatchlist('tv').subscribe((dataT: any) => {
          this.counter = dataM.results.length + dataT.results.length;
        });
      });
    }, 200);
  }

  ngOnChanges() {
    this.getData();
  }
}
