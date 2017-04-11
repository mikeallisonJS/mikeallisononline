import {Component, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  config;
  constructor(public af: AngularFire) {
  }
  ngOnInit() {
    this.getConfig();
  }
  getConfig() {
    this.config = this.af.database.object('/config');
  }
}
