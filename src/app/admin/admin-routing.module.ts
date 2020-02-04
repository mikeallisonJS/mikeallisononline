import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {AdminComponent} from './admin.component';
import {ConfigComponent} from './config/config.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent, children: [
      {path: 'blog', component: BlogComponent},
      {path: 'config', component: ConfigComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
