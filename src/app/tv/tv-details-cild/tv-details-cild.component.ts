import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TVAPIService } from '../services/tvapi.service';
import { ActivatedRoute } from '@angular/router';
import { WatchlistAPIService } from 'src/app/watchlist/services/watchlist-api.service';

@Component({
  selector: 'app-tv-details-cild',
  templateUrl: './tv-details-cild.component.html',
  styleUrls: ['./tv-details-cild.component.css'],
})
export class TVDetailsCildComponent {
  @Input() show!: number;
  paramsID: number = 0;
  showDetails: any;
  recommendedshows: any[] = [];
  inwatchlist = false;
  counter!: number;
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private _API: TVAPIService,
    private _params: ActivatedRoute,
    private _showWatchlist: WatchlistAPIService
  ) {}
  ngOnInit() {
    this._showWatchlist.getMovieWatchlist('tv').subscribe((data: any) => {
      if (
        data.results.filter((ele: any) => ele.id == this.showDetails.id).length
      )
        this.inwatchlist = true;
    });
    this._showWatchlist.geChanger().subscribe((data: any) => {
      this.counter = data;
    });
  }

  ngOnChanges() {
    this.paramsID = this._params.snapshot.params['id'];
    this._API.getShowDetail(this.paramsID).subscribe((data: any) => {
      this.showDetails = data;
      this._API.recommendedShows(this.paramsID).subscribe((data: any) => {
        this.recommendedshows = data.results;
      });
    });
  }
  addOrRemove(id: number) {
    this.inwatchlist ? (this.inwatchlist = false) : (this.inwatchlist = true);
    this._showWatchlist.addOrRemove(id, this.inwatchlist, 'tv');
    if (this.inwatchlist) this._showWatchlist.setChanger(++this.counter);
    else this._showWatchlist.setChanger(--this.counter);
  }
}
