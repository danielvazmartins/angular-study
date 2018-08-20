import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../shared/classes/post.class';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() data:Post

  constructor() { }

  ngOnInit() {
  }

}
