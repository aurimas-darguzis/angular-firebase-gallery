import { UploadService } from './../services/upload.service';
import { Upload } from '../models/upload.model';
import * as  _ from 'lodash';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
