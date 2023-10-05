import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MovieDetailsParentComponent } from './movie-details-parent/movie-details-parent.component';
import { MovieDetailsChildComponent } from './movie-details-child/movie-details-child.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieCardComponent,
    MovieDetailsParentComponent,
    MovieDetailsChildComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HomeComponent, MovieCardComponent],
})
export class MoviesModule {}
