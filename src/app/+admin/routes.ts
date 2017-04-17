import {BlogComponent} from "./blog/blog.component";
import {ConfigComponent} from "./config/config.component";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";

export const routes: Routes = [
  {path: 'admin', component: AdminComponent, children: [
    {path: 'blog', component: BlogComponent},
    {path: 'config', component: ConfigComponent}
  ]},
];

export const routing = RouterModule.forChild(routes);
