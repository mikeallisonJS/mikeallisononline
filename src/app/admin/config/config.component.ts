import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  config;
  changes;
  constructor(public af: AngularFireDatabase, public snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.getConfig();
  }
  getConfig() {
    this.changes = {};
    this.config = this.af.object('/config');
  }
  change(key, value) {
    this.changes[key] = value;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  save() {
    this.config.update(this.changes).then(() => {
      this.openSnackBar('Success', 'Done');
    }).catch(() => {
      this.openSnackBar('Fail', 'Done');
    });
  }
}
