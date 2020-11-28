import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpService: HttpService
  ) { }

  // -------------------------------------NEW METHODS
  public getAllComments2(): Observable<Comment[]> {
    return this.httpService.get<Comment[]>('/comment/all');
  }
  public getComment2(id: string): Observable<Comment>{
    return this.httpService.get<Comment>(`/comment/${id}`);
  }
  public postComment2(comment: Comment): Observable<Comment>{
    return this.httpService.post<Comment>('/comment/', comment);
  }
  public updateComment2(commentId: string, comment: Partial<Comment>): Observable<Comment>{
    return this.httpService.patch<Comment>(`/comment/${commentId}`, comment);
  }
  public deleteComment2(commentId: string): Observable<Comment>{
    return this.httpService.delete<Comment>(`/comment/${commentId}`);
  }
}
