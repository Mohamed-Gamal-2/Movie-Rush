import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistCardMoviesComponent } from './watchlist-card-movies/watchlist-card-movies.component';
import { WatchlistCardTVComponent } from './watchlist-card-tv/watchlist-card-tv.component';
import { RouterModule } from '@angular/router';
import { WatchlistPatentComponent } from './watchlist-patent/watchlist-patent.component';

@NgModule({
  declarations: [
    WatchlistComponent,
    WatchlistCardTVComponent,
    WatchlistCardMoviesComponent,
    WatchlistPatentComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    WatchlistComponent,
    WatchlistCardTVComponent,
    WatchlistCardMoviesComponent,
    WatchlistPatentComponent,
  ],
})
export class WatchlistModule {}
