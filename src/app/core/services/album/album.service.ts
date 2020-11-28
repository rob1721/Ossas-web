import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';

import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private httpService: HttpService
  ) { }

  // -------------------------------------NEW METHODS
  public getAllAlbums2(): Observable<Album[]> {
    return this.httpService.get<Album[]>('/album/all');
  }
  public getAlbum2(id: string): Observable<Album>{
    return this.httpService.get<Album>(`/album/${id}`);
  }
  public postAlbum2(album: Album): Observable<Album>{
    return this.httpService.post<Album>('/album/', album);
  }
  public updateAlbum2(albumId: string, album: Partial<Album>): Observable<Album>{
    return this.httpService.patch<Album>(`/album/${albumId}`, album);
  }
  public deleteAlbum2(albumId: string): Observable<Album>{
    return this.httpService.delete<Album>(`/album/${albumId}`);
  }
}
