import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../classes/post.class';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public http:HttpClient) { }

  public getPosts():Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts') 
  }

  public getPost(id:number):Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
