import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction} from 'ngx-gallery';

@Component({
  selector: 'app-gallery-count',
  templateUrl: './gallery-count.component.html',
  styleUrls: ['./gallery-count.component.css']
})
export class GalleryCountComponent implements OnInit {

  galleryOptions : NgxGalleryOptions[];
  galleryImages : NgxGalleryImage[];
  galleryActions : NgxGalleryAction[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {},
      { image: false, height: "100px", thumbnailsRemainingCount:true},
      { breakpoint:500,width: "100%", thumbnailsColumns:2}
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
      },
      {
        small:'assets/4.jpg',
        medium:'assets/4.jpg',
        big:'assets/4.jpg'
      },
      {
        small:'assets/5.jpg',
        medium:'assets/5.jpg',
        big:'assets/5.jpg'
      },
      {
        small:'assets/6.jpg',
        medium:'assets/6.jpg',
        big:'assets/6.jpg'
      },
      {
        small:'assets/7.jpg',
        medium:'assets/7.jpg',
        big:'assets/7.jpg'
      },
      {
        small:'assets/8.jpg',
        medium:'assets/8.jpg',
        big:'assets/8.jpg'
      }
    ]

  }

}
