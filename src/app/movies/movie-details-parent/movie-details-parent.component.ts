import { Component } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-movie-details-parent',
  templateUrl: './movie-details-parent.component.html',
  styleUrls: ['./movie-details-parent.component.css'],
})
export class MovieDetailsParentComponent {
  movieID!: number;
  constructor(private _API: APIService) {}
  ngOnInit() {
    this._API.getMovieID().subscribe((data: any) => {
      this.movieID = data;
    });
  }
}
