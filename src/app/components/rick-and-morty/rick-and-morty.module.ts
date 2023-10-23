import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyComponent } from './rick-and-morty.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RickAndMortyComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RickAndMortyComponent
  ]
})
export class RickAndMortyModule { }
