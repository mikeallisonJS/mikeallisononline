import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList;
  constructor(public af: AngularFire) {

  }

  ngOnInit() {
    this.blogList = this.af.database.list('/blog');
  }

}
