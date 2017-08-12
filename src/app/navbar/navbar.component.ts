import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import * as firebase from 'firebase/app';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: 'Gallery';
  user: Observable<firebase.User>;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
