import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {FourohfourComponent} from "./fourohfour/fourohfour.component";
import {ProjectsComponent} from "./+projects/projects.component";
import {ResumeComponent} from "./+resume/resume.component";
import {BlogComponent} from "./+blog/blog.component";
import {ContactComponent} from "./+contact/contact.component";
import {routing} from "./routes";
import {HomeComponent} from "./+home/home.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    ResumeComponent,
    ProjectsComponent,
    FourohfourComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
