// top-bar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.html',
  styleUrls: ['./top-bar.css']
})
export class TopBarComponent{
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}