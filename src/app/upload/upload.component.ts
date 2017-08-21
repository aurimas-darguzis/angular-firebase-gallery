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

  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) { }

  ngOnInit () {
  }

  handleFiles (event) {
    this.files = event.target.files;
  }

  uploadFiles () {
    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length); // console.log _.range to see what it holds
    _.each(filesIdx, (idx) => {
      // console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      this.uploadService.uploadFile(this.upload);
    });
  }

}
