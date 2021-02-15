import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction} from 'ngx-gallery';

@Component({
  selector: 'app-gallery-count',
  templateUrl: './gallery-count.component.html',
  styleUrls: ['./gallery-count.component.css']
})
export class GalleryCountComponent implements OnInit {

  galleryOptions : NgxGalleryOptions[];
  galleryImages : NgxGalleryImage[] = [];
  galleryActions : NgxGalleryAction[];

  constructor() { 
  }

  ngOnInit() {
    this.galleryOptions = [
      {},
      { image: false, height: "100px", thumbnailsRemainingCount:true},
      { breakpoint:500,width: "100%", thumbnailsColumns:2}
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
