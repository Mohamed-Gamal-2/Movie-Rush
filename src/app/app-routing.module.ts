import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './movies/home/home.component';
import { MovieDetailsParentComponent } from './movies/movie-details-parent/movie-details-parent.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { TVComponent } from './tv/tv/tv.component';
import { TVDetailsParentComponent } from './tv/tv-details-parent/tv-details-parent.component';
import { WatchlistPatentComponent } from './watchlist/watchlist-patent/watchlist-patent.component';
import { NotfoundPageComponent } from './shared/notfound-page/notfound-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent, title: 'Home' },
  { path: 'movies', component: HomeComponent, title: 'Movies' },
  {
    path: 'watchlist',
    component: WatchlistPatentComponent,
    title: 'Watchlist',
  },
  {
    path: 'movies/:id',
    component: MovieDetailsParentComponent,
    title: 'Details',
  },
  { path: 'tvshows', component: TVComponent, title: 'TV-Shows' },
  {
    path: 'tvshows/:id',
    component: TVDetailsParentComponent,
    title: 'Details',
  },
  {
    path: '**',
    component: NotfoundPageComponent,
    title: '404 Not found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
