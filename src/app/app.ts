import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';
// import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('recipe-page-Angular');
}
