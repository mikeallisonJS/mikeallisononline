import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList;
  user;
  constructor(public afd: AngularFireDatabase, public afa: AngularFireAuth) {
    this.afa.auth.onAuthStateChanged(auth => {
      if (auth) {
        this.user = auth;
      }
    });
  }
  ngOnInit() {
    this.blogList = this.afd.list('/blog').valueChanges();
  }
}
