import {HomeComponent} from "./+home/home.component";
import {BlogComponent} from "./+blog/blog.component";
import {ProjectsComponent} from "./+projects/projects.component";
import {ResumeComponent} from "./+resume/resume.component";
import {ContactComponent} from "./+contact/contact.component";
import {Routes, RouterModule} from "@angular/router";
import {FourohfourComponent} from "./fourohfour/fourohfour.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: FourohfourComponent}
  //   {path: 'project', component: ProjectComponent, children: [
//     {path: 'angularLodashString', component: AngularLodashStringComponent},
//     {path: 'angularTableScroll', component: AngularTableScrollComponent},
//     {path: 'jTableScroll', component: JTableScrollComponent},
//     {path: 'koDataTable', component: KoDataTableComponent},
//     {path: 'koTable', component: KoTableComponent}
//   ]},
];

export const routing = RouterModule.forRoot(routes);
