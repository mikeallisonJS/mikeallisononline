import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { ProjectsComponent } from './projects/projects.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AdminModule} from "./admin/admin.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";

export const firebaseConfig = {
  apiKey: 'AIzaSyApUr9qfk1kmVl05hwBMvVKvOGz7-Ntvxg',
  authDomain: 'mikeallisononline.firebaseapp.com',
  databaseURL: 'https://mikeallisononline.firebaseio.com',
  projectId: 'mikeallisononline',
  storageBucket: 'mikeallisononline.appspot.com',
  messagingSenderId: '658845182262'
};

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    FourohfourComponent,
    ProjectsComponent
  ],
  imports: [
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
