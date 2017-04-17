import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./blog/blog.component";
import {ConfigComponent} from "./config/config.component";
import {firebaseConfig} from "../app.module";
import {AngularFireModule} from "angularfire2";
import {routing} from "./routes";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    routing,
    MaterialModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    BlogComponent,
    ConfigComponent
  ]
})
export class AdminModule { }
