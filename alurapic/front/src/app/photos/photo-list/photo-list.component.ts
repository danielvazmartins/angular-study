import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  public photos: Photo[] 

  constructor(public photoService: PhotoService) {

  }

  ngOnInit() {
    this.photoService.listPhotosFromUser('flavio')
    .subscribe(photos => {
      this.photos = photos
    })
  }
}
