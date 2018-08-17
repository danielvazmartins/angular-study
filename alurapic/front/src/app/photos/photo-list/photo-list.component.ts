import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  public photos: Photo[]
  public userName: string 
  public filter:string
  public debounce: Subject<string> = new Subject<string>()
  public hasMore: boolean = true
  public currentPage: number = 1

  constructor(public photoService: PhotoService, public route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.userName = this.route.snapshot.params.userName
    this.photos = this.route.snapshot.data.photos
    this.debounce
    .pipe(debounceTime(300)) // Aguarda 300ms sem entrada para fazer o subscribe
    .subscribe(filter => {
      this.filter = filter
    })
  }

  ngOnDestroy() {
    this.debounce.unsubscribe()
  }

  load() {
    this.photoService.listPhotosFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      if ( photos.length ) {
        this.photos = this.photos.concat(photos)
        this.hasMore = true
      } else {
        this.hasMore = false
      }
    })
  }
}
