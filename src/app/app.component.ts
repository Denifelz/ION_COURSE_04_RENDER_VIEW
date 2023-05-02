import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { World } from './elements/world';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  world = new World(document.body, 'World', 'big');
}
