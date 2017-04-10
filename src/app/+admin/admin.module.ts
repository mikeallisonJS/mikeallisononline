import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AngularFireModule} from "angularfire2";
import {BrowserModule} from "@angular/platform-browser";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const firebaseConfig = {
  apiKey: 'AIzaSyApUr9qfk1kmVl05hwBMvVKvOGz7-Ntvxg',
  authDomain: 'mikeallisononline.firebaseapp.com',
  databaseURL: 'https://mikeallisononline.firebaseio.com',
  projectId: "mikeallisononline",
  storageBucket: 'mikeallisononline.appspot.com',
  messagingSenderId: '658845182262'
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {}
