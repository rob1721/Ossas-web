import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../../models/post.model';
import { HttpService } from '../http/http.service';
import { POSTS } from './posts.const';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[];
  private postSelected$: Observable<Post>;
  private postSubject: Subject<Post>;

  constructor(
    private httpService: HttpService
  ) {
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


  // -------------------------------------NEW METHODS
  public getAllPosts2(): Observable<Post[]> {
    return this.httpService.get<Post[]>('/post/all');
  }
  public getPost2(id: string): Observable<Post>{
    return this.httpService.get<Post>(`/post/${id}`);
  }
  public postPost2(post: Post): Observable<Post>{
    return this.httpService.post<Post>('/post/', post);
  }
  public updatePost2(postId: string, post: Partial<Post>): Observable<Post>{
    return this.httpService.patch<Post>(`/post/${postId}`, post);
  }
  public deletePost2(postId: string): Observable<Post>{
    return this.httpService.delete<Post>(`/post/${postId}`);
  }
}
