import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';
import { TVModule } from './tv/tv.module';
import { WatchlistModule } from './watchlist/watchlist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MoviesModule,
    TVModule,
    WatchlistModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
