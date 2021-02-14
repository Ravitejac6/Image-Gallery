import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction, NgxGalleryLayout} from 'ngx-gallery';


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
        imageArrowsAutoHide:true,
        thumbnailsArrowsAutoHide:true
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
          preview : false
      }
    ];

    this.galleryImages = [
      {
        small:'assets/1.jpg',
        medium:'assets/1.jpg',
        big:'assets/1.jpg',
        description:"Pizza"

      },
      {
        small:'assets/2.jpg',
        medium:'assets/2.jpg',
        big:'assets/2.jpg',
        description:"Burger"
      },
      {
        small:'assets/3.jpg',
        medium:'assets/3.jpg',
        big:'assets/3.jpg',
        description:"Chicken"
      },
      {
        small:'assets/4.jpg',
        medium:'assets/4.jpg',
        big:'assets/4.jpg',
        description:"Noodles"
      },
      {
        small:'assets/5.jpg',
        medium:'assets/5.jpg',
        big:'assets/5.jpg',
        description:"Pasta"
      },
      {
        small:'assets/6.jpg',
        medium:'assets/6.jpg',
        big:'assets/6.jpg',
        description:"Veg-pasta"
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
