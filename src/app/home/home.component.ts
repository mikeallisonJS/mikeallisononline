import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config;
  faCircle = faCircle;
  constructor(public af: AngularFireDatabase ) {
  }
  ngOnInit() {
    this.getConfig();
  }
  getConfig() {
    this.config = this.af.object('/config');
  }
}
