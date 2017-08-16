import { Upload } from './../models/upload.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { GalleryImage } from './../models/galleryImage.model';
import { AngularFireModule } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  private uploads: FirebaseListObservable<GalleryImage[]>;

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadFile (upload: Upload) {
    const storageRef = firebase.storage().ref();
    const putUpload = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
  }

}
