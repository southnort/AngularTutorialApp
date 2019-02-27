import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';

const SAMPLE_SERVERS = [
  { id: 1, name: 'dev-web', isOnline: false },
  { id: 2, name: 'dev-mail', isOnline: false },
  { id: 3, name: 'prod-web', isOnline: true },
  { id: 4, name: 'prod-mail', isOnline: true },
]

@Component({
  selector: 'app-section-heakth',
  templateUrl: './section-heakth.component.html',
  styleUrls: ['./section-heakth.component.css']
})
export class SectionHeakthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
