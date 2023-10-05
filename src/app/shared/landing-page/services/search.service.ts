import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchKey: any;
  constructor() {
    this.searchKey = new BehaviorSubject('');
  }

  setSearchKey(search: string) {
    this.searchKey.next(search);
  }
  getSearchKey() {
    return this.searchKey.asObservable();
  }
}
