import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  public photos: Photo[] = []
  public userName: string 
  public hasMore: boolean = true
  public currentPage: number = 1
  public filter : string = ''

  constructor(public photoService: PhotoService, public route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userName = params.userName
      this.photos = this.route.snapshot.data.photos
    })
  }

  load() {
    this.photoService.listPhotosFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      if ( photos.length ) {
        this.filter = ''
        this.photos = this.photos.concat(photos)
        this.hasMore = true
      } else {
        this.hasMore = false
      }
    })
  }
}
