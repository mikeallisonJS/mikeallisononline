import {Component, ViewEncapsulation} from '@angular/core';
import {Routes} from "@angular/router";
import {routes} from "./routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private routes: Routes;
  constructor(
  ) {
    this.routes = routes;
  }
}
