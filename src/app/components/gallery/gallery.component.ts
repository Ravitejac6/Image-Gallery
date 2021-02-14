import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction} from 'ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  galleryOptions : NgxGalleryOptions[];
  galleryImages : NgxGalleryImage[];
  galleryActions : NgxGalleryAction[];

  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
      {
        width : '600px',
        height:'400px',
        thumbnailsColumns: 4,
        imageAnimation : NgxGalleryAnimation.Slide,
        previewCloseOnClick: true, 
        previewCloseOnEsc: true,
        imageBullets:true,
        previewKeyboardNavigation: true,
      },
      {
        breakpoint:800,
        width:'100%',
        height:'600px',
        imagePercent:80,
        thumbnailsPercent:20,
        thumbnailsMargin : 20,
        thumbnailMargin: 20,
      },
      {
          breakpoint:400,
          preview : true,
      }
    ];

    this.galleryImages = [
      {
        small:'assets/1.jpg',
        medium:'assets/1.jpg',
        big:'assets/1.jpg',

      },
      {
        small:'assets/2.jpg',
        medium:'assets/2.jpg',
        big:'assets/2.jpg'
      },
      {
        small:'assets/3.jpg',
        medium:'assets/3.jpg',
        big:'assets/3.jpg'
      }
    ]
    
  }
}
