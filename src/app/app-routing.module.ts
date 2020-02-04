import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {FourohfourComponent} from './fourohfour/fourohfour.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: FourohfourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
