import { Component, OnInit } from '@angular/core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  constructor() { }

  ngOnInit() {
  }

}
