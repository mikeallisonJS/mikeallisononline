import { Component } from '@angular/core';
import {MD_GRID_LIST_DIRECTIVES} from "@angular2-material/grid-list";

@Component({
  selector: 'app-resume',
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.scss'],
  directives: [MD_GRID_LIST_DIRECTIVES]
})
export class ResumeComponent {
  constructor() {}
  years(time: number) {
    return (new Date().getFullYear() - time).toString();
  }
}
