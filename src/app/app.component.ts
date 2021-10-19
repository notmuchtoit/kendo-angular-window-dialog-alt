import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  windowOpen = false;
  lastAction = '';

  images = [
    'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
  ];
  imageIndex = [
    'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
  ];

  yes() {
    this.lastAction = 'Yes';
    this.windowOpen = false;
  }

  no() {
    this.lastAction = 'No';
    this.windowOpen = false;
  }

  close() {
    this.lastAction = 'Close';
    this.windowOpen = false;
  }
}
