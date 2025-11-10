import { Component } from '@angular/core';
import { Test } from "../test/test";
import { User } from "../interface/user";

@Component({
  selector: 'app-home',
  imports: [Test],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  user: User = {
    id: 1,
    name: "test"
  }
}
