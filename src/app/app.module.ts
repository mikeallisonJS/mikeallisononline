import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { AppComponent }   from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./+home/home.component";
import {ContactComponent} from "./+contact/contact.component";
import {BlogComponent} from "./+blog/blog.component";
import {ResumeComponent} from "./+resume/resume.component";
import {ProjectsComponent} from "./+projects/projects.component";
import {MdTabsModule} from "@angular2-material/tabs";

// const Routes: RouterConfig = [
//   {path: '', component: HomeComponent },
//   {path: 'contact', component: ContactComponent},
//   {path: 'project', component: ProjectComponent, children: [
//     {path: 'angularLodashString', component: AngularLodashStringComponent},
//     {path: 'angularTableScroll', component: AngularTableScrollComponent},
//     {path: 'jTableScroll', component: JTableScrollComponent},
//     {path: 'koDataTable', component: KoDataTableComponent},
//     {path: 'koTable', component: KoTableComponent}
//   ]},
//   {path: 'blog', component: BlogComponent},
//   {path: 'resume', component: ResumeComponent},
//   {path: 'projects', component: ProjectsComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(Routes),
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
