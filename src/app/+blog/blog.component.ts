import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList;
  user;
	constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.user = auth;
    });
	}
  ngOnInit() {
    this.blogList = this.af.database.list('/blog');
  }
}
