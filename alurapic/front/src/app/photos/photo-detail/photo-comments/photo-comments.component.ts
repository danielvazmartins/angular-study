import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../../photo/photo.service';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number
  comments$: Observable<PhotoComment[]>
  commentForm: FormGroup

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId)

    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
  })
  }

  save() {
    const comment = this.commentForm.get('comment').value
    /* O switchMap substitui o Observable que iria ser retornado por outro, 
    então o comments$ irá receber o Observable do getComments
    O tap executa uma função ao final
    */
    this.comments$ = this.photoService
        .addComments(this.photoId, comment)
        .pipe(switchMap(() =>  this.photoService.getComments(this.photoId)))
        .pipe(tap(() => {
            this.commentForm.reset()
            alert('Comentário adicionado com sucesso!')
        }))
  }
}
