import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges, OnInit {

  @Input() photos:Photo[] = []
  public rows = []

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges) {
    if ( changes.photos ) {
      this.rows = this.groupColumns(this.photos)
    }
  }

  groupColumns(photos:Photo[]) {
    let rows = []
    if ( photos ) {
      for (let index = 0; index < photos.length; index+=3) {
        rows.push(photos.slice(index, index + 3))
      }
    }
    return rows
  }
}
