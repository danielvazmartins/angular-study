import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './photo-detail.component.html',
    styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
    photoId: number
    photo$: Observable<Photo>

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId
        this.photo$ = this.photoService.findById(this.photoId)
    }

    remove() {
        this.photoService.removePhoto(this.photoId)
        .subscribe( () => {
            this.router.navigate([''])
        })
    }
}