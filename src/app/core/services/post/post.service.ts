import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../../models/post.model';
import { HttpService } from '../http/http.service';
import { HttpClient } from '@angular/common/http';
import { POSTS } from './posts.const';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[];
  private postSelected$: Observable<Post>;
  private postSubject: Subject<Post>;

  constructor(
    private httpService: HttpService,
    // private httlClient: HttpClient,
    // private posting: Post
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
  // post json method, with no FILE
  public postPost2(post: Post): Observable<Post>{
    return this.httpService.post<Post>('/post/', post);
  }
  // post ts method, with FILE
  /**
   *
   * @param post
   * id?: string;
   * image: string; // path
   * title: string;
   * likes?: Like[];
   * category?: Category[];
   * comments?: Comment[];
   * date: Date;
   * description?: string;
   */
  public postPost3(title: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    /*this.posting.title = title;
    this.posting.description = description;
    this.posting.image = photo;*/
    return this.httpService.post('/post/', fd);
  }
  public updatePost2(postId: string, post: Partial<Post>): Observable<Post>{
    return this.httpService.patch<Post>(`/post/${postId}`, post);
  }
  public deletePost2(postId: string): Observable<Post>{
    return this.httpService.delete<Post>(`/post/${postId}`);
  }
}
