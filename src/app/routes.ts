import {HomeComponent} from "./+home/home.component";
import {BlogComponent} from "./+blog/blog.component";
import {ProjectsComponent} from "./+projects/projects.component";
import {ResumeComponent} from "./+resume/resume.component";
import {ContactComponent} from "./+contact/contact.component";
import {Routes, RouterModule} from "@angular/router";
import {FourohfourComponent} from "./fourohfour/fourohfour.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: FourohfourComponent}
];

export const routing = RouterModule.forRoot(routes);