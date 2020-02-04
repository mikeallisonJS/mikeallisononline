import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public user = null;
  constructor(public af: AngularFireAuth) {
    this.af.auth.onAuthStateChanged(user => {
      this.user = user;
      console.log(user);
    });
  }
  login() {
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.af.auth.signOut();
  }
  ngOnInit() {
  }
}
