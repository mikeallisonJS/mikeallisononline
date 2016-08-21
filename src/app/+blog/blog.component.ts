import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.scss']
})
export class BlogComponent implements OnInit {
	posts: any;
	blogLoading: boolean;
	loadingText: string;
	constructor(private http: Http) {
		this.blogLoading = true;
		this.loadingText = '(Loading...';
	}
  ngOnInit() {
    this.http.get('/api/WordPress')
      .map((res: Response) => res.json())
      .subscribe(
        (data: Response) => this.posts = data,
        (err: Error) => this.loadingText = 'Unable to load WordPress data',
        () => this.blogLoading = false);
  }
}
