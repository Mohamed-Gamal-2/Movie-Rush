import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class APIService {
  private movieId: any;
  private page: any;
  constructor(private _http: HttpClient) {
    this.movieId = new BehaviorSubject(0);
    this.page = new BehaviorSubject(0);
  }
  getAllMovies() {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }

  getMovieDetail(id: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }

  recommendedMovies(id: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }

  getMovieID() {
    return this.movieId.asObservable();
  }
  setMovieID(id: number) {
    this.movieId.next(id);
  }

  pagination(page: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b6bf914c5259361379673d87ba12221b&page=${page}`
    );
  }
  getpage() {
    return this.page.asObservable();
  }
  setpage(page: number) {
    this.page.next(page);
  }
}
