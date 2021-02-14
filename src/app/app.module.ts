import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatToolbarModule } from '@angular/material';
import { GalleryCountComponent } from './components/gallery-count/gallery-count.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryCountComponent
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
