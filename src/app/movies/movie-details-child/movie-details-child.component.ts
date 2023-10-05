import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { APIService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { WatchlistAPIService } from 'src/app/watchlist/services/watchlist-api.service';

@Component({
  selector: 'app-movie-details-child',
  templateUrl: './movie-details-child.component.html',
  styleUrls: ['./movie-details-child.component.css'],
})
export class MovieDetailsChildComponent {
  @Input() movieID!: number;
  paramsID: number = 0;
  movieDetails: any;
  recommendedMovies: any[] = [];
  inwatchlist = false;
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  changer = 0;
  counter!: number;
  constructor(
    private _API: APIService,
    private _params: ActivatedRoute,
    private _movieWatchlist: WatchlistAPIService
  ) {}
  ngOnInit() {
    this._movieWatchlist.getMovieWatchlist('movies').subscribe((data: any) => {
      if (
        data.results.filter((ele: any) => ele.id == this.movieDetails.id).length
      )
        this.inwatchlist = true;
    });
    this._movieWatchlist.geChanger().subscribe((data: any) => {
      this.counter = data;
    });
  }
  ngOnChanges() {
    this.paramsID = this._params.snapshot.params['id'];
    this._API.getMovieDetail(this.paramsID).subscribe((data: any) => {
      this.movieDetails = data;
      this._API.recommendedMovies(this.paramsID).subscribe((data: any) => {
        this.recommendedMovies = data.results;
      });
    });
  }
  addOrRemove(id: number) {
    this.inwatchlist ? (this.inwatchlist = false) : (this.inwatchlist = true);
    this._movieWatchlist.addOrRemove(id, this.inwatchlist, 'movie');
    if (this.inwatchlist) this._movieWatchlist.setChanger(++this.counter);
    else this._movieWatchlist.setChanger(--this.counter);
  }
}
