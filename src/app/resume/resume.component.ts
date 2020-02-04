import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  years(time: number) {
    return (new Date().getFullYear() - time).toString();
  }
}
