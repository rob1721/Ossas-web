import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from '../../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:16000/api/photo';
  time: number = Date.now();

  newPhoto: Photo;

  constructor(private http: HttpClient) { }

  createPhoto(newTitle: string, newDescription: string, photoPath: string) {
    this.newPhoto = {
      title : newTitle,
      description : newDescription,
      imagePath : photoPath
    };
    return this.http.post(this.URI, this.newPhoto);
  }

  getPhotos() {
    return this.http.get<Photo[]>(`${this.URI}/all`);
  }

  getPhoto(id: string) {
    return this.http.get<Photo>(`${this.URI}/${id}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updatePhoto(id: string, title: string, description: string) {
    return this.http.put(`${this.URI}/${id}`, {title, description});
  }
}

