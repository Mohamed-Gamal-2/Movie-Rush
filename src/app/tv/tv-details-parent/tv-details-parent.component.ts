import { Component } from '@angular/core';
import { TVAPIService } from '../services/tvapi.service';

@Component({
  selector: 'app-tv-details-parent',
  templateUrl: './tv-details-parent.component.html',
  styleUrls: ['./tv-details-parent.component.css'],
})
export class TVDetailsParentComponent {
  showID!: any;
  constructor(private _API: TVAPIService) {}
  ngOnInit() {
    this._API.getShowID().subscribe((data: any) => {
      this.showID = data;
    });
  }
}
