import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistAPIService {
  private changer: any;
  private movieWhishlist: any;
  private TVWhishlist: any;
  constructor(private _http: HttpClient) {
    this.changer = new BehaviorSubject(0);
    this.movieWhishlist = new BehaviorSubject([]);
    this.TVWhishlist = new BehaviorSubject([]);
  }

  addOrRemove(id: number, inwatchlist: boolean, type: string) {
    const url = 'https://api.themoviedb.org/3/account/20496832/watchlist'; // Replace with the appropriate URL
    const body = {
      media_type: type,
      media_id: id,
      watchlist: inwatchlist,
    };

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmJmOTE0YzUyNTkzNjEzNzk2NzNkODdiYTEyMjIxYiIsInN1YiI6IjY1MTI5MTc5MzQ0YThlMDk2Zjg2NTk1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFhzKR5M__2FGLY3UviYV8LVOQEPSPyOQNu3jin4AbU'
      );

    this._http.post(url, body, { headers }).subscribe(
      (response) => {},
      (error) => {}
    );
  }

  getMovieWatchlist(type: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/account/20496832/watchlist/${type}`; // Replace with the appropriate URL

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmJmOTE0YzUyNTkzNjEzNzk2NzNkODdiYTEyMjIxYiIsInN1YiI6IjY1MTI5MTc5MzQ0YThlMDk2Zjg2NTk1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFhzKR5M__2FGLY3UviYV8LVOQEPSPyOQNu3jin4AbU'
      );

    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('sort_by', 'created_at.asc');

    return this._http.get(url, { headers, params });
  }

  geChanger() {
    return this.changer.asObservable();
  }

  setChanger(id: number) {
    this.changer.next(id);
  }

  getMovies() {
    return this.movieWhishlist.asObservable();
  }
  getTVs() {
    return this.TVWhishlist.asObservable();
  }
  setMovies(movies: any) {
    this.movieWhishlist.next(movies);
  }
  setTVS(TVs: any) {
    this.movieWhishlist.next(TVs);
  }
}
