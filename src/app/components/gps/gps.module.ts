import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpsComponent } from './gps.component';



@NgModule({
  declarations: [GpsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GpsComponent
  ]
})
export class GpsModule { }
