import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatTabsModule, MatToolbarModule } from '@angular/material';
import { GalleryCountComponent } from './components/gallery-count/gallery-count.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryCountComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxGalleryModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
