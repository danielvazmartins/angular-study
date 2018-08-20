import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/classes/post.class';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post:Post = new Post

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {
    this.route.params
    .subscribe(params => {
      this.getPost(params.id)
    })
  }

  ngOnInit() {
  }

  private getPost(id:number) {
    this.postsService.getPost(id)
    .subscribe(post => {
      this.post = post
    })
  }

}
