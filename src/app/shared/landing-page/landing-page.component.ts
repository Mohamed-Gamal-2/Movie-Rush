import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIService } from 'src/app/movies/services/api.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private _API: APIService, private _search: SearchService) {}
  searchKey: string = '';
  movies = [];
  SearchedMovies!: any;
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  counter: number = 1;
  maxcount!: number;

  getMoviesData() {
    this._API.pagination(this.counter).subscribe((data: any) => {
      this.SearchedMovies = data.results.filter((ele: any) =>
        ele.original_title.toLowerCase().includes(this.searchKey.toLowerCase())
      );
    });
  }

  searchonInput() {
    this.getMoviesData();
  }

  next() {
    ++this.counter;
    this.getMoviesData();
  }
  previous() {
    --this.counter;
    this.getMoviesData();
  }
  ngOnInit() {}
}
