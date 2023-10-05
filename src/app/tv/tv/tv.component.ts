import { Component } from '@angular/core';
import { TVAPIService } from '../services/tvapi.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TVComponent {
  shows: any[] = [];
  pagesArr = new Array(20).fill(0).map((c, i) => i + 1);
  pageNum = 1;
  maxPages = 0;
  constructor(private _API: TVAPIService) {}
  scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  getshow() {
    this._API.getAllShows().subscribe((data: any) => {
      this.shows = data.results;
    });
  }
  getPage() {
    this._API.getpage().subscribe((data: any) => {
      this.pageNum = data;
    });
  }

  paginate(page: number) {
    this._API.pagination(page).subscribe((data: any) => {
      this.shows = data.results;
      this.maxPages = data.total_pages;
      this._API.setpage(page);
    });
    this.scrollTop();
  }

  next() {
    this._API.pagination(++this.pageNum).subscribe((data: any) => {
      this.shows = data.results;
      this._API.setpage(this.pageNum);
    });
    this.scrollTop();
  }
  previous() {
    this._API.pagination(--this.pageNum).subscribe((data: any) => {
      this.shows = data.results;
      this._API.setpage(this.pageNum);
    });
    this.scrollTop();
  }

  ngOnInit() {
    this._API.setpage(1);
    this.getshow();
    this.getPage();
  }
}
