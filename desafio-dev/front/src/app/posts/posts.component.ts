import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { Post } from '../shared/classes/post.class';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts:Post[]

  constructor(public postsService: PostsService) { 
    this.getPosts()
  }

  ngOnInit() {
  }

  private getPosts() {
    this.postsService.getPosts()
    .subscribe(posts => {
      this.posts = posts
    })
  }

}
