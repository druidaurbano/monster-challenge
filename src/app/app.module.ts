import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickAndMortyModule } from './components/rick-and-morty/rick-and-morty.module';
import { GpsModule } from './components/gps/gps.module';
import { NotificationModule } from './components/notification/notification.module';
import { CameraModule } from './components/camera/camera.module';
import { FooterModule } from './components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RickAndMortyModule,
    GpsModule,
    NotificationModule,
    CameraModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
