import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from '../../core/user/user.service';

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
        private router: Router,
        private alertService: AlertService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId
        this.photo$ = this.photoService.findById(this.photoId)
        this.photo$.subscribe(() => {}, error => {
            console.log(error)
            this.router.navigate(['not-found'])
        })
    }

    remove() {
        this.photoService.removePhoto(this.photoId)
        .subscribe( () => {
            this.alertService.success('Photo removed!', true)
            // O 'replaceUrl: true', remove essa rota da historyApi
            this.router.navigate(['/user', this.userService.getUserName()], { replaceUrl: true })
        }, error => {
            console.log(error)
            this.alertService.warning('Error to remove photo')
        })
    }

    like(photo) {
        this.photoService.like(photo.id)
        .subscribe(liked => {
            this.photo$ = this.photoService.findById(photo.id)
        })
    }
}