import { Injectable } from '@angular/core';
import { GalleryImage } from './../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      // if (auth !== undefined && auth !== null) {
      //   this.uid = auth.uid;
      // }

      this.uid = (auth !== undefined && auth !== null) ? auth.uid : null; // test this...
    });
  }

  getImages(): Observable<GalleryImage[]> {
    return this.db.list('uploads');
  }

  getImage(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
      .then((snap) => snap.val());
  }

}
