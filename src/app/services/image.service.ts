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

  constructor() { }

}
