import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {RouterConfig, Router} from "@angular/router";
import {MdTabChangeEvent} from "@angular2-material/tabs";
import {routes} from "./routes";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private routes: RouterConfig;
  constructor(
    private router: Router,
  ) {
    this.routes = routes;
  }
  changeRoute(e: MdTabChangeEvent) {
    this.router.navigate(['/' + this.routes[e.index].path]);
  }
  ngOnInit() {
  }
}
