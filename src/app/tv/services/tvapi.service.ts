import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TVAPIService {
  private showId;
  private page;
  constructor(private _http: HttpClient) {
    this.showId = new BehaviorSubject(0);
    this.page = new BehaviorSubject(0);
  }
  getAllShows() {
    return this._http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }
  getShowDetail(id: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }

  recommendedShows(id: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }

  getShowID() {
    return this.showId.asObservable();
  }
  setShowID(id: number) {
    this.showId.next(id);
  }

  pagination(page: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=b6bf914c5259361379673d87ba12221b&page=${page}`
    );
  }
  getpage() {
    return this.page.asObservable();
  }
  setpage(page: number) {
    this.page.next(page);
  }
}
