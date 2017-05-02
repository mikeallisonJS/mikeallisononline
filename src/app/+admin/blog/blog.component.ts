import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import assign from 'lodash/fp/assign';
import defaultTo from 'lodash/fp/defaultTo';
import toISOStringOrNull from '../fp/toISOStringOrNull';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList;
  post = null;
  constructor(public af: AngularFire) {

  }
  ngOnInit() {
    this.blogList = this.af.database.list('/blog');
  }
  select(post) {
    this.post = post;
    this.post.date = new Date(this.post.created);
  }
  create() {
    this.post = {title: '', content: '', enabled: true};
  }
  cancel() {
    this.post = null;
  }
  save() {
    const timestamp = new Date().toISOString();
    this.post.updated = timestamp;
    const parseDate = defaultTo(timestamp, toISOStringOrNull);
    if (this.post.$key) {
      this.post.created = parseDate(this.post.date);
      this.blogList.update(this.post.$key, this.post);
    } else {
      this.blogList.push(assign(this.post, {
        created: parseDate(this.post.date)
      }));
    }
  }
}
