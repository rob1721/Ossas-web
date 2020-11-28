import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../../models/like.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(
    private httpService: HttpService
  ) { }

  // -------------------------------------NEW METHODS
  public getAllLikes2(): Observable<Like[]> {
    return this.httpService.get<Like[]>('/like/all');
  }
  public getLike2(id: string): Observable<Like>{
    return this.httpService.get<Like>(`/like/${id}`);
  }
  public postLike2(like: Like): Observable<Like>{
    return this.httpService.post<Like>('/like/', like);
  }
  public updateLike2(likeId: string, like: Partial<Like>): Observable<Like>{
    return this.httpService.patch<Like>(`/like/${likeId}`, like);
  }
  public deleteLike2(likeId: string): Observable<Like>{
    return this.httpService.delete<Like>(`/like/${likeId}`);
  }

}
