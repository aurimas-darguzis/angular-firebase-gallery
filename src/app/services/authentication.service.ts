import { AngularFireAuth } from 'angularfire2/auth';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private af: AngularFireAuth) { }

}
