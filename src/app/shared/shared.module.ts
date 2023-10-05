import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotfoundPageComponent,
    LandingPageComponent,
  ],
  imports: [CommonModule, RouterLink, FormsModule, AppRoutingModule],
  exports: [NavBarComponent, FooterComponent, NotfoundPageComponent],
})
export class SharedModule {}
