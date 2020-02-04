import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Observable} from "rxjs";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  configObject;
  config;
  changes;
  constructor(public af: AngularFireDatabase, public snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.getConfig();
  }
  getConfig() {
    this.changes = {};
    this.configObject = this.af.object('/config');
    this.config = this.configObject.valueChanges();
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
    this.configObject.update(this.changes).then(() => {
      this.openSnackBar('Success', 'Done');
    }).catch(() => {
      this.openSnackBar('Fail', 'Done');
    });
  }
}
