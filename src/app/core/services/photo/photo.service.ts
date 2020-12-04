import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

import { Photo } from '../../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  time: number = Date.now();

  newPhoto: Photo;

  constructor(private http: HttpService) { }

  createPhoto(newTitle: string, newDescription: string, photoPath: string, id: string) {
    this.newPhoto = {
      title : newTitle,
      description : newDescription,
      imagePath : photoPath,
      uid : id
    };
    return this.http.post('/photo', this.newPhoto);
  }

  getPhotos() {
    return this.http.get<Photo[]>('/photo/all');
  }

  getPhoto(id: string) {
    return this.http.get<Photo>(`/photo/${id}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`/photo/${id}`);
  }

  updatePhoto(id: string, photo: Partial<Photo>) {
    return this.http.patch(`/photo/${id}`, {photo});
  }
}

