import { Component } from '@angular/core';
import { APIService } from '../services/api.service';
import { WatchlistAPIService } from 'src/app/watchlist/services/watchlist-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: any[] = [];
  pagesArr = new Array(20).fill(0).map((c, i) => i + 1);
  pagesArrsm = new Array(5).fill(0).map((c, i) => i + 1);
  pageNum = 1;
  maxPages = 0;
  counter = 0;
  constructor(
    private _API: APIService,
    private _movieWatchlist: WatchlistAPIService
  ) {}
  scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  getMovies() {
    this._API.getAllMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
  getPage() {
    this._API.getpage().subscribe((data: any) => {
      this.pageNum = data;
    });
  }

  paginate(page: number) {
    this._API.pagination(page).subscribe((data: any) => {
      this.movies = data.results;
      this.maxPages = data.total_pages;
      this._API.setpage(page);
    });
    this.scrollTop();
  }

  next() {
    this._API.pagination(++this.pageNum).subscribe((data: any) => {
      this.movies = data.results;
      this._API.setpage(this.pageNum);
    });
    this.scrollTop();
  }
  previous() {
    this._API.pagination(--this.pageNum).subscribe((data: any) => {
      this.movies = data.results;
      this._API.setpage(this.pageNum);
    });
    this.scrollTop();
  }

  ngOnInit() {
    this._API.setpage(1);
    this.getMovies();
    this.getPage();
  }
}
