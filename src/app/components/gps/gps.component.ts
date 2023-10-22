import { Component } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent {
  loc: GeolocationPosition | undefined;

  constructor() {

  }

  ngOnInit() {
    this.printCurrentPosition();
    //this.getCurrentPosition();
  }

  printCurrentPosition = async () => {
    console.log('searching position');
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
  };

  async getCurrentPosition() {
    console.log('getting current position');
    this.loc = await Geolocation.getCurrentPosition();
    console.log('show mt the loc', this.loc);
  }

  /* async printCurrentPosition() {
    console.log('searching location');
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position: ', coordinates);
  } */

}
