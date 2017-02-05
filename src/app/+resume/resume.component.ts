import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.scss']
})
export class ResumeComponent {
  constructor() {}
  years(time: number) {
    return (new Date().getFullYear() - time).toString();
  }
}
