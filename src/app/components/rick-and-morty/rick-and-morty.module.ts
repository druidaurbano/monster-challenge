import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyComponent } from './rick-and-morty.component';



@NgModule({
  declarations: [RickAndMortyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RickAndMortyComponent
  ]
})
export class RickAndMortyModule { }
