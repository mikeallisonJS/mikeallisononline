import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";


export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public user = null;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.user = auth;
      console.log(auth);
    });
  }
  login() {
    this.af.auth.login(firebaseAuthConfig);
  }

  logout() {
    this.af.auth.logout();
  }
  ngOnInit() {
  }
}
