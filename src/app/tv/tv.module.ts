import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TVComponent } from './tv/tv.component';
import { TVCardComponent } from './tv-card/tv-card.component';
import { TVDetailsCildComponent } from './tv-details-cild/tv-details-cild.component';
import { TVDetailsParentComponent } from './tv-details-parent/tv-details-parent.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TVComponent,
    TVCardComponent,
    TVDetailsCildComponent,
    TVDetailsParentComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [
    TVComponent,
    TVCardComponent,
    TVDetailsCildComponent,
    TVDetailsParentComponent,
  ],
})
export class TVModule {}
