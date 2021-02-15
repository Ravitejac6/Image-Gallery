import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction, NgxGalleryLayout} from 'ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  galleryOptions : NgxGalleryOptions[];
  galleryImages : NgxGalleryImage[] = [];
  galleryActions : NgxGalleryAction[];

  constructor() { }

  ngOnInit() {

    this.galleryOptions = [
      {
        width : '800px',
        height:'500px',
        thumbnailsColumns: 4,
        imageAnimation : NgxGalleryAnimation.Slide,
        previewCloseOnClick: true, 
        previewCloseOnEsc: true,
        imageBullets:true,
        previewKeyboardNavigation: true,
        imageArrowsAutoHide:true,
        thumbnailsArrowsAutoHide:true,
        arrowNextIcon: 'fa fa-chevron-right',
        arrowPrevIcon: 'fa fa-chevron-left'
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

    for(let i=1;i<=8;i++){
      let img = 'assets/'+i+'.jpg';
      let image_obj = {
          small:img,
          medium:img,
          big:img
      }
      this.galleryImages.push(image_obj);
    }
    
  }
}
