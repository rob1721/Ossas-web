import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/core/services/photo/photo.service';

// Angular services
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;
  downloadURL: Observable<string>;
  down: string;
  time: number = Date.now();

  uid: string;

  constructor(
    private photoService: PhotoService,
    private storage: AngularFireStorage,
    private router: Router
    // private postService: PostService
  ) { }

  ngOnInit(): void {
    this.uid = '5fbed1a24fca323cd827f238'; // usertesting
    // this.uid = '5fbefe308b1acf29a4f1e25b'; // wasta
    // this.uid = '5fc019d9c1231638fc815195'; // panchodon
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      // por lo menos hay una foto
      this.file = (event.target.files[0] as File);
      // imagen preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
      // this.uploadFile(this.file);
    }
  }

  uploadPhoto(title: string, description: string /*title: HTMLInputElement, description: HTMLTextAreaElement*/): boolean {
    console.log(title);
    console.log(description);

    this.photoService.createPhoto(title, description, this.down, this.uid)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    return false;
  }

  uploadFile(title: string, description: string) {
    const file = this.file; // event.target.files[0];
    const filePath = `${this.time}` + file.name;
    console.log(filePath);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe( (asd: string) =>
          this.getURL(asd, title, description)
        );
        console.log(this.downloadURL);
      }),
    ).subscribe();
    console.log();
  }

  getURL(qwe: string, title: string, description: string) {
    this.down = qwe;
    console.log(this.down);
    this.uploadPhoto(title, description);
  }


  testing() {
    console.log(this.time);
  }
}
