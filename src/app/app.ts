import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { TopBarComponent } from './top-bar/top-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, TopBarComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
