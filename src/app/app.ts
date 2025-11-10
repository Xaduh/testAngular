import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from "./test/test";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testAngular');
}
