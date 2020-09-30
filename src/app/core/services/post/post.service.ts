import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../../models/post.model';
import { POSTS } from './posts.const';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[];
  private postSelected$: Observable<Post>;
  private postSubject: Subject<Post>;

  constructor() {
    this.posts = POSTS;
    this.postSubject = new Subject();
    this.postSelected$ = this.postSubject.asObservable();
  }

  public getAllPosts() {
    return this.posts;
  }

  public selectPost(post: Post) {
    this.postSubject.next(post);
  }

  public getPostSelected() {
    return this.postSelected$; // signo $ por observable
  }

  public getPostById(id: string) {
    return this.posts.find((post: Post) => post.id === id);
  }
}
