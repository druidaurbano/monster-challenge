import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent {
  lat: string = '';
  lng: string = '';
  coordinates: any;

  constructor() {

  }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    console.log('getting current position');
    const location = await Geolocation.getCurrentPosition();
    console.log('show mt the loc', location);
    if(location) {
      this.coordinates = location;
    }
  }

}
